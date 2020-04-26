import React, { useState, useEffect } from 'react'
import Title from '../lib/title'
import { ImageInfo } from 'dockerode'
import { listAllImages } from '../docker/api'
import Image from '../lib/image'
import { List, ListItem } from '../lib/list'

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
      <List>
        {images.map(image => (
          <ListItem key={image.Id}>
            <Image image={image} />
          </ListItem>
        ))}
      </List>
    </>
  )
}
