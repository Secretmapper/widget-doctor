import styled from 'styled-components'

export default styled.input`
  border-radius: 4px;
  border: 1px solid #D8DDE6;
  box-sizing: border-box;
  color: #2B405B;
  font-size: 13px;
  outline: none;
  line-height: 1.428571429;
  padding: 6px 12px;

  ${props => props.fullWidth && `
    display: block;
    width: 100%;
  `}

  &:focus {
    border: 1px solid #77909D;
  }
`
