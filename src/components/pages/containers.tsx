import React, { useState, useEffect } from 'react'
import Title from '../lib/title'
import Container from '../lib/container'
import { ContainerInfo } from 'dockerode'
import { listAllContainers } from '../services/docker'
import List from '../lib/list/list'
import ListItem from '../lib/list/list-item'
import PageProps from './page-props'

export default function Containers(props: PageProps) {
  const [containers, setContainers] = useState([] as ContainerInfo[])

  useEffect(() => {
    ;(async () => {
      try {
        const containers = await listAllContainers()
        setContainers(containers)
      } catch (e) {
        props.error(e)
      }
    })()
  }, [props])

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
