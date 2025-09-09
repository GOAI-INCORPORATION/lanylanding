import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";

const $headingContainer = cva("flex flex-col gap-3", {
  variants: {
    align: {
      center: "items-center self-center",
      left: "items-start self-start",
      right: "items-end self-end",
      none: "",
    },
  },
  defaultVariants: {
    align: "center",
  },
});

type HeadingProps = {
  children: React.ReactNode;
  tag?: string;
  /** Now supports a single string OR a list of strings */
  subtitle?: string | string[];
  className?: string;
  title?: string;
  align?: string | null;
} & VariantProps<typeof $headingContainer>;

export function Heading({ tag, subtitle, className, align = "center", ...props }: HeadingProps) {
  align = align ?? "center";
  const Comp = Slot;

  if (align === "none") return null;

  // Normalize to an array for rendering
  const subtitleItems = Array.isArray(subtitle)
    ? subtitle
    : subtitle
    ? [subtitle]
    : [];

  return (
    <div className={$headingContainer({ align, className })}>
      {tag ? <Tag>{tag}</Tag> : null}

      <div
        className={clsx(
          "flex max-w-[800px] flex-col justify-center gap-1",
          {
            "items-start self-start": align === "left",
            "items-center self-center": align === "center" || !align,
            "items-end self-end": align === "right",
          },
          "[&>*]:text-pretty [&>*]:text-3xl [&>*]:font-medium md:[&>*]:text-4xl",
          {
            "[&>*]:text-center": align === "center",
            "[&>*]:text-left": align === "left",
            "[&>*]:text-right": align === "right",
          },
        )}
      >
        <Comp {...props} />
      </div>

      {subtitleItems.length > 0 ? (
        <div
          className={clsx(
            "max-w-screen-md list-disc text-pretty text-lg font-light text-text-tertiary dark:text-[--dark-text-tertiary] md:text-xl",
            {
              "text-center list-inside pl-0": align === "center",
              "text-left": align === "left",
              "text-right": align === "right",
            },
          )}
        >
          {subtitleItems.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Tag({
  className,
  children,
  asChild,
  ...props
}: React.AllHTMLAttributes<HTMLDivElement> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "h3";

  return (
    <Comp
      className={clsx(
        "flex min-h-7 items-center justify-center gap-2 rounded-full bg-surface-secondary px-3.5 pb-px text-sm font-medium text-text-tertiary dark:bg-[--dark-surface-secondary] dark:text-[--dark-text-tertiary] md:text-base",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
