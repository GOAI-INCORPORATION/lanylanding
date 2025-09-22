import Image from 'next/image'
import { Hero } from '@/components/hero'
import { TermsHero } from '@/components/termshero'
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
