import { CheckIcon } from '@radix-ui/react-icons'

import { Section } from '@/common/section-wrapper'
import { Heading } from '@/common/heading'
import { fragmentOn } from 'basehub'

type Logo = { logo: string; name?: string }

const logos: Logo[] = [
  {
    logo: 'https://img.icons8.com/color/480/google-calendar--v2.png',
    name: 'Google Calendar'
  },
  { logo: 'https://img.icons8.com/fluency/240/gmail-new.png', name: 'Gmail' },
  {
    logo: 'https://img.icons8.com/color/144/google-drive--v2.png',
    name: 'Google Drive'
  },
  {
    logo: 'https://logowik.com/content/uploads/images/google-tasks7052.logowik.com.webp',
    name: 'Google Tasks'
  },
  {
    logo: 'https://img.icons8.com/color/144/outlook-calendar.png',
    name: 'Outlook Calendar'
  },
  { logo: 'https://img.icons8.com/color/144/ms-outlook.png', name: 'Outlook' },
  {
    logo: 'https://img.icons8.com/color/144/microsoft-onedrive-2019.png',
    name: 'OneDrive'
  },
  {
    logo: 'https://img.icons8.com/color/144/microsoft-to-do-app.png',
    name: 'Microsoft To Do'
  },
  { logo: 'https://img.icons8.com/color/144/ms-one-note.png', name: 'OneNote' },
  { logo: 'https://img.icons8.com/color/144/dropbox.png', name: 'Dropbox' },
  { logo: 'https://img.icons8.com/ios/144/notion.png', name: 'Notion' },
  { logo: 'https://img.icons8.com/color/144/todoist.png', name: 'Todoist' },
  {
    logo: 'https://img.icons8.com/fluency/144/tick-tick.png',
    name: 'TickTick'
  },
  {
    logo: 'https://img.icons8.com/color/48/jira.png',
    name: 'Jira'
  },
  {
    logo: 'https://img.icons8.com/color/48/trello.png',
    name: 'Trello'
  },
  {
    logo: 'https://img.icons8.com/fluency/50/confluence.png',
    name: 'Confluence'
  },
  {
    logo: 'https://img.icons8.com/ios-filled/50/asana.png',
    name: 'Asana'
  },
  {
    logo: 'https://img.icons8.com/color/48/clickup.png',
    name: 'Clickup'
  },
  {
    logo: 'https://img.icons8.com/color/48/google-maps-new.png',
    name: 'Google Maps'
  },
  {
    logo: 'https://img.icons8.com/fluency/50/google-docs--v2.png',
    name: 'Google Docs'
  },
  {
    logo: 'https://img.icons8.com/color/48/google-sheets.png',
    name: 'Google Sheets'
  },
  {
    logo: 'https://img.icons8.com/color/48/google-slides.png',
    name: 'Google Slides'
  },
  {
    logo: 'https://img.icons8.com/color/48/ms-powerpoint--v1.png',
    name: 'Powerpoint'
  },
  {
    logo: 'https://img.icons8.com/color/48/coda.png',
    name: 'Coda'
  },
  {
    logo: 'https://img.icons8.com/fluency/50/microsoft-excel-2019.png',
    name: 'Excel'
  },
  {
    logo: 'https://img.icons8.com/color/48/box-logo.png',
    name: 'Box'
  },
  {
    logo: 'https://img.icons8.com/ios-filled/50/github.png',
    name: 'Github'
  },
  {
    logo: 'https://img.icons8.com/color/48/slack-new.png',
    name: 'Slack'
  },
  {
    logo: 'https://img.icons8.com/fluency/50/microsoft-teams-2019.png',
    name: 'Teams'
  },
  {
    logo: 'https://img.icons8.com/color/48/zoom.png',
    name: 'Zoom'
  },
  {
    logo: 'https://img.icons8.com/color/48/google-meet.png',
    name: 'Google Meet'
  }
]

export function FeaturesCardList1 () {
  return (
    <Section
      className='relative lg:container lg:mx-auto lg:!flex-row lg:gap-0 lg:p-28'
      container='full'
    >
      <div className='container flex relative top-0 mx-auto shrink self-stretch px-6 lg:w-1/2 lg:pl-0 lg:pr-12 xl:pr-20'>
        <div className='sticky bottom-0 top-[calc(var(--header-height)+40px)] flex flex-col gap-10'>
          <Heading
            tag='knowledge'
            className='items-start'
            align='left'
            subtitle={[
              'Stop juggling between Gmail, Slack, Google Drive, Notion, and your calendar. Our platform connects your tools so your AI assistants finally have the context they need.'
            ]}
          >
            <h4>Unify your scattered apps into one hub.</h4>
          </Heading>
          {/* <div className='flex items-center gap-3 md:order-3'>
            <button className='bg-indigo-500 text-white !h-14 p-3 flex-col bg-accent-500 items-center justify-center rounded-none !text-base flex w-full'>
              Get early access
            </button>
          </div> */}
        </div>
      </div>
      <div className='w-full flex-1 shrink-0 lg:w-1/2 lg:flex-1 mx-auto px-1 py-2'>
        <div
          className='
          grid gap-px
          grid-cols-7 md:grid-cols-8
        '
        >
          {logos.map((item, i) => (
            <div
              key={i}
              className='flex items-center justify-center aspect-square p-0'
            >
              <img
                src={item.logo}
                alt={item.name ?? `Logo ${i + 1}`}
                className='h-5 md:h-6 lg:h-7 w-auto object-contain'
                loading='lazy'
                decoding='async'
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
