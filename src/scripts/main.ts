import Lenis from 'lenis';

const root = document.documentElement;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const TOP_OFFSET = -76;

/* ---------- smooth scroll ---------- */

let lenis: Lenis | null = null;
if (!reduce) {
  lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1, smoothWheel: true });
  const raf = (time: number) => {
    lenis!.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

function scrollToTarget(target: HTMLElement | number) {
  if (lenis) lenis.scrollTo(target, { offset: typeof target === 'number' ? 0 : TOP_OFFSET, duration: 1.1 });
  else if (typeof target === 'number') window.scrollTo({ top: target });
  else target.scrollIntoView({ block: 'start' });
}

document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href')!.slice(1);
  const el = id === 'top' ? null : document.getElementById(id);
  if (id !== 'top' && !el) return;
  e.preventDefault();
  closeMenu();
  scrollToTarget(el ?? 0);
  history.replaceState(null, '', id === 'top' ? location.pathname : `#${id}`);
  if (el) {
    el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
  }
});

/* ---------- page-load moment ---------- */

const ready = () => requestAnimationFrame(() => root.classList.add('is-ready'));
if (document.fonts?.ready) {
  Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 900))]).then(ready);
} else ready();

/* ---------- header: scrolled state, scroll spy, mobile menu ---------- */

const top = document.querySelector<HTMLElement>('[data-top]');
const onScroll = () => top?.classList.toggle('is-scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-nav]')];
const spy = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const id = entry.target.id;
      navLinks.forEach((l) => l.classList.toggle('is-current', l.dataset.nav === id));
    }
  },
  { rootMargin: '-45% 0px -50% 0px' }
);
document.querySelectorAll('main > section[id]').forEach((s) => spy.observe(s));

const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu]');
const nav = document.getElementById('site-nav');
function closeMenu() {
  if (!menuBtn || menuBtn.getAttribute('aria-expanded') !== 'true') return;
  menuBtn.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-open');
}
menuBtn?.addEventListener('click', () => {
  const open = menuBtn.getAttribute('aria-expanded') !== 'true';
  menuBtn.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('is-open', open);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

/* ---------- magnetic buttons ---------- */

if (finePointer && !reduce) {
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.22;
      const y = (e.clientY - r.top - r.height / 2) * 0.32;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transition = 'transform .5s cubic-bezier(.16,1,.3,1), color .3s';
      el.style.transform = '';
      setTimeout(() => (el.style.transition = ''), 500);
    });
  });
}

/* ---------- the replay: evidence, flag, approval ---------- */

const replay = document.querySelector<HTMLElement>('[data-replay]');
if (replay) setupReplay(replay);

function setupReplay(el: HTMLElement) {
  const fields = [...el.querySelectorAll<HTMLElement>('[data-field]')];
  const marks = [...el.querySelectorAll<HTMLElement>('mark[data-q]')];
  const flag = el.querySelector<HTMLElement>('[data-flag]')!;
  const status = el.querySelector<HTMLElement>('[data-status]')!;
  const btn = el.querySelector<HTMLButtonElement>('[data-approve]')!;
  const btnLabel = btn.querySelector('span')!;
  const wires = el.querySelector<SVGSVGElement>('[data-wires]')!;
  const sheet = el.querySelector<HTMLElement>('.replay__sheet')!;
  let timers: number[] = [];
  let approved = false;

  const quoteIds = (f: HTMLElement) =>
    (f.dataset.quotes ?? '')
      .split(',')
      .filter(Boolean)
      .map(Number);

  function light(f: HTMLElement | null) {
    fields.forEach((x) => x.classList.toggle('is-active', x === f));
    const ids = f ? quoteIds(f) : [];
    marks.forEach((m) => m.classList.toggle('is-lit', ids.includes(Number(m.dataset.q))));
    drawWires(f, ids);
  }

  // A thin line from the field back to the words it came from.
  function drawWires(f: HTMLElement | null, ids: number[]) {
    wires.replaceChildren();
    if (!f || !ids.length) return;
    const base = sheet.getBoundingClientRect();
    const fr = (f.querySelector('.chip') ?? f).getBoundingClientRect();
    for (const id of ids) {
      const m = marks.find((x) => Number(x.dataset.q) === id);
      if (!m) continue;
      const rects = m.getClientRects();
      const mr = rects[rects.length - 1] ?? m.getBoundingClientRect();
      const x1 = fr.left - base.left + 10;
      const y1 = fr.top - base.top;
      const x2 = mr.left - base.left + Math.min(mr.width / 2, 40);
      const y2 = mr.bottom - base.top + 1;
      const dy = Math.max(24, (y1 - y2) * 0.5);
      const d = `M${x1},${y1} C${x1},${y1 - dy} ${x2},${y2 + dy} ${x2},${y2}`;
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      wires.appendChild(path);
      if (!reduce) {
        const len = path.getTotalLength();
        path.style.strokeDasharray = `${len}`;
        path.style.strokeDashoffset = `${len}`;
        path.getBoundingClientRect();
        path.style.transition = 'stroke-dashoffset .5s cubic-bezier(.16,1,.3,1)';
        path.style.strokeDashoffset = '0';
      }
    }
  }

  function settle() {
    fields.forEach((f) => f.classList.add('is-in'));
    flag.classList.add('is-in');
    el.classList.add('is-played', 'is-waiting');
    light(null);
  }

  function play() {
    timers.forEach(clearTimeout);
    timers = [];
    approved = false;
    el.classList.remove('is-played', 'is-approved', 'is-waiting');
    fields.forEach((f) => f.classList.remove('is-in'));
    flag.classList.remove('is-in');
    status.textContent = status.dataset.waiting ?? '';
    btnLabel.textContent = btn.dataset.labelApprove ?? '';
    light(null);
    if (reduce) return settle();
    const step = 520;
    fields.forEach((f, i) => {
      timers.push(
        window.setTimeout(() => {
          f.classList.add('is-in');
          light(quoteIds(f).length ? f : null);
        }, 400 + i * step)
      );
    });
    timers.push(window.setTimeout(() => {
      light(null);
      flag.classList.add('is-in');
    }, 400 + fields.length * step));
    timers.push(window.setTimeout(settle, 700 + fields.length * step));
  }

  btn.addEventListener('click', () => {
    if (!el.classList.contains('is-played')) return;
    if (!approved) {
      approved = true;
      el.classList.remove('is-waiting');
      el.classList.add('is-approved');
      status.textContent = status.dataset.approved ?? '';
      btnLabel.textContent = btn.dataset.labelAgain ?? '';
    } else {
      play();
    }
  });

  fields.forEach((f) => {
    if (!f.hasAttribute('tabindex')) return;
    f.addEventListener('pointerenter', () => el.classList.contains('is-played') && light(f));
    f.addEventListener('pointerleave', () => el.classList.contains('is-played') && light(null));
    f.addEventListener('focus', () => light(f));
    f.addEventListener('blur', () => light(null));
    // Touch: a tap shows the source, a second tap elsewhere clears it.
    f.addEventListener('click', () => el.classList.contains('is-played') && light(f));
  });
  window.addEventListener('resize', () => {
    const active = fields.find((f) => f.classList.contains('is-active')) ?? null;
    if (active) light(active);
  });

  // Start once the panel is on screen, so the moment isn't missed.
  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect();
        setTimeout(play, reduce ? 0 : 700);
      }
    },
    { threshold: 0.35 }
  );
  io.observe(el);
}

/* ---------- projects: expand rows, peek previews ---------- */

const projs = [...document.querySelectorAll<HTMLElement>('[data-proj]')];
projs.forEach((p) => {
  const btn = p.querySelector<HTMLButtonElement>('.proj__toggle')!;
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(open));
    p.classList.toggle('is-open', open);
    if (open) hidePeek();
  });
});

const peek = document.querySelector<HTMLElement>('[data-peek]');
let peekX = 0;
let peekY = 0;
let curX = 0;
let curY = 0;
let peekOn = false;
let peekRaf = 0;
function hidePeek() {
  if (!peek) return;
  peekOn = false;
  peek.classList.remove('is-on');
}
if (peek && finePointer) {
  const card = document.createElement('div');
  card.className = 'peek__card';
  peek.appendChild(card);
  let current = '';
  const tick = () => {
    curX += (peekX - curX) * 0.18;
    curY += (peekY - curY) * 0.18;
    const vx = peekX - curX;
    peek.style.transform = `translate3d(${curX + 28}px, ${curY - 90}px, 0)`;
    card.style.setProperty('--rot', `${Math.max(-6, Math.min(6, vx * 0.08))}deg`);
    peekRaf = peekOn || Math.abs(vx) > 0.5 ? requestAnimationFrame(tick) : 0;
  };
  projs.forEach((p) => {
    const head = p.querySelector<HTMLElement>('.proj__toggle')!;
    const source = p.querySelector<HTMLElement>('[data-preview]')!;
    head.addEventListener('pointerenter', (e) => {
      if (p.classList.contains('is-open')) return;
      if (current !== p.dataset.proj) {
        card.replaceChildren(source.firstElementChild!.cloneNode(true));
        const img = card.querySelector('img');
        if (img) img.loading = 'eager';
        current = p.dataset.proj!;
      }
      if (!peekOn) {
        curX = peekX = e.clientX;
        curY = peekY = e.clientY;
      }
      peekOn = true;
      peek.classList.add('is-on');
      if (!peekRaf) peekRaf = requestAnimationFrame(tick);
    });
    head.addEventListener('pointermove', (e) => {
      peekX = e.clientX;
      peekY = e.clientY;
      if (!peekRaf && peekOn) peekRaf = requestAnimationFrame(tick);
    });
    head.addEventListener('pointerleave', hidePeek);
  });
  window.addEventListener('scroll', hidePeek, { passive: true });
}

/* ---------- sealed finding ---------- */

document.querySelectorAll<HTMLButtonElement>('[data-sealed]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(open));
    btn.closest('.sealed')?.classList.toggle('is-open', open);
  });
});

/* ---------- copy email ---------- */

document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
  const label = btn.querySelector('span')!;
  const original = label.textContent ?? '';
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy ?? '');
      label.textContent = btn.dataset.copied ?? 'Copied';
    } catch {
      location.href = `mailto:${btn.dataset.copy}`;
      return;
    }
    setTimeout(() => (label.textContent = original), 1800);
  });
});

/* ---------- headlines widen as they arrive ---------- */

const stretchers = [...document.querySelectorAll<HTMLElement>('[data-stretch]')];
if (!reduce && stretchers.length) {
  let queued = false;
  const update = () => {
    queued = false;
    const vh = window.innerHeight;
    for (const el of stretchers) {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) continue;
      // 0 when the title enters at the bottom, 1 by the time it reaches 55% of the viewport.
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.45)));
      el.style.setProperty('--stretch', `${62 + p * 14}%`);
    }
  };
  const queue = () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue);
  update();
}
