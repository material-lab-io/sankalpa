'use client'

import { useState } from 'react'
import Image from 'next/image'

interface TempleImageProps {
  src: string
  alt: string
  className?: string
}

export default function TempleImage({ src, alt, className = '' }: TempleImageProps) {
  const [error, setError] = useState(false)
  const fallbackSrc = '/images/temple-fallback.svg'
  
  return (
    <Image
      src={error ? fallbackSrc : src}
      alt={alt}
      fill
      className={className}
      unoptimized
      onError={() => setError(true)}
    />
  )
}