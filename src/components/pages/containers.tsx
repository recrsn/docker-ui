import React, { useState, useEffect } from 'react'
import Title from '../lib/title'
import Container from '../lib/container'
import { ContainerInfo } from 'dockerode'
import { listAllContainers } from '../docker/api'
import List from '../lib/list/list'
import ListItem from '../lib/list/list-item'

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
      <List>
        {containers.map(container => (
          <ListItem key={container.Id}>
            <Container container={container} />
          </ListItem>
        ))}
      </List>
    </>
  )
}
