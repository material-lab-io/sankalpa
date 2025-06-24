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
  
  // Use fallback with base path for GitHub Pages
  const fallbackSrc = '/sankalpa/images/temple-fallback.svg'
  
  // Use fallback for local paths that don't exist or on error
  const imageSrc = (src.startsWith('/temples/') || error) ? fallbackSrc : src
  
  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      className={className}
      unoptimized
      onError={() => setError(true)}
    />
  )
}