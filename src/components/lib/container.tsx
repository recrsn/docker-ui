import React from 'react'

import TimeAgo from 'react-timeago'
import { ContainerInfo } from 'dockerode'

import {
  FontAwesomeIcon as Icon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome'
import { faClock, faCircle } from '@fortawesome/free-solid-svg-icons'
import { toMillis } from '../../utils'
import styled from 'styled-components'
import Box from './box'

type Props = {
  container: ContainerInfo
}

const Heading = styled.h4`
  margin: 0;
  margin-right: 1rem;
`

const ImageName = styled.span`
  color: #888;
  font-size: 0.9rem;
`

type StateIndicatorProps = {
  state: string
}

const StateInticatorIcon = styled(Icon).attrs(() => ({
  icon: faCircle
}))<StateIndicatorProps & FontAwesomeIconProps>`
  font-size: 0.8rem;
  margin-right: 0.5rem;
  color: ${(props: any) => {
    switch (props.state as string) {
      case 'running':
        return 'green'
      case 'removing':
      case 'dead':
      case 'exited':
        return 'red'
      default:
        return 'yellow'
    }
  }};
`

function cleanContainerName(name: string) {
  return name.substring(1)
}

export default function Container({ container }: Props) {
  return (
    <>
      <Box>
        <StateInticatorIcon state={container.State} />
        <Heading>{cleanContainerName(container.Names[0])}</Heading>{' '}
        <ImageName>{container.Image}</ImageName>
      </Box>
      <p>{container.Status}</p>
      <div>
        <Icon icon={faClock} /> <TimeAgo date={toMillis(container.Created)} />
      </div>
    </>
  )
}
