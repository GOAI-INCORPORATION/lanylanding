import { CheckIcon } from '@radix-ui/react-icons'

import { Section } from '@/common/section-wrapper'
import { Heading } from '@/common/heading'
import {
  CalendarIcon,
  ClipboardIcon,
  GlobeIcon,
  HeartIcon,
  ReaderIcon
} from '@radix-ui/react-icons'
import { fragmentOn } from 'basehub'

type FeatureItem = {
  _title: string
  subtitle: string
  icon: React.ElementType // Radix icon component
}

export const featuresSideBySideList: { items: FeatureItem[] } = {
  items: [
    {
      _title: 'AI Scheduler',
      subtitle:
        'Turn goals into prioritized plans with clear timelines and next steps.',
      icon: CalendarIcon
    },
    {
      _title: 'AI Money Manager',
      subtitle:
        'Track your expenses, bills, and budgets.',
      icon: ClipboardIcon
    },
    {
      _title: 'AI Trip Planner',
      subtitle:
        'Find flights and stays, build itineraries, and handle last-minute changes.',
      icon: GlobeIcon
    },
    {
      _title: 'AI Tutor',
      subtitle:
        'Explain concepts, generate practice problems, and adapt to your learning pace.',
      icon: ReaderIcon
    }
  ]
}

export function FeaturesCardList () {
  return (
    <Section
      className='relative lg:container lg:mx-auto lg:!flex-row lg:gap-0 lg:p-28'
      container='full'
    >
      <div className='container relative top-0 mx-auto shrink self-stretch px-6 lg:w-1/2 lg:pl-0 lg:pr-12 xl:pr-20'>
        <div className='sticky bottom-0 top-[calc(var(--header-height)+40px)] flex flex-col gap-10'>
          <Heading
            tag='assistants'
            align='left'
            subtitle={[
              'From a Scheduler that manages your calendar to a Money Manager that tracks your finances, build your personal AI team to handle the busywork so you can focus on what matters.'
            ]}
          >
            <h4>Choose the assistants you need.</h4>
          </Heading>
          {/* <div className='flex items-center gap-3 md:order-3'>
            <button className='bg-indigo-500 text-white !h-14 p-3 flex-col bg-accent-500 items-center justify-center rounded-none !text-base flex w-full'>
              Get early access
            </button>
          </div> */}
        </div>
      </div>
      <div className='w-full flex-1 shrink-0 lg:w-1/2 lg:flex-1'>
        <div className='no-scrollbar flex gap-5 overflow-auto px-6 lg:flex-col lg:px-0'>
          {featuresSideBySideList.items.map(
            ({ _title, icon: Icon, subtitle }) => (
              <article
                key={_title}
                className='flex w-[280px] shrink-0 flex-col gap-4 rounded-lg border border-gray-300 bg-gray-100 p-4 dark:border-[--dark-border] dark:bg-[--dark-surface-secondary] lg:w-full lg:flex-row lg:p-5'
              >
                <figure className='flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-200 p-3 dark:bg-[--dark-surface-tertiary]'>
                  <Icon aria-label={_title} className='h-6 w-6' />
                </figure>
                <div className='flex flex-col items-start gap-1'>
                  <h5 className='text-lg font-medium'>{_title}</h5>
                  <p className='text-pretty text-text-tertiary dark:text-[--dark-text-tertiary]'>
                    {subtitle}
                  </p>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </Section>
  )
}
