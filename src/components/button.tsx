import { HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <button
      className="bg-primary lg:rounded-3xl rounded-xl  enabled:hover:bg-primary/70"
      {...rest}
    >
      <p className="lg:text-[28px] text-lg text-white lg:p-8 p-5">{title}</p>
    </button>
  )
}
