import type { AriaAttributes, CSSProperties, ElementType, ReactNode } from "react";

export type RevealDirection = "up" | "left" | "right" | "scale" | "fade" | "mask";

interface RevealProps extends AriaAttributes {
  as?: ElementType;
  children: ReactNode;
  /** Where the content comes from. "mask" reveals <MaskLines> lines from behind a clip. */
  direction?: RevealDirection;
  /** Delay in ms before the reveal starts. */
  delay?: number;
  /** Reveal direct children one after another (70ms apart) instead of as one block. */
  stagger?: boolean;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

/**
 * Scroll reveal wrapper — a server component that only adds data attributes.
 * One shared <RevealObserver> (in the root layout) drives every instance,
 * and content stays fully visible when JavaScript is unavailable.
 */
export function Reveal({
  as: Tag = "div",
  children,
  direction = "up",
  delay = 0,
  stagger = false,
  className,
  id,
  style,
  ...aria
}: RevealProps) {
  const merged = delay ? ({ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties) : style;
  return (
    <Tag
      data-reveal={direction}
      data-reveal-stagger={stagger ? "" : undefined}
      className={className}
      style={merged}
      id={id}
      {...aria}
    >
      {children}
    </Tag>
  );
}

interface MaskLinesProps {
  lines: ReactNode[];
  /** "load" animates on page load (heroes); "scroll" waits for a parent <Reveal direction="mask">. */
  mode?: "load" | "scroll";
  /** Load mode: delay of the first line and gap between lines, in ms. */
  start?: number;
  step?: number;
}

/** Splits a heading into lines that slide up from behind a mask. */
export function MaskLines({ lines, mode = "scroll", start = 0, step = 80 }: MaskLinesProps) {
  return (
    <>
      {lines.map((line, i) => (
        <span
          key={i}
          className={mode === "load" ? "mask-line load-mask" : "mask-line"}
          style={(mode === "load" ? { "--d": `${start + i * step}ms` } : { "--line": String(i) }) as unknown as CSSProperties}
        >
          <span>{line}</span>
        </span>
      ))}
    </>
  );
}
