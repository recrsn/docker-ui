import React, { useState, useEffect } from 'react'
import Title from '../lib/title'
import { ImageInfo } from 'dockerode'
import { listAllImages } from '../services/docker'
import Image from '../lib/image'
import { List, ListItem } from '../lib/list'
import PageProps from './page-props'

export default function Images(props:PageProps) {
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
