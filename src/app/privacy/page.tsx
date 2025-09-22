import Image from 'next/image'
import { Hero } from '@/components/hero'
import { PrivacyHero } from '@/components/privacyhero'
import PrivacyText from '@/components/privacytext'
import { FeaturesCardList1 } from '@/components/features-list-1'

export default function Privacy () {
  return (
    <div>
      <PrivacyHero />
      <PrivacyText />
    </div>
  )
}
