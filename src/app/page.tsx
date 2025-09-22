import Image from 'next/image'
import { Hero } from '@/components/hero'
import { FeaturesCardList } from '@/components/features-list'
import { Callout } from '@/components/callout'
import { Features } from '@/components/features'

export default function Home () {
  return (
    <div>
      <Hero />
      <Features />
      <Callout />
    </div>
  )
}
