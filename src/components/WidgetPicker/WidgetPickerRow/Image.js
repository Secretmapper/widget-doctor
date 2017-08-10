import styled from 'styled-components'
import { media } from '../../../styleUtils'

export default styled.div`
  display: none;
  ${media.md`display: block;`}

  align-items: center;
  align-self: center;
  padding-right: 20px;

  img {
    height: 80px;
  }
`
