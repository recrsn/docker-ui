import React from 'react'
import { ImageInfo } from 'dockerode'

type Props = {
  image: ImageInfo
}

function imageInfo(image: ImageInfo) {
  const tags = image.RepoTags || [':']
  const primaryTag = tags[0]
  return {
    displayName: primaryTag.substring(0, primaryTag.lastIndexOf(':')),
    tags: tags.map(tag => tag.substring(tag.lastIndexOf(':') + 1)),
    id: image.Id
  }
}

export default function Image({ image }: Props) {
  const info = imageInfo(image)
  return (
    <div>
      <h6>{info.displayName}</h6>
      <p>{info.tags.join(', ')}</p>
      <div>{info.id.substr(7, 9)}</div>
    </div>
  )
}
