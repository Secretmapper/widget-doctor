import styled from 'styled-components'
import Widget from '../Widget'

const Styled = styled(Widget)`
  height: 100%;
  width: 100%;
`

Styled.Header = styled(Widget.Header)`
  font-weight: normal;
`

Styled.Body = styled(Widget.Body)`
  overflow: auto;

`

export default Styled
