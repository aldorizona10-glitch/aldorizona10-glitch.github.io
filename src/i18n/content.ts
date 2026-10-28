import type { Lang, SectionId } from './config';
import type { ProjectId } from '../data/site';

// House style: no em-dash and no en-dash anywhere in visible copy.
// Every claim here must match something a stranger can open and check.

export type Field = { label: string; value: string; quotes: string[] };

type Dict = {
  htmlLang: string;
  ogLocale: string;
  meta: { title: string; description: string; ogAlt: string };
  a11y: { skip: string; primary: string; lang: string; home: string; details: string };
  nav: Record<SectionId, string>;
  emailMe: string;
  hero: {
    lines: string[];
    intro: string;
    ctaWork: string;
    ctaEmail: string;
  };
  replay: {
    title: string;
    messageLabel: string;
    message: string;
    recordLabel: string;
    fields: Field[];
    inferred: { label: string; value: string; note: string };
    flag: string;
    waiting: string;
    approve: string;
    stamp: string;
    approved: string;
    again: string;
    caption: string;
    captionLink: string;
  };
  proof: { text: string; link: string; href: 'hackerone' | 'wpMergedSearch' | 'wordpress' }[];
  work: {
    title: string;
    intro: string;
    demo: string;
    source: string;
    all: string;
    items: Record<ProjectId, { kind: string; summary: string; detail: string }>;
    facts: Partial<Record<ProjectId, string[]>>;
  };
  oss: {
    title: string;
    intro: string;
    merged: string;
    inReview: string;
    changes: Record<string, string>;
    note: string;
    profile: string;
  };
  security: {
    title: string;
    intro: string;
    labels: { severity: string; class: string; platform: string; reported: string; status: string };
    sealedTitle: string;
    sealed: string;
    xai: { award: string; summary: string; severity: string; class: string; reported: string; status: string; verify: string };
    onnx: { award: string; summary: string; severity: string; class: string; reported: string; status: string; verify: string };
  };
  about: {
    title: string;
    lead: string;
    body: string[];
    stepsTitle: string;
    steps: { title: string; text: string }[];
    education: string;
    press: string;
    pressLink: string;
  };
  contact: {
    title: string;
    text: string;
    copy: string;
    copied: string;
    elsewhere: string;
  };
  footer: string;
};

const MESSAGE =
  'halo kak mau order dong, nama Rina Sari, kirim ke Jl. Melati No.12 Bandung 40123. minta 2 kaos polos hitam size L @85rb sama 1 topi baseball @60rb. bayar transfer BCA. tolong dikirim besok ya. wa 0812-3456-7890 makasih';

const en: Dict = {
  htmlLang: 'en',
  ogLocale: 'en_US',
  meta: {
    title: 'Aldo Rizona, AI and automation engineer',
    description:
      'AI and automation engineer in Padang, Indonesia. LLM tools that quote their sources, agents that ask before they act, a $2,500 bounty from X/xAI, and 7 pull requests merged into WordPress.',
    ogAlt: 'Aldo Rizona. AI that shows its work, and asks before it acts.',
  },
  a11y: {
    skip: 'Skip to content',
    primary: 'Sections',
    lang: 'Language',
    home: 'Aldo Rizona, back to top',
    details: 'Show details',
  },
  nav: { work: 'Work', 'open-source': 'Open source', security: 'Security', about: 'About' },
  emailMe: 'Email me',
  hero: {
    lines: ['AI that shows', 'its work, and asks', 'before it acts.'],
    intro:
      'I’m Aldo Rizona, an AI and automation engineer in Padang, Indonesia. I write the spec and the checks, AI coding agents do much of the building, and I own the review, the tests and what ships.',
    ctaWork: 'See the work',
    ctaEmail: 'Email me',
  },
  replay: {
    title: 'Rapikan, replayed',
    messageLabel: 'Incoming WhatsApp order',
    message: MESSAGE,
    recordLabel: 'Structured record',
    fields: [
      { label: 'Customer', value: 'Rina Sari', quotes: ['nama Rina Sari'] },
      { label: 'Items', value: 'Kaos polos hitam (L) × 2, Topi baseball × 1', quotes: ['2 kaos polos hitam size L', '1 topi baseball'] },
      { label: 'Deliver to', value: 'Jl. Melati No.12, Bandung 40123', quotes: ['kirim ke Jl. Melati No.12 Bandung 40123'] },
      { label: 'Payment', value: 'Bank transfer (BCA)', quotes: ['bayar transfer BCA'] },
      { label: 'Ship', value: 'Tomorrow', quotes: ['tolong dikirim besok'] },
    ],
    inferred: { label: 'Total', value: 'Rp230.000', note: 'Inferred from line items, not stated' },
    flag: 'No delivery fee in the message. Ask before confirming.',
    waiting: 'Waiting for a person. Nothing has been sent.',
    approve: 'Approve record',
    stamp: 'Approved',
    approved: 'Approved by a person. Rapikan never sends anything on its own.',
    again: 'Replay',
    caption: 'A replay of Rapikan’s sample order, scripted on this page. Point at a field to see its source.',
    captionLink: 'Try the live tool',
  },
  proof: [
    { text: '$2,500 bounty from X/xAI for a High-severity access-control report.', link: 'HackerOne profile', href: 'hackerone' },
    { text: '7 pull requests merged into WordPress Presence API.', link: 'See them on GitHub', href: 'wpMergedSearch' },
    { text: 'Listed as a contributor to the Presence API plugin on WordPress.org.', link: 'WordPress.org profile', href: 'wordpress' },
  ],
  work: {
    title: 'Work you can open',
    intro: 'Every project has public source. Three of them run live in your browser right now.',
    demo: 'Live demo',
    source: 'Source code',
    all: 'All repositories on GitHub',
    items: {
      handoff: {
        kind: 'Open-source AI browser agent',
        summary: 'You log in yourself, a Claude agent drives the browser, and anything sensitive waits for your approval.',
        detail:
          'It works from screenshots and indexed page elements instead of hand-written selectors. New actions are plain decorated functions. Approval runs in four modes, from paranoid to dry-run. MIT licensed, 34 automated tests, and it ships a Claude Code skill.',
      },
      rapikan: {
        kind: 'Applied-LLM tool',
        summary: 'Turns messy business text into structured records. Every field quotes its source, gaps are flagged, and a person approves.',
        detail:
          'Six workflows, from WhatsApp orders and support tickets to receipts. It runs in the page with no backend, and your API key never leaves your browser. The replay at the top of this page uses its sample order.',
      },
      injectlab: {
        kind: 'Prompt-injection training range',
        summary: 'Attack a simulated assistant. Its defence layers tell you what they caught, so you learn to diagnose instead of copying payloads.',
        detail: 'Runs offline in the browser, with levels, hints and a cheat sheet of technique families.',
      },
      ledgerline: {
        kind: 'Invoice studio',
        summary: 'Build an invoice and print a clean PDF without uploading anything.',
        detail: 'One HTML file, no dependencies, works offline. Saved clients stay on your device.',
      },
      securetask: {
        kind: 'Security-first REST API',
        summary: 'A FastAPI backend that shows how I handle authentication and access control.',
        detail:
          'JWT with separate access and refresh tokens, per-object authorization, login rate limiting, and a pytest suite that includes a cross-account test. OpenAPI docs are generated automatically.',
      },
      quickops: {
        kind: 'Ops automation kit',
        summary: 'Outreach, reply monitoring and delivery workflows for a one-person shop.',
        detail: 'Python and the Gmail API, wired together so one operator can run like a small team.',
      },
    },
    facts: {
      handoff: ['Log in yourself.', 'Hand the browser to an AI.', 'Approve before it acts.', 'Modes: gated, paranoid, dry-run, yolo'],
      rapikan: ['Every field quotes its source.', 'Gaps are flagged, not invented.', 'A person approves.', 'Six workflows, no backend'],
      securetask: ['JWT access and refresh tokens', 'Passwords hashed with bcrypt', 'Other users’ tasks return 404', 'Login: 5 tries per minute per IP', 'OpenAPI docs at /docs'],
      quickops: ['Outreach', 'Reply monitoring', 'Delivery workflows', 'Gmail API'],
    },
  },
  oss: {
    title: 'Code maintainers kept',
    intro:
      'Pull requests to projects I don’t own, each reviewed by someone with no reason to be generous. Seven landed in WordPress’s Presence API, and WordPress.org lists me as a contributor to the plugin.',
    merged: 'Merged',
    inReview: 'In review',
    changes: {
      '#213': 'Store presence data as longtext and compare the schema version as an integer.',
      '#240': 'Add test coverage for cron scheduling.',
      '#258': 'Delete expired presence rows by key in bounded passes.',
      '#436': 'Run the Jest unit tests in CI.',
      '#719': 'Show client_id and expiry in the DB viewer.',
      '#760': 'Move the debugger and DB viewer into a presence-debugger plugin.',
      '#774': 'Let a site switch off the Active Posts dashboard widget.',
      '#48': 'Bound cursor loops in pagination without dropping empty pages.',
      '#13324': 'Align the line height of the update details toggle.',
      '#1335': 'Fix an IndexError crash in the datetime parser on malformed format strings.',
    },
    note: 'Two are still open. They are shown as open, not rounded up.',
    profile: 'WordPress.org profile',
  },
  security: {
    title: 'Security findings',
    intro: 'I report through official channels. Most audits find nothing. These two found something.',
    labels: { severity: 'Severity', class: 'Class', platform: 'Platform', reported: 'Reported', status: 'Status' },
    sealedTitle: 'Sealed',
    sealed: 'The program lets me say the bounty exists, not how the weakness works. The details stay sealed.',
    xai: {
      award: '$2,500 bounty',
      summary: 'A High-severity access-control flaw on the X/xAI Grok surface, reported through HackerOne, triaged, escalated and rewarded.',
      severity: 'High, CVSS 7.5',
      class: 'Broken access control (IDOR)',
      reported: 'January 2026',
      status: 'Resolved',
      verify: 'Verify on HackerOne',
    },
    onnx: {
      award: 'Publicly disclosed',
      summary:
        'A denial-of-service in the ONNX specification. The Expand operator never bounds its output size, so a model of about 183 bytes can ask the runtime for roughly 300 TB of memory and crash services that load models automatically.',
      severity: 'Medium, CVSS 5.5',
      class: 'CWE-400, uncontrolled resource consumption',
      reported: 'December 2025',
      status: 'Public on huntr',
      verify: 'Read the report on huntr',
    },
  },
  about: {
    title: 'I read systems the way I read statutes.',
    lead: 'I studied Constitutional Law at UIN Imam Bonjol Padang. Law trained one habit I use every day: read a rule to find what it forgot to say.',
    body: [
      'The article that omits a condition. The definition drawn too narrowly. The procedure that never says who verifies. Software reads the same way. An API is a set of rules about who may reach what, and an AI agent is a set of rules about what it may do without asking.',
      'That is why the tools I build quote their evidence and stop for a person before acting. It is also how I found the bug X/xAI paid for. All of it is self-taught, and built from Padang.',
    ],
    stepsTitle: 'How I work',
    steps: [
      { title: 'Write the spec', text: 'What the tool must do, what it must never do, and how we will know it works.' },
      { title: 'Direct the agents', text: 'AI coding agents write much of the code, inside that spec.' },
      { title: 'Review and test', text: 'I read the changes, run the tests, and try to break it.' },
      { title: 'Ship and own it', text: 'If it fails in production, that is on me, not the model.' },
    ],
    education: 'Sarjana Hukum (Bachelor of Law), Constitutional Law, UIN Imam Bonjol Padang, 2022 to 2026.',
    press: 'ReWork Academy told the story of a constitutional-law student who found a Grok vulnerability.',
    pressLink: 'Read the feature',
  },
  contact: {
    title: 'Hiring, or have a workflow to automate?',
    text: 'I’m open to full-time AI and automation roles, remote or in Indonesia, and to freelance projects. Email is the fastest way to reach me.',
    copy: 'Copy email',
    copied: 'Copied',
    elsewhere: 'Elsewhere',
  },
  footer: 'Built with Astro and directed with AI coding agents. Every claim on this page links to a source you can check.',
};

const id: Dict = {
  htmlLang: 'id',
  ogLocale: 'id_ID',
  meta: {
    title: 'Aldo Rizona, AI & automation engineer',
    description:
      'AI & automation engineer di Padang. Tool LLM yang mengutip sumbernya, agen yang bertanya sebelum bertindak, bounty $2.500 dari X/xAI, dan 7 pull request yang di-merge ke WordPress.',
    ogAlt: 'Aldo Rizona. AI yang menunjukkan buktinya, dan bertanya sebelum bertindak.',
  },
  a11y: {
    skip: 'Lompat ke konten',
    primary: 'Bagian',
    lang: 'Bahasa',
    home: 'Aldo Rizona, kembali ke atas',
    details: 'Lihat detail',
  },
  nav: { work: 'Karya', 'open-source': 'Open source', security: 'Keamanan', about: 'Tentang' },
  emailMe: 'Kirim email',
  hero: {
    lines: ['AI yang menunjukkan', 'buktinya, dan bertanya', 'sebelum bertindak.'],
    intro:
      'Saya Aldo Rizona, AI & automation engineer di Padang. Saya menulis spesifikasi dan cara mengujinya, agen AI mengerjakan sebagian besar kodenya, dan saya yang memegang review, pengujian, dan apa yang dirilis.',
    ctaWork: 'Lihat karya',
    ctaEmail: 'Kirim email',
  },
  replay: {
    title: 'Rapikan, diputar ulang',
    messageLabel: 'Pesanan masuk lewat WhatsApp',
    message: MESSAGE,
    recordLabel: 'Record terstruktur',
    fields: [
      { label: 'Pelanggan', value: 'Rina Sari', quotes: ['nama Rina Sari'] },
      { label: 'Barang', value: 'Kaos polos hitam (L) × 2, Topi baseball × 1', quotes: ['2 kaos polos hitam size L', '1 topi baseball'] },
      { label: 'Kirim ke', value: 'Jl. Melati No.12, Bandung 40123', quotes: ['kirim ke Jl. Melati No.12 Bandung 40123'] },
      { label: 'Pembayaran', value: 'Transfer bank (BCA)', quotes: ['bayar transfer BCA'] },
      { label: 'Pengiriman', value: 'Besok', quotes: ['tolong dikirim besok'] },
    ],
    inferred: { label: 'Total', value: 'Rp230.000', note: 'Dihitung dari rincian barang, tidak disebut' },
    flag: 'Ongkir tidak disebut di pesan. Tanyakan dulu sebelum konfirmasi.',
    waiting: 'Menunggu persetujuan manusia. Belum ada yang dikirim.',
    approve: 'Setujui record',
    stamp: 'Disetujui',
    approved: 'Disetujui oleh manusia. Rapikan tidak pernah mengirim apa pun sendiri.',
    again: 'Putar ulang',
    caption: 'Putar ulang contoh pesanan dari Rapikan, dijalankan di halaman ini. Arahkan ke sebuah kolom untuk melihat sumbernya.',
    captionLink: 'Coba tool aslinya',
  },
  proof: [
    { text: 'Bounty $2.500 dari X/xAI untuk laporan kontrol akses berseveritas High.', link: 'Profil HackerOne', href: 'hackerone' },
    { text: '7 pull request di-merge ke WordPress Presence API.', link: 'Lihat di GitHub', href: 'wpMergedSearch' },
    { text: 'Tercatat sebagai kontributor plugin Presence API di WordPress.org.', link: 'Profil WordPress.org', href: 'wordpress' },
  ],
  work: {
    title: 'Karya yang bisa dibuka',
    intro: 'Semua proyek punya kode sumber publik. Tiga di antaranya bisa langsung dicoba di browser Anda.',
    demo: 'Demo live',
    source: 'Kode sumber',
    all: 'Semua repositori di GitHub',
    items: {
      handoff: {
        kind: 'Agen browser AI open source',
        summary: 'Anda login sendiri, agen Claude menjalankan browser, dan setiap aksi sensitif menunggu persetujuan Anda.',
        detail:
          'Bekerja dari screenshot dan elemen halaman yang diberi indeks, bukan selector yang ditulis manual. Aksi baru cukup berupa fungsi dengan dekorator. Persetujuan punya empat mode, dari paranoid sampai dry-run. Lisensi MIT, 34 tes otomatis, dan sudah termasuk skill Claude Code.',
      },
      rapikan: {
        kind: 'Tool applied-LLM',
        summary: 'Mengubah teks bisnis yang berantakan jadi record terstruktur. Setiap kolom mengutip sumbernya, yang kosong ditandai, dan manusia yang menyetujui.',
        detail:
          'Enam alur kerja, dari order WhatsApp dan tiket support sampai struk. Berjalan di halaman tanpa backend, dan API key Anda tidak pernah keluar dari browser. Putar ulang di bagian atas halaman ini memakai contoh pesanannya.',
      },
      injectlab: {
        kind: 'Arena latihan prompt injection',
        summary: 'Serang asisten simulasi. Lapisan pertahanannya memberi tahu apa yang mereka tangkap, jadi Anda belajar mendiagnosis, bukan menyalin payload.',
        detail: 'Berjalan offline di browser, dengan level, petunjuk, dan contekan keluarga teknik serangan.',
      },
      ledgerline: {
        kind: 'Studio invoice',
        summary: 'Susun invoice dan cetak PDF yang rapi tanpa mengunggah apa pun.',
        detail: 'Satu berkas HTML, tanpa dependensi, jalan offline. Daftar klien tersimpan di perangkat Anda saja.',
      },
      securetask: {
        kind: 'REST API yang mengutamakan keamanan',
        summary: 'Backend FastAPI yang menunjukkan cara saya menangani autentikasi dan kontrol akses.',
        detail:
          'JWT dengan token akses dan refresh yang terpisah, otorisasi per objek, pembatasan login, dan suite pytest yang mencakup tes lintas akun. Dokumentasi OpenAPI dibuat otomatis.',
      },
      quickops: {
        kind: 'Kit otomasi operasional',
        summary: 'Alur outreach, pemantauan balasan, dan pengiriman untuk usaha yang dijalankan satu orang.',
        detail: 'Python dan Gmail API, dirangkai supaya satu orang bisa bekerja seperti tim kecil.',
      },
    },
    facts: {
      handoff: ['Login sendiri.', 'Serahkan browser ke AI.', 'Setujui sebelum bertindak.', 'Mode: gated, paranoid, dry-run, yolo'],
      rapikan: ['Setiap kolom mengutip sumbernya.', 'Yang kosong ditandai, bukan dikarang.', 'Manusia yang menyetujui.', 'Enam alur kerja, tanpa backend'],
      securetask: ['Token akses dan refresh JWT', 'Password di-hash dengan bcrypt', 'Tugas milik orang lain: 404', 'Login: 5 kali per menit per IP', 'Dokumentasi OpenAPI di /docs'],
      quickops: ['Outreach', 'Pemantauan balasan', 'Alur pengiriman', 'Gmail API'],
    },
  },
  oss: {
    title: 'Kode yang diterima maintainer',
    intro:
      'Pull request ke proyek yang bukan milik saya, masing-masing ditinjau orang yang tidak punya alasan untuk berbaik hati. Tujuh masuk ke Presence API milik WordPress, dan WordPress.org mencatat saya sebagai kontributor plugin tersebut.',
    merged: 'Di-merge',
    inReview: 'Ditinjau',
    changes: {
      '#213': 'Menyimpan data presence sebagai longtext dan membandingkan versi skema sebagai integer.',
      '#240': 'Menambah cakupan tes untuk penjadwalan cron.',
      '#258': 'Menghapus baris presence kedaluwarsa per key dalam batch terbatas.',
      '#436': 'Menjalankan unit test Jest di CI.',
      '#719': 'Menampilkan client_id dan waktu kedaluwarsa di DB viewer.',
      '#760': 'Memindahkan debugger dan DB viewer ke plugin presence-debugger.',
      '#774': 'Memungkinkan situs mematikan widget dasbor Active Posts.',
      '#48': 'Membatasi cursor loop pada paginasi tanpa membuang halaman kosong.',
      '#13324': 'Merapikan tinggi baris tombol detail pembaruan.',
      '#1335': 'Memperbaiki crash IndexError di parser datetime saat format string tidak valid.',
    },
    note: 'Dua masih terbuka. Ditampilkan apa adanya, tidak dibulatkan ke atas.',
    profile: 'Profil WordPress.org',
  },
  security: {
    title: 'Temuan keamanan',
    intro: 'Saya melapor lewat jalur resmi. Sebagian besar audit tidak menemukan apa-apa. Dua ini menemukan sesuatu.',
    labels: { severity: 'Severity', class: 'Kelas', platform: 'Platform', reported: 'Dilaporkan', status: 'Status' },
    sealedTitle: 'Disegel',
    sealed: 'Program hanya mengizinkan saya menyebut bahwa bounty-nya ada, bukan cara kerja kelemahannya. Detailnya tetap tertutup.',
    xai: {
      award: 'Bounty $2.500',
      summary: 'Celah kontrol akses berseveritas High pada Grok milik X/xAI, dilaporkan lewat HackerOne, ditriase, dinaikkan severitasnya, lalu dibayar.',
      severity: 'High, CVSS 7.5',
      class: 'Broken access control (IDOR)',
      reported: 'Januari 2026',
      status: 'Selesai diperbaiki',
      verify: 'Verifikasi di HackerOne',
    },
    onnx: {
      award: 'Sudah dipublikasikan',
      summary:
        'Denial-of-service pada spesifikasi ONNX. Operator Expand tidak pernah membatasi ukuran keluarannya, sehingga model berukuran sekitar 183 byte bisa meminta memori sekitar 300 TB dan membuat layanan yang memuat model otomatis ikut mati.',
      severity: 'Medium, CVSS 5.5',
      class: 'CWE-400, konsumsi sumber daya tak terkendali',
      reported: 'Desember 2025',
      status: 'Publik di huntr',
      verify: 'Baca laporannya di huntr',
    },
  },
  about: {
    title: 'Saya membaca sistem seperti membaca undang-undang.',
    lead: 'Saya kuliah Hukum Tata Negara di UIN Imam Bonjol Padang. Ilmu hukum menanamkan satu kebiasaan yang saya pakai setiap hari: membaca aturan untuk menemukan apa yang lupa diatur.',
    body: [
      'Pasal yang melewatkan satu kondisi. Definisi yang ditarik terlalu sempit. Prosedur yang tidak pernah menyebut siapa yang memverifikasi. Perangkat lunak dibaca dengan cara yang sama. API adalah aturan tentang siapa boleh menjangkau apa, dan agen AI adalah aturan tentang apa yang boleh ia lakukan tanpa bertanya.',
      'Karena itu tool yang saya bangun selalu mengutip buktinya dan berhenti menunggu manusia sebelum bertindak. Dengan cara yang sama saya menemukan bug yang dibayar X/xAI. Semuanya saya pelajari sendiri, dan dikerjakan dari Padang.',
    ],
    stepsTitle: 'Cara saya bekerja',
    steps: [
      { title: 'Tulis spesifikasi', text: 'Apa yang harus dilakukan tool, apa yang tidak boleh, dan bagaimana kita tahu ia berhasil.' },
      { title: 'Arahkan agen', text: 'Agen AI menulis sebagian besar kodenya, di dalam batas spesifikasi itu.' },
      { title: 'Review dan uji', text: 'Saya membaca perubahannya, menjalankan tes, dan mencoba merusaknya.' },
      { title: 'Rilis dan bertanggung jawab', text: 'Kalau gagal di produksi, itu tanggung jawab saya, bukan modelnya.' },
    ],
    education: 'Sarjana Hukum (S.H.), Hukum Tata Negara, UIN Imam Bonjol Padang, 2022 sampai 2026.',
    press: 'ReWork Academy menceritakan kisah mahasiswa hukum tata negara yang menemukan kerentanan di Grok.',
    pressLink: 'Baca liputannya',
  },
  contact: {
    title: 'Sedang merekrut, atau punya alur kerja yang ingin diotomasi?',
    text: 'Saya terbuka untuk posisi full-time di bidang AI dan otomasi, remote atau di Indonesia, juga untuk proyek lepas. Email adalah cara tercepat menghubungi saya.',
    copy: 'Salin email',
    copied: 'Tersalin',
    elsewhere: 'Di tempat lain',
  },
  footer: 'Dibangun dengan Astro dan diarahkan bersama agen AI. Setiap klaim di halaman ini tertaut ke sumber yang bisa Anda cek.',
};

const DICTS: Record<Lang, Dict> = { en, id };

export function t(lang: Lang): Dict {
  return DICTS[lang] ?? DICTS.en;
}
