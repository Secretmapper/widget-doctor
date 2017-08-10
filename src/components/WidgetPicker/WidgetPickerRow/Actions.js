import styled from 'styled-components'
import { media } from '../../../styleUtils'
import Button from '../../Button'

export default styled.div`
  margin-top: 1rem;
  ${media.md`
    margin-top: 0;
    padding-left: 2rem;
  `}

  align-self: center;

  & ${Button} {
    white-space: nowrap;
  }

`
