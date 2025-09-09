import { Section } from '@/common/section-wrapper'
import clsx from 'clsx'
import s from './callout.module.css'

export function Callout2 () {
  return (
    <Section>
      <article className='relative flex flex-col items-center justify-center gap-9 self-stretch overflow-hidden rounded-xl border border-gray-100 bg-gray-100 p-6 dark:border-[--dark-border] dark:bg-[--dark-surface-secondary]'>
        {/* Lines and bg  */}
        <div
          className={clsx(
            'bg-linear-to-l absolute left-0 top-10 h-px w-full from-black/40 to-transparent dark:from-white/40 dark:to-transparent',
            s.line
          )}
        />
        <div
          className={clsx(
            'bg-linear-to-l absolute bottom-[72px] left-0 h-px w-full from-black/40 to-transparent dark:from-white/40 dark:to-transparent',
            s.line
          )}
        />
        <div
          className={clsx(
            'bg-linear-to-l absolute bottom-7 left-0 h-px w-full from-black/40 to-transparent dark:from-white/40 dark:to-transparent',
            s.line
          )}
        />
        <div className='absolute left-0 top-0 z-10 h-full w-full bg-[--surface-secondary] blur-3xl filter dark:bg-[--dark-surface-secondary]' />
        {/* -------- */}
        <div className='relative z-20 flex flex-col items-center gap-2 text-center'>
          <h4 className='text-center text-3xl font-medium tracking-tighter text-[--text-primary] dark:text-[--dark-text-primary] sm:max-w-full sm:px-0 md:text-4xl'>
          Ready to meet your AI team?
          </h4>
          {/* <p className="text-lg text-[--text-secondary] dark:text-[--dark-text-secondary] md:text-xl">
		  {callout.subtitle}
		</p> */}
        </div>
        <div className='relative z-10 flex items-center gap-2'>
          <button className='bg-indigo-500 text-white !h-14 p-3 flex-col bg-accent-500 items-center justify-center rounded-none !text-base flex w-full'>
            Get early access
          </button>
        </div>
      </article>
    </Section>
  )
}
