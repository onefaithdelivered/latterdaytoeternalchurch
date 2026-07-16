// Icons — Lucide-style line icons (stroke 2, round caps) matching the source site.
const _ic = (paths, size = 14) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    style={{ flexShrink: 0 }}>{paths}</svg>
);

const PrinterIcon = _ic(<>
  <polyline points="6 9 6 2 18 2 18 9" />
  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
  <rect x="6" y="14" width="12" height="8" />
</>);

const PlayIcon = _ic(<polygon points="5 3 19 12 5 21 5 3" />, 16);

const ArrowRightIcon = _ic(<>
  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
</>, 16);

const ExternalLinkIcon = _ic(<>
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
</>, 14);

const ClockIcon = _ic(<>
  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
</>, 14);

const BookIcon = _ic(<>
  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
</>, 14);

Object.assign(window, { PrinterIcon, PlayIcon, ArrowRightIcon, ExternalLinkIcon, ClockIcon, BookIcon });
