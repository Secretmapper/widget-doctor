import styled from 'styled-components'
import { media } from '../../../styleUtils'

export default styled.div`
  border-bottom: 1px solid #F1EEF2;
  display: flex;
  padding: 1.5rem;

  flex-direction: column;
  ${media.sm`flex-direction: row;`}
`
