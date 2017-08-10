import styled from 'styled-components'

export default styled.button`
  background: #6980A8;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  padding: 8px 12px;
  outline: none;

  svg {
    font-size: 1.3rem;
    margin-bottom: 0;
    vertical-align: top;
  }

  &:hover:enabled {
    background: #6F859E;
  }

  &:focus {
    background: #2F4059;
  }
`
