import { LucideProps } from 'lucide-react'
import Image from 'next/image'

export const Icons = {
  logo: (props: LucideProps) => (
    <Image className="me-2 rounded" width={80px} hiegh style="width:30px;height:30px" src="/logos/simplifai-logo.svg" />
  ),
}