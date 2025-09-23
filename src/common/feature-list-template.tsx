import Image, { StaticImageData } from "next/image";

type FeaturesListProps = {
  subtitle: string | string[];
  image: StaticImageData | string;
  title: string;
  /** CSS object-position (e.g. "50% 30%", "center top"). Helps keep the subject visible. */
  objectPosition?: string;
  /** Optional focal point (0–100). Will override objectPosition if provided. */
  focalPoint?: { x: number; y: number };
  /** Height of the image area; tweak per design */
  height?: number; // default 300
};

export function FeaturesListTemplate({
  title,
  subtitle,
  image,
  objectPosition,
  focalPoint,
  height = 300,
}: FeaturesListProps) {
  // If focalPoint is given, translate to CSS object-position like "40% 25%"
  const computedObjectPosition =
    focalPoint
      ? `${Math.max(0, Math.min(100, focalPoint.x))}% ${Math.max(0, Math.min(100, focalPoint.y))}%`
      : objectPosition || "50% 50%";

  return (
    <section className="flex flex-col items-center gap-5 relative container mx-auto lg:!flex-row lg:max-w-[90vw] w-full justify-center">
      <div className="lg:gap-0 flex lg:justify-between lg:flex-row space-y-4 flex-col bg-white p-3 ring ring-zinc-50 ring-offset-4 ring-offset-zinc-100 w-full lg:w-[80vw] border border-gray-200 shadow rounded-[16px]">
        <div className="container flex relative shrink self-stretch lg:px-6 lg:w-1/2">
          <div className="text-[16px] lg:text-[18px] text-gray-800 lg:w-3/4 w-full px-2 lg:px-0 text-left">
            <span className="font-bold pr-1">{title}</span>
            {subtitle}
          </div>
        </div>

        {/* Image side */}
        <div className="lg:w-1/2 w-full flex-1 shrink-0 mx-auto p-1">
          {/* Wrapper with controlled height; use aspect-* if you prefer */}
          <div
            className="relative w-full overflow-hidden rounded-[16px] shadow border border-gray-200 ring ring-zinc-50 ring-offset-zinc-100 ring-offset-3"
            style={{ height }}
          >
            {/* Background "cover" layer fills the box to avoid letterboxing */}
            <Image
              src={image}
              alt=""
              aria-hidden
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover blur-sm scale-110 opacity-40"
              style={{ objectPosition: computedObjectPosition }}
            />

            {/* Foreground image shows the entire asset without cropping */}
            <Image
              src={image}
              alt="feature banner"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-contain border-0"
              style={{ objectPosition: computedObjectPosition }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
