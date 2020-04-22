import React, { useState, useEffect } from 'react'
import Title from '../title'
import { ImageInfo } from 'dockerode'
import { listAllImages } from '../docker/api'
import Image from '../image'

type Props = {}

export default function Images(props: Props) {
  const [images, setImages] = useState([] as ImageInfo[])

  useEffect(() => {
    ;(async () => {
      const images = await listAllImages()
      setImages(images)
    })()
  }, [])

  return (
    <>
      <Title>Images</Title>
      {images.map(image => (
        <Image image={image} />
      ))}
    </>
  )
}
