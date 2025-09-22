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
    subtitle: 'Bring your mail client, drive, calendar app, notes app, task manager, and more into one place so nothing is scattered.',
    image: apps
  },
  {
    title: 'Organize your data.',
    subtitle: 'Organize your emails, notes, chats, files, tasks, and events into categories for easy discovery and powerful search.',
    image: organize
  },
  {
    title: 'Create your AI team.',
    subtitle: 'Create your team of expert AI assistants grounded on your organized data.',
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
