import Image from 'next/image'

interface QuizLogoProps {
  title: string
  imgUrl: string
}

export function QuizLogo({ title, imgUrl }: QuizLogoProps) {
  return (
    <div className="flex gap-6 items-center">
      <Image src={imgUrl} alt="Quiz Logo" width={56} height={56} />
      <span className="text-white text-[28px]">{title}</span>
    </div>
  )
}
