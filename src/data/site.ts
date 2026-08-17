// Single source of truth for every factual claim on the site.
// Rule: nothing goes here that a stranger cannot verify from the linked source.

export const profile = {
  name: 'Aldo Rizona',
  role: 'Security Researcher',
  location: 'Padang, Sumatera Barat, Indonesia',
  thesis: 'I read systems the way I read statutes — looking for the clause nobody wrote.',
  email: 'aldorizona03@gmail.com',
  github: 'https://github.com/aldorizona10-glitch',
  githubHandle: 'aldorizona10-glitch',
  hackerone: 'https://hackerone.com/xauud/hacktivity?type=user',
  wordpress: 'https://profiles.wordpress.org/aldorza/',
  huntr: 'https://huntr.com/users/aldorizona10-glitch',
  siteUrl: 'https://aldorizona10-glitch.github.io',
};

export const nav = [
  { href: '/', label: 'Index' },
  { href: '/security', label: 'Security' },
  { href: '/open-source', label: 'Open source' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export const stats = [
  { value: '$2,500', label: 'Bounty rewarded' },
  { value: '2', label: 'AI-platform findings disclosed' },
  { value: '7', label: 'Merged open-source PRs' },
];

export type Finding = {
  target: string;
  status: 'Rewarded' | 'Published';
  award: string;
  severity: string;
  cwe: string;
  vector: string;
  platform: string;
  reported: string;
  resolution: string;
  verifyUrl: string;
  verifyLabel: string;
  summary: string;
  detail: string; // one honest paragraph — mechanism only where already public
  sealed: boolean; // true = mechanism withheld by program terms
};

export const findings: Finding[] = [
  {
    target: 'X / xAI',
    status: 'Rewarded',
    award: '$2,500',
    severity: 'High · CVSS 7.5',
    cwe: 'Broken access control (IDOR)',
    vector: 'Network',
    platform: 'HackerOne',
    reported: 'January 2026',
    resolution: 'Resolved',
    verifyUrl: 'https://hackerone.com/xauud/hacktivity?type=user',
    verifyLabel: 'Verify on HackerOne — @xauud',
    summary:
      'An access-control flaw on X / xAI’s Grok surface, reported through HackerOne, triaged, escalated in severity, and rewarded.',
    detail:
      'The program permits me to state that the bounty exists — not to describe the weakness. That restriction outlives the payment, so the mechanism stays sealed. The class (IDOR) is already public through press coverage; the reproduction is not, and will not appear here.',
    sealed: true,
  },
  {
    target: 'onnx / onnx',
    status: 'Published',
    award: 'Disclosure bounty proposed · awaiting maintainer review',
    severity: 'Medium · CVSS 5.5',
    cwe: 'CWE-400 · Uncontrolled resource consumption (DoS)',
    vector: 'Local · user interaction required',
    platform: 'huntr (Protect AI / Palo Alto Networks)',
    reported: 'December 2025',
    resolution: 'Publicly disclosed · pending review',
    verifyUrl: 'https://huntr.com/bounties/008260ca-73ea-4a2d-bf8b-576413b8e9dd',
    verifyLabel: 'Read the full report on huntr',
    summary:
      'A denial-of-service in the ONNX specification and its reference implementation: a crafted model exhausts memory during execution.',
    detail:
      'The Expand operator’s schema never bounds its output dimensions. A model of roughly 183 bytes can broadcast a 1×1 tensor into an astronomically large one — on the order of 300 terabytes — and the runtime tries to allocate it, crashing inference services that load models automatically. This report is public on huntr, so the mechanism is described openly; the bounty is proposed and still awaiting the maintainers.',
    sealed: false,
  },
];

export type PR = {
  repo: string;
  number: string;
  url: string;
  change: string;
  state: 'Merged' | 'In review';
};

export const pullRequests: PR[] = [
  {
    repo: 'WordPress/presence-api',
    number: '#213',
    url: 'https://github.com/WordPress/presence-api/pull/213',
    change: 'Store presence data as longtext; compare schema version as an integer.',
    state: 'Merged',
  },
  {
    repo: 'WordPress/presence-api',
    number: '#240',
    url: 'https://github.com/WordPress/presence-api/pull/240',
    change: 'Add test coverage for cron scheduling.',
    state: 'Merged',
  },
  {
    repo: 'WordPress/presence-api',
    number: '#258',
    url: 'https://github.com/WordPress/presence-api/pull/258',
    change: 'Delete expired presence rows by key in bounded passes.',
    state: 'Merged',
  },
  {
    repo: 'TestSprite/testsprite-cli',
    number: '#48',
    url: 'https://github.com/TestSprite/testsprite-cli/pull/48',
    change: 'Bound cursor loops in pagination without dropping empty pages.',
    state: 'Merged',
  },
  {
    repo: 'Savitura/crowdpay',
    number: '#412',
    url: 'https://github.com/Savitura/crowdpay/pull/412',
    change: 'Remove a duplicate state hook in the campaign view.',
    state: 'Merged',
  },
  {
    repo: 'arrow-py/arrow',
    number: '#1335',
    url: 'https://github.com/arrow-py/arrow/pull/1335',
    change: 'Fix an IndexError crash in the datetime parser on malformed format strings.',
    state: 'In review',
  },
];

export type Project = {
  name: string;
  blurb: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: 'Ledgerline',
    blurb:
      'A privacy-first invoice studio that runs entirely in the browser. Build an invoice, print a clean PDF, upload nothing. One file, zero dependencies.',
    tags: ['Vanilla JS', 'Offline-first'],
  },
  {
    name: 'InjectLab',
    blurb:
      'A sandbox for practising prompt injection against simulated defence layers that explain why they blocked you — built to teach diagnosis, not to hand over payloads.',
    tags: ['LLM security', 'Training'],
  },
  {
    name: 'QuickOps AI',
    blurb:
      'A zero-budget ops kit for a one-person shop — outreach, reply monitoring, and delivery workflows wired together so one operator runs like a team.',
    tags: ['Python', 'Automation'],
  },
  {
    name: 'DataHub Health Guardian',
    blurb:
      'An agent that watches datasets and flags quality and lineage problems before they spread downstream. Built for the DataHub agent hackathon.',
    tags: ['Python', 'Data quality'],
  },
  {
    name: 'CodeLens AI',
    blurb:
      'A Gemini-powered review assistant that reads a diff and surfaces what a reviewer would flag, packaged as a lightweight service.',
    tags: ['LLM', 'Code review'],
  },
  {
    name: 'BugBox',
    blurb:
      'A bug tracker hardened against its own edge cases through an automated verification loop — the tracker and the tests grew together.',
    tags: ['TypeScript', 'Testing'],
  },
];

export type Press = {
  outlet: string;
  detail: string;
  url?: string;
};

export const press: Press[] = [
  {
    outlet: 'ReWork Academy',
    detail:
      'Featured the story in full — a constitutional-law student who found a Grok vulnerability and earned a $2,500 bounty.',
    url: 'https://www.instagram.com/p/DbBAZLeGGv6/',
  },
  {
    outlet: 'Codepolitan',
    detail: 'Picked up the story for its Indonesian developer audience (1.1k+ reactions).',
  },
  {
    outlet: 'Course-Net',
    detail: 'Shared the account as an example for aspiring security learners (2.2k+ reactions).',
  },
  {
    outlet: 'Tribun Jateng',
    detail: 'Ran the bounty story in its education coverage.',
  },
  {
    outlet: 'Katasuhukita',
    detail: 'Reposted the disclosure to a broader audience (730+ reactions).',
  },
];

export const pressQuote = {
  text:
    'Banyak orang masih mikir kalau dunia cybersecurity cuma buat anak IT. Padahal faktanya, Aldo Rizona justru datang dari Hukum Tata Negara…',
  source: 'ReWork Academy',
};
