import styled from 'styled-components'

export default styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  padding: 8px 12px;
  outline: none;

  svg {
    font-size: 1.3rem;
    margin-bottom: 0;
    vertical-align: top;
  }

  background: #6980A8;
  color: white;

  &:hover:enabled {
    background: #6F859E;
  }

  &:focus {
    background: #2F4059;
  }

  ${props => props.mute && `
    background: white;
    border: 1px solid #E6E9EE;
    color: #8194A0;

    &:hover:enabled {
      background: #7B909C;
      color: white;
    }

    &:focus {
      background: #6980A8;
      color: white;
    }
  `}
`
