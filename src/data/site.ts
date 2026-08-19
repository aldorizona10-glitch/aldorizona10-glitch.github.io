// Locale-invariant facts. Every entry links to a source a stranger can verify.
// Prose for these lives in src/i18n/content.ts, keyed by the same ids.

export const profile = {
  name: 'Aldo Rizona',
  email: 'aldorizona03@gmail.com',
  github: 'https://github.com/aldorizona10-glitch',
  githubHandle: 'aldorizona10-glitch',
  hackerone: 'https://hackerone.com/xauud/hacktivity?type=user',
  huntr: 'https://huntr.com/users/aldorizona10-glitch',
  huntrReport: 'https://huntr.com/bounties/008260ca-73ea-4a2d-bf8b-576413b8e9dd',
  wordpress: 'https://profiles.wordpress.org/aldorza/',
  reworkFeature: 'https://www.instagram.com/p/DbBAZLeGGv6/',
  siteUrl: 'https://aldorizona10-glitch.github.io',
};

export type FindingId = 'xai' | 'onnx';

export const findings: { id: FindingId; target: string; verifyUrl: string; sealed: boolean }[] = [
  { id: 'xai', target: 'X / xAI', verifyUrl: profile.hackerone, sealed: true },
  { id: 'onnx', target: 'onnx / onnx', verifyUrl: profile.huntrReport, sealed: false },
];

export type PR = {
  repo: string;
  number: string;
  url: string;
  merged: boolean;
  group: 'wordpress' | 'other';
};

export const pullRequests: PR[] = [
  { repo: 'WordPress/presence-api', number: '#213', url: 'https://github.com/WordPress/presence-api/pull/213', merged: true, group: 'wordpress' },
  { repo: 'WordPress/presence-api', number: '#240', url: 'https://github.com/WordPress/presence-api/pull/240', merged: true, group: 'wordpress' },
  { repo: 'WordPress/presence-api', number: '#258', url: 'https://github.com/WordPress/presence-api/pull/258', merged: true, group: 'wordpress' },
  { repo: 'TestSprite/testsprite-cli', number: '#48', url: 'https://github.com/TestSprite/testsprite-cli/pull/48', merged: true, group: 'other' },
  { repo: 'Savitura/crowdpay', number: '#412', url: 'https://github.com/Savitura/crowdpay/pull/412', merged: true, group: 'other' },
  { repo: 'arrow-py/arrow', number: '#1335', url: 'https://github.com/arrow-py/arrow/pull/1335', merged: false, group: 'other' },
];

export type ProjectId = 'ledgerline' | 'injectlab' | 'quickops';

// Admission rule, deliberately strict: a project appears here only if a
// stranger can open it and judge it. Anything unpublished, or thin enough
// to read as abandoned, is left off rather than padding the list.
export const projects: {
  id: ProjectId;
  name: string;
  tags: string[];
  repo: string;
  demo?: string;
  shot?: { src: string; alt: string };
}[] = [
  {
    id: 'ledgerline',
    name: 'Ledgerline',
    tags: ['Vanilla JS', 'Offline-first'],
    repo: 'https://github.com/aldorizona10-glitch/ledgerline-invoice',
    demo: 'https://aldorizona10-glitch.github.io/ledgerline-invoice/',
    shot: { src: '/shots/ledgerline', alt: 'The Ledgerline editor with an invoice being composed beside its live preview.' },
  },
  {
    id: 'injectlab',
    name: 'InjectLab',
    tags: ['LLM security', 'Training'],
    repo: 'https://github.com/aldorizona10-glitch/injectlab',
    demo: 'https://aldorizona10-glitch.github.io/injectlab/',
    shot: { src: '/shots/injectlab', alt: 'The InjectLab console showing a blocked attempt and the defence layer that caught it.' },
  },
  {
    id: 'quickops',
    name: 'QuickOps AI',
    tags: ['Python', 'Automation'],
    repo: 'https://github.com/aldorizona10-glitch/quickops-ai',
  },
];

export type PressId = 'rework';

// 2026-08-20: removed codepolitan/coursenet/tribun/katasuhukita — claimed
// from a prior session's read of a Google SERP, never independently
// confirmed, and the user did not recognize them when asked. Only list
// press here once a stranger can click through and see it themselves.
export const press: { id: PressId; outlet: string; url?: string }[] = [
  { id: 'rework', outlet: 'ReWork Academy', url: profile.reworkFeature },
];
