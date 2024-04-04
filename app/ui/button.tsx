import { twMerge } from 'tailwind-merge'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        'rounded-lg py-3 px-6 text-xs font-bold uppercase text-white shadow-md transition-all lg:hover:shadow-lg',
        className
      )}
    >
      {children}
    </button>
  )
}
