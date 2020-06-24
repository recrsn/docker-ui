import React from 'react'
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

type Props = {
  icon: IconDefinition
  size: SizeProp
  onClick?: (e: React.MouseEvent) => void
}

const ClearButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 1rem;
`

export default function IconButton(props: Props) {
  return (
    <ClearButton onClick={e => props.onClick && props.onClick(e)}>
      <Icon icon={props.icon} size={props.size} />
    </ClearButton>
  )
}
