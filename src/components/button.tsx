import { HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <button className="bg-primary rounded-3xl" {...rest}>
      <p className="text-[28px] text-white p-8">{title}</p>
    </button>
  )
}
