import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

// Fades content in as it scrolls into view using a CSS scroll timeline
// (see `.reveal` in globals.css). No JavaScript is involved, so content is
// visible even if scripts fail, and reduced-motion users see no animation.
export default function Reveal({ children, className = "" }: RevealProps) {
  return <div className={`reveal ${className}`.trim()}>{children}</div>;
}
