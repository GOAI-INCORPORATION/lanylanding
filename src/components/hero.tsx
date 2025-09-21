import Link from 'next/link'
import Image from 'next/image'
import landingpng from '../../public/landing-page.png'
export function Hero () {
  return (
    <section className='relative min-h-[calc(630px-var(--header-height))] overflow-hidden pb-10'>
      <div className='relative z-10 flex flex-col pt-[35px] dark:divide-[--dark-border]'>
        <div>
          <div className='mx-auto flex max-w-[90vw] shrink-0 flex-col items-center justify-center gap-6 px-2 py-4 lg:px-24'>
            <h1 className='!max-w-screen-lg text-pretty text-center leading-18 text-[clamp(32px,7vw,64px)] font-medium tracking-[-1.44px] text-primary dark:text-[--dark-text-primary] md:tracking-[-2.16px]'>
              Your Knowledge, AI Assistants, and Apps in One Place.
            </h1>
            <h2 className='text-md max-w-2xl text-pretty text-center text-text-tertiary dark:text-[--dark-text-tertiary] md:text-lg'>
            All your emails, tasks, files, chats, maps, and events in one place, where a team of your AI assistants helps you organize and manage your life.
            </h2>
          </div>
        </div>
        <div className='flex items-start justify-center px-8 sm:px-24 lg:mt-5'>
          <div className='flex w-full max-w-[80vw] flex-col items-center justify-start md:!max-w-[392px]'>
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
        <div className='mt-5 lg:mt-0 lg:px-24 flex justify-center items-center'>
          <Image src={landingpng} alt='logo' priority />
        </div>
      </div>
    </section>
  )
}
