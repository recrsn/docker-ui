import React from 'react'

import TimeAgo from 'react-timeago'
import { ContainerInfo } from 'dockerode'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { toMillis } from '../utils'

type Props = {
  container: ContainerInfo
}

export default function Container({ container }: Props) {
  return (
    <div>
      <h6>{container.Names[0]}</h6>
      <p>{container.State}</p>
      <div>
        <Icon icon={faClock} /> <TimeAgo date={toMillis(container.Created)} />
      </div>
    </div>
  )
}
