import Image from 'next/image'
import Access from '../../public/access.png'

interface QuizLogoProps {
  title: string
}

export function QuizLogo({ title }: QuizLogoProps) {
  return (
    <div className="flex gap-6 items-center">
      <Image src={Access} alt="Quiz Logo" />
      <span className="text-white text-[28px]">{title}</span>
    </div>
  )
}
