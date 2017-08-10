import styled from 'styled-components'

export default styled.div`
  align-self: center;
  background: #6FBA78;
  height: 100%;
  width: ${props => props.progress}%;

  transition: width 0.2s;
`
