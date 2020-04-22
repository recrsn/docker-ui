import React, { useState, useEffect } from 'react'
import Title from '../title'
import Container from '../container'
import { ContainerInfo } from 'dockerode'
import { listAllContainers } from '../docker/api'

export default function Containers() {
  const [containers, setContainers] = useState([] as ContainerInfo[])

  useEffect(() => {
    ;(async () => {
      const containers = await listAllContainers()
      setContainers(containers)
    })()
  }, [])

  return (
    <>
      <Title>Containers</Title>
      {containers.map(container => (
        <Container key={container.Id} container={container} />
      ))}
    </>
  )
}
