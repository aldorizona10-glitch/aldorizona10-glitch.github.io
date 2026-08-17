import type { Lang } from './config';
import type { FindingId, ProjectId, PressId } from '../data/site';

// House style, enforced by the Taste skill pre-flight:
// no em-dash and no en-dash anywhere in visible copy. Regular hyphen only.

type FindingCopy = {
  status: string;
  award: string;
  severity: string;
  cwe: string;
  vector: string;
  platform: string;
  reported: string;
  resolution: string;
  summary: string;
  detail: string;
  verifyLabel: string;
};

type Dict = {
  htmlLang: string;
  nav: { index: string; security: string; 'open-source': string; projects: string; about: string };
  a11y: { skip: string; primaryNav: string; contactNav: string; langSwitch: string; home: string };
  meta: Record<'index' | 'security' | 'open-source' | 'projects' | 'about', { title: string; description: string }>;
  hero: {
    location: string;
    thesis: string;
    stats: { value: string; label: string }[];
    enter: string;
  };
  index: { rows: { page: 'security' | 'open-source' | 'projects' | 'about'; mark: string; title: string; teaser: string; stat: string }[] };
  security: {
    mark: string;
    railLabel: string;
    title: string;
    intro: string;
    methodMark: string;
    methodRail: string;
    methodTitle: string;
    method: string[];
    specLabels: { severity: string; class: string; vector: string; platform: string; reported: string; resolution: string };
  };
  findings: Record<FindingId, FindingCopy>;
  oss: {
    mark: string;
    railLabel: string;
    title: string;
    intro: string;
    caption: string;
    cols: { project: string; pr: string; change: string; state: string };
    merged: string;
    inReview: string;
    changes: Record<string, string>;
    closing: string;
    badgeLink: string;
    closingTail: string;
    allRepos: string;
  };
  projects: { mark: string; railLabel: string; title: string; intro: string; blurbs: Record<ProjectId, string>; repoLabel: string; demoLabel: string; allRepos: string };
  about: {
    mark: string;
    railLabel: string;
    title: string;
    reasonMark: string;
    reasonRail: string;
    lead: string;
    body: string[];
    pressMark: string;
    pressRail: string;
    pressTitle: string;
    quote: string;
    quoteSource: string;
    details: Record<PressId, string>;
    read: string;
    note: string;
  };
  footer: {
    mark: string;
    title: string;
    blurb: string;
    labels: { email: string };
    colophon: string[];
  };
};

const en: Dict = {
  htmlLang: 'en',
  nav: { index: 'Index', security: 'Security', 'open-source': 'Open source', projects: 'Projects', about: 'About' },
  a11y: {
    skip: 'Skip to content',
    primaryNav: 'Primary',
    contactNav: 'Contact',
    langSwitch: 'Language',
    home: 'Aldo Rizona, home',
  },
  meta: {
    index: {
      title: 'Aldo Rizona, Security Researcher',
      description:
        'Final-year Constitutional Law student and self-taught security researcher in Padang, Indonesia. A High severity report rewarded by X/xAI on HackerOne, a published denial-of-service in ONNX, and merged contributions across open source.',
    },
    security: {
      title: 'Security research, Aldo Rizona',
      description:
        'Two disclosed findings on major AI platforms: a High severity access-control report rewarded $2,500 by X/xAI on HackerOne, and a published denial-of-service in the ONNX specification via the Expand operator.',
    },
    'open-source': {
      title: 'Open source, Aldo Rizona',
      description:
        'Seven pull requests merged into repositories I do not own, including three into WordPress/presence-api and one into the TestSprite CLI.',
    },
    projects: {
      title: 'Projects, Aldo Rizona',
      description:
        'Published work only: an offline invoice studio, a prompt-injection training range, an ops automation kit, and a bug tracker. Source, and a live demo where there is one.',
    },
    about: {
      title: 'About, Aldo Rizona',
      description:
        'A final-year Constitutional Law student at UIN Imam Bonjol Padang, writing his thesis, who reads software the way he reads statutes.',
    },
  },
  hero: {
    location: 'Padang, Sumatera Barat, Indonesia',
    thesis: 'I read systems the way I read statutes, looking for the clause nobody wrote.',
    stats: [
      { value: '$2,500', label: 'Bounty rewarded' },
      { value: '2', label: 'AI platform findings disclosed' },
      { value: '7', label: 'Merged open-source PRs' },
    ],
    enter: 'Read the record',
  },
  index: {
    rows: [
      { page: 'security', mark: 'Pasal I', title: 'Security', teaser: 'Two findings on two AI platforms. One rewarded, one published. Both verifiable by a stranger.', stat: '$2,500 + 1 published' },
      { page: 'open-source', mark: 'Pasal II', title: 'Open source', teaser: 'Seven pull requests merged into repositories I do not own, three of them into WordPress.', stat: '7 merged' },
      { page: 'projects', mark: 'Pasal III', title: 'Projects', teaser: 'A short list on purpose. Only published work, each with source you can open.', stat: '4 published' },
      { page: 'about', mark: 'Pasal IV', title: 'About', teaser: 'A final-year law student who reads software the way he reads statutes.', stat: 'The reasoning' },
    ],
  },
  security: {
    mark: 'Pasal I',
    railLabel: 'Security<br />research',
    title: 'Two findings, <em>two platforms</em>',
    intro:
      'One paid, one published. I keep the count honest: most of the work returns nothing, and the reports below sit on top of a tall stack of audits that found nothing at all.',
    methodMark: 'Method',
    methodRail: 'How I<br />read a system',
    methodTitle: 'Where the missing sentence <em>hides</em>',
    method: [
      'Vulnerabilities are rarely rules that were broken. They are conditions nobody thought to check: the article that omits a case, the definition drawn too narrowly, the procedure that never says who verifies. I read APIs, permission models, and now LLM-driven systems the same way I read a statute, all the way to the part it forgot to cover.',
      '<strong>Where I spend attention:</strong> broken access control, authorization on object-level operations, resource exhaustion in model runtimes, and the trust boundaries of AI agent tooling, prompt injection included. Places where no automated scanner can tell you what the system was <em>supposed</em> to mean.',
      '<strong>On disclosure:</strong> I report through official channels and hold the line on what I publish. Where a program forbids describing the weakness, I state only that the finding exists. Where a report is already public, as the ONNX one is, I describe the mechanism openly.',
    ],
    specLabels: { severity: 'Severity', class: 'Class', vector: 'Vector', platform: 'Platform', reported: 'Reported', resolution: 'Resolution' },
  },
  findings: {
    xai: {
      status: 'Rewarded',
      award: '$2,500',
      severity: 'High, CVSS 7.5',
      cwe: 'Broken access control (IDOR)',
      vector: 'Network',
      platform: 'HackerOne',
      reported: 'January 2026',
      resolution: 'Resolved',
      summary:
        'An access-control flaw on the X / xAI Grok surface, reported through HackerOne, triaged, escalated in severity, and rewarded.',
      detail:
        'The program permits me to state that the bounty exists, not to describe the weakness. That restriction outlives the payment, so the mechanism stays sealed. The class is already public through press coverage. The reproduction is not, and will not appear here.',
      verifyLabel: 'Verify on HackerOne, @xauud',
    },
    onnx: {
      status: 'Published',
      award: 'Disclosure bounty proposed, awaiting review',
      severity: 'Medium, CVSS 5.5',
      cwe: 'CWE-400, uncontrolled resource consumption',
      vector: 'Local, user interaction required',
      platform: 'huntr (Protect AI / Palo Alto Networks)',
      reported: 'December 2025',
      resolution: 'Publicly disclosed, pending review',
      summary:
        'A denial-of-service in the ONNX specification and its reference implementation: a crafted model exhausts memory during execution.',
      detail:
        'The Expand operator schema never bounds its output dimensions. A model of roughly 183 bytes can broadcast a 1x1 tensor into an astronomically large one, on the order of 300 terabytes, and the runtime tries to allocate it. That crashes inference services which load models automatically. This report is public on huntr, so the mechanism is described openly. The bounty is proposed and still awaiting the maintainers.',
      verifyLabel: 'Read the full report on huntr',
    },
  },
  oss: {
    mark: 'Pasal II',
    railLabel: 'Open source<br />record',
    title: 'Code other people <em>agreed to keep</em>',
    intro:
      'Finding a flaw and fixing one are different skills, and only one of them is reviewed by strangers. Every change below was read by a maintainer who had no reason to be generous.',
    caption: 'Contributions to repositories I do not own',
    cols: { project: 'Project', pr: 'PR', change: 'Change', state: 'State' },
    merged: 'Merged',
    inReview: 'In review',
    changes: {
      '#213': 'Store presence data as longtext, and compare schema version as an integer.',
      '#240': 'Add test coverage for cron scheduling.',
      '#258': 'Delete expired presence rows by key in bounded passes.',
      '#48': 'Bound cursor loops in pagination without dropping empty pages.',
      '#412': 'Remove a duplicate state hook in the campaign view.',
      '#1335': 'Fix an IndexError crash in the datetime parser on malformed format strings.',
    },
    closing: 'Seven pull requests have been merged into repositories I do not own. The three in WordPress earned the ',
    badgeLink: 'Plugin Developer badge',
    closingTail:
      ' on WordPress.org. The parser fix in arrow is still open, because under-maintained projects move slowly, and I would rather show the open one than pretend it merged.',
    allRepos: 'All repositories on GitHub',
  },
  projects: {
    mark: 'Pasal III',
    railLabel: 'Things<br />I built',
    title: 'Built to <em>ship</em>, not to demo',
    intro:
      'A short list on purpose. Only work that is published, still standing, and open for you to judge appears here.',
    blurbs: {
      ledgerline:
        'A privacy-first invoice studio that runs entirely in the browser. Build an invoice, print a clean PDF, upload nothing. One file, zero dependencies, works offline.',
      injectlab:
        'A training range for prompt injection. Its simulated defence layers label what they caught, so it teaches diagnosis instead of handing over payloads.',
      quickops:
        'A zero-budget ops kit for a one-person shop: outreach, reply monitoring, and delivery workflows wired together so one operator runs like a team.',
      bugbox:
        'A bug tracker hardened against its own edge cases through an automated verification loop. The tracker and the tests grew together.',
    },
    repoLabel: 'Source',
    demoLabel: 'Live',
    allRepos: 'All repositories on GitHub',
  },
  about: {
    mark: 'Pasal IV',
    railLabel: 'About',
    title: 'A law student who <em>breaks things</em> on purpose',
    reasonMark: 'Reasoning',
    reasonRail: 'Why the two<br />fit together',
    lead: 'I am a final-year Constitutional Law student at UIN Imam Bonjol Padang, currently writing my thesis. I also find vulnerabilities in software, and get paid for it.',
    body: [
      'People treat that as a contradiction. It has never felt like one. Four years of legal training taught me a single stubborn habit: read a rule not to learn what it forbids, but to find what it forgot to mention. The article that omits a condition. The definition drawn too narrowly. The procedure that never says who verifies. Writing a thesis sharpens it further, because you spend months defending every claim against someone whose job is to find the hole in it.',
      'Software turns out to read exactly the same way. An API is a set of rules about who may reach what. <strong>I do not find bugs because I am a stronger programmer than the people who wrote the code. I find them because I was trained to notice the missing sentence.</strong>',
      'Everything on this site is self-taught, built out of Padang, and verifiable by someone other than me: a paid report, a published advisory, code that maintainers agreed to keep.',
    ],
    pressMark: 'Press',
    pressRail: 'In the<br />record',
    pressTitle: 'Told by <em>others</em>',
    quote:
      'Banyak orang masih mikir kalau dunia cybersecurity cuma buat anak IT. Padahal faktanya, Aldo Rizona justru datang dari Hukum Tata Negara...',
    quoteSource: 'ReWork Academy',
    details: {
      rework: 'Featured the story in full: a constitutional-law student who found a Grok vulnerability and earned a $2,500 bounty.',
      codepolitan: 'Picked up the story for its Indonesian developer audience.',
      coursenet: 'Shared the account as an example for aspiring security learners.',
      tribun: 'Ran the bounty story in its education coverage.',
      katasuhukita: 'Reposted the disclosure to a broader audience.',
    },
    read: 'Read',
    note: 'Searching my name returns an AI overview and the coverage above. The vulnerability class is public through that press. The reproduction is not.',
  },
  footer: {
    mark: 'Penutup, closing provisions',
    title: 'Open for <em>work</em>',
    blurb:
      'Freelance security review, backend and automation work, and junior or internship roles in application security. If a system is interesting, I would rather look at it than talk about it.',
    labels: { email: 'Email' },
    colophon: [
      'Set in Bodoni Moda and IBM Plex. Lattice after Minangkabau songket.',
      'Built with Astro. Every claim links to something a stranger can check.',
    ],
  },
};

const id: Dict = {
  htmlLang: 'id',
  nav: { index: 'Beranda', security: 'Keamanan', 'open-source': 'Open source', projects: 'Karya', about: 'Tentang' },
  a11y: {
    skip: 'Lompat ke konten',
    primaryNav: 'Utama',
    contactNav: 'Kontak',
    langSwitch: 'Bahasa',
    home: 'Aldo Rizona, beranda',
  },
  meta: {
    index: {
      title: 'Aldo Rizona, Peneliti Keamanan',
      description:
        'Mahasiswa tingkat akhir Hukum Tata Negara dan peneliti keamanan otodidak di Padang, Indonesia. Satu laporan High severity yang dibayar X/xAI lewat HackerOne, satu denial-of-service di ONNX yang sudah dipublikasikan, dan kontribusi yang di-merge di berbagai proyek open source.',
    },
    security: {
      title: 'Riset keamanan, Aldo Rizona',
      description:
        'Dua temuan yang sudah diungkap di platform AI besar: laporan kontrol akses High severity yang dibayar $2.500 oleh X/xAI lewat HackerOne, dan denial-of-service pada spesifikasi ONNX melalui operator Expand.',
    },
    'open-source': {
      title: 'Open source, Aldo Rizona',
      description:
        'Tujuh pull request yang di-merge ke repositori milik pihak lain, termasuk tiga ke WordPress/presence-api dan satu ke TestSprite CLI.',
    },
    projects: {
      title: 'Karya, Aldo Rizona',
      description:
        'Hanya karya yang sudah terbit: studio invoice offline, arena latihan prompt injection, kit otomasi operasional, dan pelacak bug. Kode, dan demo bila ada.',
    },
    about: {
      title: 'Tentang, Aldo Rizona',
      description:
        'Mahasiswa tingkat akhir Hukum Tata Negara di UIN Imam Bonjol Padang yang sedang menyusun skripsi, dan membaca perangkat lunak seperti membaca undang-undang.',
    },
  },
  hero: {
    location: 'Padang, Sumatera Barat, Indonesia',
    thesis: 'Saya membaca sistem seperti membaca undang-undang, mencari pasal yang tidak pernah ditulis.',
    stats: [
      { value: '$2.500', label: 'Bounty dibayar' },
      { value: '2', label: 'Temuan di platform AI' },
      { value: '7', label: 'PR open source di-merge' },
    ],
    enter: 'Baca catatannya',
  },
  index: {
    rows: [
      { page: 'security', mark: 'Pasal I', title: 'Keamanan', teaser: 'Dua temuan di dua platform AI. Satu dibayar, satu dipublikasikan. Keduanya bisa dicek orang lain.', stat: '$2.500 + 1 terbit' },
      { page: 'open-source', mark: 'Pasal II', title: 'Open source', teaser: 'Tujuh pull request di-merge ke repositori milik pihak lain, tiga di antaranya ke WordPress.', stat: '7 di-merge' },
      { page: 'projects', mark: 'Pasal III', title: 'Karya', teaser: 'Daftarnya sengaja pendek. Hanya karya terbit, masing-masing dengan kode yang bisa dibuka.', stat: '4 terbit' },
      { page: 'about', mark: 'Pasal IV', title: 'Tentang', teaser: 'Mahasiswa hukum tingkat akhir yang membaca perangkat lunak seperti membaca undang-undang.', stat: 'Alasannya' },
    ],
  },
  security: {
    mark: 'Pasal I',
    railLabel: 'Riset<br />keamanan',
    title: 'Dua temuan, <em>dua platform</em>',
    intro:
      'Satu dibayar, satu dipublikasikan. Hitungannya saya jaga tetap jujur: sebagian besar pekerjaan ini tidak menghasilkan apa-apa, dan dua laporan di bawah berdiri di atas tumpukan audit yang hasilnya nol.',
    methodMark: 'Metode',
    methodRail: 'Cara saya<br />membaca sistem',
    methodTitle: 'Tempat kalimat yang hilang <em>bersembunyi</em>',
    method: [
      'Kerentanan jarang lahir dari aturan yang dilanggar. Ia lahir dari kondisi yang tidak pernah terpikir untuk diperiksa: pasal yang lupa satu keadaan, definisi yang terlalu sempit, prosedur yang tidak menyebut siapa yang memverifikasi. Saya membaca API, model perizinan, dan kini sistem berbasis LLM dengan cara yang sama seperti membaca undang-undang, sampai ke bagian yang lupa diatur.',
      '<strong>Fokus perhatian saya:</strong> broken access control, otorisasi pada operasi tingkat objek, kehabisan sumber daya pada runtime model, dan batas kepercayaan pada tooling agent AI, termasuk prompt injection. Tempat-tempat yang tidak bisa dijelaskan pemindai otomatis, karena mesin tidak tahu apa <em>maksud</em> sistemnya.',
      '<strong>Soal pengungkapan:</strong> saya melapor lewat jalur resmi dan menjaga batas apa yang boleh dipublikasikan. Kalau program melarang menjelaskan kelemahannya, saya hanya menyatakan bahwa temuannya ada. Kalau laporannya sudah publik, seperti yang ONNX, mekanismenya saya jelaskan terbuka.',
    ],
    specLabels: { severity: 'Severity', class: 'Kelas', vector: 'Vektor', platform: 'Platform', reported: 'Dilaporkan', resolution: 'Status' },
  },
  findings: {
    xai: {
      status: 'Dibayar',
      award: '$2.500',
      severity: 'High, CVSS 7.5',
      cwe: 'Broken access control (IDOR)',
      vector: 'Jaringan',
      platform: 'HackerOne',
      reported: 'Januari 2026',
      resolution: 'Selesai diperbaiki',
      summary:
        'Celah kontrol akses pada permukaan Grok milik X / xAI, dilaporkan lewat HackerOne, ditriase, dinaikkan severitasnya, lalu dibayar.',
      detail:
        'Program mengizinkan saya menyatakan bahwa bounty-nya ada, bukan menjelaskan kelemahannya. Batasan itu berlaku lebih lama daripada pembayarannya, jadi mekanismenya tetap tertutup. Kelas kerentanannya sudah publik lewat pemberitaan. Langkah reproduksinya tidak, dan tidak akan muncul di sini.',
      verifyLabel: 'Verifikasi di HackerOne, @xauud',
    },
    onnx: {
      status: 'Terbit',
      award: 'Disclosure bounty diajukan, menunggu tinjauan',
      severity: 'Medium, CVSS 5.5',
      cwe: 'CWE-400, konsumsi sumber daya tak terkendali',
      vector: 'Lokal, butuh interaksi pengguna',
      platform: 'huntr (Protect AI / Palo Alto Networks)',
      reported: 'Desember 2025',
      resolution: 'Sudah dipublikasikan, menunggu tinjauan',
      summary:
        'Denial-of-service pada spesifikasi ONNX dan implementasi rujukannya: sebuah model yang dirancang khusus menghabiskan memori saat dieksekusi.',
      detail:
        'Skema operator Expand tidak pernah membatasi dimensi keluarannya. Model berukuran sekitar 183 byte bisa membentangkan tensor 1x1 menjadi tensor yang sangat besar, di kisaran 300 terabyte, lalu runtime mencoba mengalokasikannya. Itu membuat layanan inferensi yang memuat model secara otomatis ikut mati. Laporan ini publik di huntr, jadi mekanismenya saya jelaskan terbuka. Bounty-nya sudah diajukan dan masih menunggu maintainer.',
      verifyLabel: 'Baca laporan lengkapnya di huntr',
    },
  },
  oss: {
    mark: 'Pasal II',
    railLabel: 'Rekam jejak<br />open source',
    title: 'Kode yang <em>diterima</em> orang lain',
    intro:
      'Menemukan celah dan memperbaikinya adalah dua keahlian berbeda, dan hanya satu yang ditinjau orang asing. Setiap perubahan di bawah dibaca maintainer yang tidak punya alasan untuk berbaik hati.',
    caption: 'Kontribusi ke repositori yang bukan milik saya',
    cols: { project: 'Proyek', pr: 'PR', change: 'Perubahan', state: 'Status' },
    merged: 'Di-merge',
    inReview: 'Ditinjau',
    changes: {
      '#213': 'Menyimpan data presence sebagai longtext, dan membandingkan versi skema sebagai integer.',
      '#240': 'Menambah cakupan tes untuk penjadwalan cron.',
      '#258': 'Menghapus baris presence kedaluwarsa per key dalam batch terbatas.',
      '#48': 'Membatasi cursor loop pada paginasi tanpa membuang halaman kosong.',
      '#412': 'Menghapus state hook ganda pada tampilan campaign.',
      '#1335': 'Memperbaiki crash IndexError di parser datetime saat format string tidak valid.',
    },
    closing: 'Tujuh pull request sudah di-merge ke repositori yang bukan milik saya. Tiga yang di WordPress menghasilkan ',
    badgeLink: 'badge Plugin Developer',
    closingTail:
      ' di WordPress.org. Perbaikan parser di arrow masih terbuka, karena proyek yang kurang terawat bergerak lambat, dan saya lebih suka menampilkan yang masih terbuka daripada berpura-pura sudah di-merge.',
    allRepos: 'Semua repositori di GitHub',
  },
  projects: {
    mark: 'Pasal III',
    railLabel: 'Yang saya<br />bangun',
    title: 'Dibuat untuk <em>dipakai</em>, bukan dipamerkan',
    intro:
      'Daftarnya sengaja pendek. Hanya karya yang sudah terbit, masih berdiri, dan terbuka untuk Anda nilai yang masuk ke sini.',
    blurbs: {
      ledgerline:
        'Studio invoice yang mengutamakan privasi dan berjalan sepenuhnya di browser. Susun invoice, cetak PDF rapi, tanpa mengunggah apa pun. Satu berkas, nol dependensi, jalan offline.',
      injectlab:
        'Arena latihan prompt injection. Lapisan pertahanan simulasinya menyebutkan apa yang mereka tangkap, jadi yang diajarkan adalah diagnosis, bukan payload jadi.',
      quickops:
        'Kit operasional tanpa modal untuk usaha satu orang: penjangkauan, pemantauan balasan, dan alur pengiriman yang dirangkai supaya satu orang bisa bekerja seperti satu tim.',
      bugbox:
        'Pelacak bug yang dikeraskan terhadap kasus tepinya sendiri lewat loop verifikasi otomatis. Pelacak dan tesnya tumbuh bersama.',
    },
    repoLabel: 'Kode',
    demoLabel: 'Live',
    allRepos: 'Semua repositori di GitHub',
  },
  about: {
    mark: 'Pasal IV',
    railLabel: 'Tentang',
    title: 'Mahasiswa hukum yang <em>merusak</em> dengan sengaja',
    reasonMark: 'Alasan',
    reasonRail: 'Kenapa keduanya<br />nyambung',
    lead: 'Saya mahasiswa tingkat akhir Hukum Tata Negara di UIN Imam Bonjol Padang, sedang menyusun skripsi. Saya juga menemukan kerentanan di perangkat lunak, dan dibayar untuk itu.',
    body: [
      'Banyak orang menganggap itu bertentangan. Buat saya tidak pernah terasa begitu. Empat tahun belajar hukum menanamkan satu kebiasaan keras kepala: membaca aturan bukan untuk tahu apa yang dilarang, tapi untuk menemukan apa yang lupa disebut. Pasal yang melewatkan satu kondisi. Definisi yang ditarik terlalu sempit. Prosedur yang tidak pernah menyebut siapa yang memverifikasi. Menyusun skripsi mengasah itu lebih jauh, karena berbulan-bulan Anda mempertahankan setiap klaim di depan orang yang tugasnya mencari lubangnya.',
      'Ternyata perangkat lunak dibaca dengan cara yang persis sama. API adalah kumpulan aturan tentang siapa boleh menjangkau apa. <strong>Saya menemukan bug bukan karena saya programmer yang lebih hebat dari penulis kodenya. Saya menemukannya karena saya dilatih memperhatikan kalimat yang hilang.</strong>',
      'Semua yang ada di situs ini dipelajari sendiri, dikerjakan dari Padang, dan bisa diverifikasi orang selain saya: laporan yang dibayar, advisory yang terbit, dan kode yang diterima para maintainer.',
    ],
    pressMark: 'Liputan',
    pressRail: 'Dalam<br />catatan',
    pressTitle: 'Diceritakan <em>orang lain</em>',
    quote:
      'Banyak orang masih mikir kalau dunia cybersecurity cuma buat anak IT. Padahal faktanya, Aldo Rizona justru datang dari Hukum Tata Negara...',
    quoteSource: 'ReWork Academy',
    details: {
      rework: 'Memuat ceritanya utuh: mahasiswa hukum tata negara yang menemukan kerentanan di Grok dan mendapat bounty $2.500.',
      codepolitan: 'Mengangkat ceritanya untuk audiens developer Indonesia.',
      coursenet: 'Membagikan kisahnya sebagai contoh bagi yang sedang belajar keamanan.',
      tribun: 'Memuat cerita bounty tersebut di liputan pendidikannya.',
      katasuhukita: 'Membagikan ulang pengungkapan itu ke audiens yang lebih luas.',
    },
    read: 'Baca',
    note: 'Mencari nama saya memunculkan ringkasan AI dan liputan di atas. Kelas kerentanannya publik lewat pemberitaan itu. Langkah reproduksinya tidak.',
  },
  footer: {
    mark: 'Penutup, ketentuan penutup',
    title: 'Terbuka untuk <em>kerja</em>',
    blurb:
      'Security review lepas, pekerjaan backend dan otomasi, serta peran junior atau magang di keamanan aplikasi. Kalau sebuah sistem menarik, saya lebih suka memeriksanya daripada membicarakannya.',
    labels: { email: 'Surel' },
    colophon: [
      'Huruf Bodoni Moda dan IBM Plex. Kisi bermotif songket Minangkabau.',
      'Dibangun dengan Astro. Setiap klaim tertaut ke sesuatu yang bisa dicek orang lain.',
    ],
  },
};

const DICTS: Record<Lang, Dict> = { en, id };

export function t(lang: Lang): Dict {
  return DICTS[lang] ?? DICTS.en;
}
