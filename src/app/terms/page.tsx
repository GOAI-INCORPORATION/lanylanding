import Image from 'next/image'
import { Hero } from '@/components/hero'
import { TermsHero } from '@/components/termshero'
import { FeaturesCardList } from '@/components/features-list'
import { Callout2 } from '@/components/callout'
import { FeaturesCardList1 } from '@/components/features-list-1'
import TermsText from '@/components/termstext'

export default function Terms () {
  return (
    <div>
      <TermsHero />
      <TermsText />
    </div>
  )
}
