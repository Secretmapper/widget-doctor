import styled from 'styled-components'

export default styled.button`
  background: #6980A8;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 13px;
  padding: 6px;
  padding-left: 20px;
  padding-right: 20px;
  outline: none;

  &:hover:enabled {
    background: #6F859E;
  }

  &:focus {
    background: #2F4059;
  }
`
