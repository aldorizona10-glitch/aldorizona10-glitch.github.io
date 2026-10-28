// Locale-invariant facts. Every entry links to a source a stranger can verify.
// Prose for these lives in src/i18n/content.ts, keyed by the same ids.
//
// 2026-10-28 audit:
// - WordPress/presence-api: 7 merged PRs, checked against the GitHub API
//   and profiles.wordpress.org/aldorza (#257 closed unmerged, not listed).
// - arrow-py/arrow #1335 and wordpress-develop #13324 are still open, so
//   they are shown as "in review", never as merged.
// - Savitura/crowdpay #412 and the quantum-visualizer PRs are real but small;
//   left off to keep the record focused, matching the CV.

export const profile = {
  name: 'Aldo Rizona',
  email: 'aldorizona10@gmail.com',
  github: 'https://github.com/aldorizona10-glitch',
  githubHandle: 'aldorizona10-glitch',
  linkedin: 'https://www.linkedin.com/in/aldo-rizona-9366b2345',
  hackerone: 'https://hackerone.com/xauud/hacktivity?type=user',
  huntr: 'https://huntr.com/users/aldorizona10-glitch',
  huntrReport: 'https://huntr.com/bounties/008260ca-73ea-4a2d-bf8b-576413b8e9dd',
  wordpress: 'https://profiles.wordpress.org/aldorza/',
  wpMergedSearch:
    'https://github.com/WordPress/presence-api/pulls?q=is%3Apr+author%3Aaldorizona10-glitch+is%3Amerged',
  reworkFeature: 'https://www.instagram.com/p/DbBAZLeGGv6/',
  siteUrl: 'https://aldorizona10-glitch.github.io',
};

export type ProjectId = 'handoff' | 'rapikan' | 'injectlab' | 'ledgerline' | 'securetask' | 'quickops';

export type Preview =
  | { kind: 'image'; src: string; w: number; h: number }
  | { kind: 'facts' }; // lines come from content.ts so they translate

export const projects: {
  id: ProjectId;
  name: string;
  stack: string;
  repo: string;
  demo?: string;
  preview: Preview;
}[] = [
  {
    id: 'handoff',
    name: 'handoff',
    stack: 'Python, Playwright, Claude API',
    repo: 'https://github.com/aldorizona10-glitch/handoff',
    preview: { kind: 'facts' },
  },
  {
    id: 'rapikan',
    name: 'Rapikan',
    stack: 'JavaScript, Claude API',
    repo: 'https://github.com/aldorizona10-glitch/rapikan',
    demo: 'https://aldorizona10-glitch.github.io/rapikan/',
    preview: { kind: 'facts' },
  },
  {
    id: 'injectlab',
    name: 'InjectLab',
    stack: 'JavaScript, LLM security',
    repo: 'https://github.com/aldorizona10-glitch/injectlab',
    demo: 'https://aldorizona10-glitch.github.io/injectlab/',
    preview: { kind: 'image', src: '/shots/injectlab.webp', w: 800, h: 500 },
  },
  {
    id: 'ledgerline',
    name: 'Ledgerline',
    stack: 'Vanilla JS, offline-first',
    repo: 'https://github.com/aldorizona10-glitch/ledgerline-invoice',
    demo: 'https://aldorizona10-glitch.github.io/ledgerline-invoice/',
    preview: { kind: 'image', src: '/shots/ledgerline.webp', w: 800, h: 500 },
  },
  {
    id: 'securetask',
    name: 'SecureTask API',
    stack: 'Python, FastAPI, pytest',
    repo: 'https://github.com/aldorizona10-glitch/secure-task-api',
    preview: { kind: 'facts' },
  },
  {
    id: 'quickops',
    name: 'QuickOps AI',
    stack: 'Python, Gmail API',
    repo: 'https://github.com/aldorizona10-glitch/quickops-ai',
    preview: { kind: 'facts' },
  },
];

export type PR = {
  repo: string;
  number: string;
  url: string;
  merged: boolean;
};

export const pullRequests: PR[] = [
  { repo: 'WordPress/presence-api', number: '#213', url: 'https://github.com/WordPress/presence-api/pull/213', merged: true },
  { repo: 'WordPress/presence-api', number: '#240', url: 'https://github.com/WordPress/presence-api/pull/240', merged: true },
  { repo: 'WordPress/presence-api', number: '#258', url: 'https://github.com/WordPress/presence-api/pull/258', merged: true },
  { repo: 'WordPress/presence-api', number: '#436', url: 'https://github.com/WordPress/presence-api/pull/436', merged: true },
  { repo: 'WordPress/presence-api', number: '#719', url: 'https://github.com/WordPress/presence-api/pull/719', merged: true },
  { repo: 'WordPress/presence-api', number: '#760', url: 'https://github.com/WordPress/presence-api/pull/760', merged: true },
  { repo: 'WordPress/presence-api', number: '#774', url: 'https://github.com/WordPress/presence-api/pull/774', merged: true },
  { repo: 'TestSprite/testsprite-cli', number: '#48', url: 'https://github.com/TestSprite/testsprite-cli/pull/48', merged: true },
  { repo: 'WordPress/wordpress-develop', number: '#13324', url: 'https://github.com/WordPress/wordpress-develop/pull/13324', merged: false },
  { repo: 'arrow-py/arrow', number: '#1335', url: 'https://github.com/arrow-py/arrow/pull/1335', merged: false },
];

export const press = { outlet: 'ReWork Academy', url: profile.reworkFeature };
