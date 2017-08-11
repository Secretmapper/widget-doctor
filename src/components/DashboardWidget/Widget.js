import styled from 'styled-components'
import Widget from '../Widget'

import IconButton from '../IconButton'

const Styled = styled(Widget)`
  position: relative;
  height: 100%;
  width: 100%;
`

Styled.Header = styled(Widget.Header)`
  cursor: move;
  display: flex;
  font-weight: normal;
  justify-content: space-between;
  flex-direction: row;
  padding-right: 0.5rem;
  position: relative;

  & ${IconButton} {
    color: #7B909C;
    margin: 0;
    padding: 0;
    font-size: 1.5rem;

    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
  }
`

Styled.Body = styled(Widget.Body)`
  padding: 5px 15px;
  overflow: auto;

`

export default Styled
