import { ButtonLink } from '@/common/button'
import { BaseHubImage } from 'basehub/next-image'
import logopng from '../../public/logo.png'
import Image from 'next/image'
import Link, { type LinkProps } from 'next/link'

export const Footer = () => {
  return (
    <footer className='py-10 dark:border-[--dark-border]'>
      <div className='container mx-auto grid grid-cols-2 grid-rows-2 place-items-start items-center gap-y-7 px-6 sm:grid-cols-[1fr_auto_1fr] sm:gap-x-3 sm:gap-y-16'>
        <Link className='flex items-center ring-offset-2' aria-label='Homepage' href='/'>
          <Image src={logopng} alt='logo' width={45} height={38} priority />
		  <div className='text-[--text-primary] text-pretty text-center font-medium leading-none tracking-[-1.44px] text-[clamp(20px,7vw,28px)]'>Lany</div>
        </Link>
        <nav className='col-start-1 row-start-2 flex flex-col gap-x-2 gap-y-3 self-center sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:flex-row sm:items-center sm:place-self-center md:gap-x-4 lg:gap-x-8'>
          <ButtonLink
            key='privacy'
            unstyled
            className='px-2 font-light tracking-tight text-text-tertiary hover:text-[--text-primary] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-text-primary]'
            href='/privacy'
            target='_self'
          >
            Privacy
          </ButtonLink>
          <ButtonLink
            key='terms'
            unstyled
            className='px-2 font-light tracking-tight text-text-tertiary hover:text-[--text-primary] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-text-primary]'
            href='/terms'
            target='_self'
          >
            Terms of Service
          </ButtonLink>
        </nav>

         <div className='col-span-2 text-pretty text-sm text-text-tertiary dark:text-[--dark-text-tertiary] sm:col-span-1'>
		 @ 2025 GOAI Corp. All rights reserved.
        </div>

        {/* <ul className='col-span-2 col-start-1 row-start-3 flex w-full items-center gap-x-3.5 gap-y-4 sm:col-span-1 sm:col-start-3 sm:row-start-2 sm:w-auto sm:flex-wrap sm:justify-self-end'>
          {footer.socialLinks.map(link => {
            return (
              <li key={link._title} className='shrink-0 sm:first:ml-auto'>
                <ButtonLink
                  unstyled
                  className='block aspect-square p-0.5 hover:brightness-75 dark:brightness-50 dark:hover:brightness-75'
                  href={link.url}
                  target='_blank'
                >
                  <BaseHubImage
                    alt={link._title}
                    height={24}
                    src={link.icon?.url ?? ''}
                    width={24}
                  />
                </ButtonLink>
              </li>
            )
          })}
        </ul>  */}
      </div>
    </footer>
  )
}
