import { Section } from '@/common/section-wrapper'
import clsx from 'clsx'
import Link from 'next/link'
import s from './callout.module.css'
import Image from 'next/image'
import bannerpng from '../../public/banner.png'
export function Callout () {
  return (
<Section>
<article className="relative mx-auto lg:w-[90%] lg:h-[90%] w-full h-full overflow-hidden rounded-[8px] border border-gray-100 dark:border-[--dark-border] aspect-[16/9]">
  <div className="absolute inset-0">
    <Image src={bannerpng} alt="banner" priority fill sizes="90vw" className="object-cover rounded-[16px]" />
    <div className="absolute inset-0 bg-black/10 dark:bg-black/50 rounded-[16px]" />
  </div>

    {/* Foreground content */}
    <div className="relative z-10 flex h-full flex-col items-center justify-center lg:justify-start lg:mt-14 gap-6 px-6 text-center">
      <h4 className="text-3xl text-md font-medium tracking-tighter text-white md:text-4xl">
        Ready to meet your AI team?
      </h4>

      <div className="flex w-fit items-center gap-2">
        <Link
          href="https://forms.gle/Y44uKeCq3vNxL66D8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-14 w-full items-center justify-center rounded-md px-10 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 transition"
        >
          Get early access
        </Link>
      </div>
    </div>
  </article>
</Section>

  )
}
