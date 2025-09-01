import { Button, ButtonLink } from '@/common/button'

export function PrivacyHero () {
  return (
    <section className='relative min-h-[calc(630px-var(--header-height))] overflow-hidden pb-10'>
      <div className='absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-gray-300 dark:border-[--dark-border]'>
        {/* Decorations */}
        <div className='col-span-1 flex h-full items-center justify-center' />
        <div className='col-span-1 flex h-full items-center justify-center border-x border-gray-300 dark:border-[--dark-border]' />
        <div className='col-span-1 flex h-full items-center justify-center' />
      </div>
      {/* --- */}
      <figure className='pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full bg-accent blur-[200px]' />
      <figure className='pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full bg-indigo-50 opacity-50 blur-[100px] dark:bg-[--dark-surface-primary] md:block' />
      <figure className='pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full bg-indigo-50 opacity-50 blur-[100px] dark:bg-[--dark-surface-primary] md:block' />
      {/* --- */}
      <div className='relative z-10 flex flex-col divide-y divide-gray-300 pt-[35px] dark:divide-[--dark-border]'>
        <div>
          <div className='mx-auto flex min-h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-16 lg:px-24'>
            <h1 className='!max-w-screen-lg text-pretty text-center text-[clamp(32px,7vw,64px)] font-medium leading-none tracking-[-1.44px] text-primary dark:text-[--dark-text-primary] md:tracking-[-2.16px]'>
              Privacy
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
