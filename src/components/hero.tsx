import Link from 'next/link'

export function Hero () {
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
              Your AI Team, All in One Place.
            </h1>
            <h2 className='text-md max-w-2xl text-pretty text-center text-text-tertiary dark:text-[--dark-text-tertiary] md:text-lg'>
              Bring your emails, tasks, files, and calendar into a single hub
              where AI assistants collaborate with you to manage your life.
            </h2>
          </div>
        </div>
        <div className='flex items-start justify-center px-8 sm:px-24'>
          <div className='flex w-full max-w-[80vw] flex-col items-center justify-start md:!max-w-[392px]'>
            <div className='!h-14 flex-col items-center justify-center rounded-none !text-base flex w-full' />

            <Link
              href='https://forms.gle/Y44uKeCq3vNxL66D8'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-indigo-500 text-white !h-14 flex-col bg-accent-500 items-center justify-center rounded-[8px] !text-base flex w-full text-center'
            >
              Get early access
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
