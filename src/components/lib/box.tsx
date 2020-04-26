import styled from 'styled-components'

type BoxProps = {
  vertical?: boolean
  horizontal?: boolean
}

const Box = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${(props: any) => (props.vertical ? 'column' : 'row')};
  align-items: baseline;
`

export default Box
