import React, { ReactNode } from 'react'
import styled from 'styled-components'

type Props = { children: ReactNode }

const Title = styled.h1`
  margin: 0rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #333;
`

export default Title
