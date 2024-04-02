import Image from 'next/image'

interface QuizLogoProps {
  title: string
  imgUrl: string
}

export function QuizLogo({ title, imgUrl }: QuizLogoProps) {
  return (
    <div className="flex gap-6 items-center">
      <Image
        src={imgUrl}
        alt="Quiz Logo"
        width={56}
        height={56}
        className="lg:w-14 lg:h-14 w-10 h-10"
      />
      <span className="text-white lg:text-[28px] text-lg">{title}</span>
    </div>
  )
}
