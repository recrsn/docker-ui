import React from 'react'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import {
  faExclamationCircle,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import Box from '../lib/box'
import IconButton from '../lib/icon-button'

type Props = {
  title?: string
  children?: React.ReactNode
  dismiss?: () => void
}

const ErrorIcon = styled(Icon).attrs(() => ({
  icon: faExclamationCircle,
  size: '4x'
}))`
  color: red;
`

const FullPageBox = styled(Box)`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const ErrorTitle = styled.h3`
  margin: 1rem 0;
`

export default function ErrorView(props: Props) {
  const { dismiss } = props
  return (
    <FullPageBox vertical>
      <ErrorIcon />
      <ErrorTitle>{props.title || 'Uh oh!'}</ErrorTitle>
      <p>{props.children || 'An error occured'}</p>
      <IconButton
        size="lg"
        icon={faTimesCircle}
        onClick={() => dismiss && dismiss()}
      />
    </FullPageBox>
  )
}
