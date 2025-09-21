import { ButtonLink } from '@/common/button'
import logopng from '../../public/logo.png'
import Image from 'next/image'
import Link, { type LinkProps } from 'next/link'
export const Header = () => {
  return (
    <header className='sticky left-0 top-0 z-[110] py-3 flex w-full flex-col bg-white dark:border-[--dark-border] dark:bg-[--dark-surface-primary]'>
      <div className='flex h-header-height bg-white dark:bg-[--dark-surface-primary]'>
        <div className='container mx-auto grid w-full grid-cols-[1fr_max-content_1fr] place-items-center content-center items-center px-6 *:first:justify-self-start'>
          <ButtonLink unstyled className='flex items-center ring-offset-2' href='/'>
            {/* <DarkLightImageAutoscale priority {...logo} /> */}
            <Image src={logopng} alt='logo' width={45} height={38} priority />
            <div className='text-[--text-primary] text-pretty text-center font-medium leading-none tracking-[-1.44px] text-[clamp(20px,7vw,28px)]'>Lany</div>
          </ButtonLink>
          {/* <DesktopMenu {...header} />
          <MobileMenu {...header} /> */}
        </div>
      </div>
    </header>
  )
}
