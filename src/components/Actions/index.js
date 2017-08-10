import styled from 'styled-components'

export default styled.div`
  display: flex;
  justify-content: flex-end;
  ${props => !props.compact && 'padding: 1rem;'}

  button:not(:last-child) {
    margin-right: 1rem;
  }
`
