import { Section } from '@/common/section-wrapper'
import clsx from 'clsx'
import Link from 'next/link'
import s from './callout.module.css'
import Image, { StaticImageData } from 'next/image'
import bannerpng from '../../public/banner.png'
import apps from '../../public/apps.png'
import organize from '../../public/organize.png'
import assistant from '../../public/assistants.png'
import { FeaturesListTemplate } from '@/common/feature-list-template'

type Feature = { title: string; subtitle: string; image: StaticImageData }

const featurelist: Feature[] = [
  {
    title: 'Connect your apps.',
    subtitle: 'Google Calendar',
    image: apps
  },
  {
    title: 'Organize your data.',
    subtitle: 'Google Calendar',
    image: organize
  },
  {
    title: 'Create your AI team.',
    subtitle: 'Google Calendar',
    image: assistant
  }
]

export function Features () {
  return (
    <Section>
      <div className='text-[--text-primary] leading-tight text-pretty text-start font-medium tracking-[-1.44px] text-[clamp(20px,7vw,28px)]'>
        Get started with your personal AI workspace.
      </div>
      <div className='mt-5 space-y-10'>
        {featurelist.map((item, i) => (
          <FeaturesListTemplate
            key={i}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
          />
        ))}
      </div>
    </Section>
  )
}
