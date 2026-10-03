export function Leaves({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 180" aria-hidden="true" fill="none">
      <path
        d="M40 160c20-54 48-92 92-122"
        stroke="#4F9B45"
        strokeWidth="1.4"
        opacity="0.55"
      />
      <path
        d="M86 150c8-38 28-62 70-82"
        stroke="#C5A477"
        strokeWidth="1.1"
        opacity="0.7"
      />
      <ellipse cx="118" cy="58" rx="18" ry="32" transform="rotate(-28 118 58)" fill="#4F9B45" opacity="0.22" />
      <ellipse cx="148" cy="78" rx="14" ry="26" transform="rotate(18 148 78)" fill="#4F9B45" opacity="0.18" />
      <ellipse cx="96" cy="88" rx="12" ry="22" transform="rotate(-12 96 88)" fill="#35483C" opacity="0.12" />
    </svg>
  );
}
