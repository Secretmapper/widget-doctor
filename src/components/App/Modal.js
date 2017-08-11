import React from 'react'
import fadeInUp from '../../animations/fadeInUp'
import styled from 'styled-components'
import Modal from 'react-modal'
import { media } from '../../styleUtils'

const StyledModal = styled(Modal)`
  animation: ${fadeInUp} ease-in-out 0.3s;
  background: white;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 6px;
  box-shadow: 0 2px 20px rgba(0,0,0,.5);
  overflow: hidden;
  margin: 10px auto;
  outline: none;
  padding: 0;

  ${media.md`
    max-width: 900px;
  `}
`

const MappedToOverlay = ({ className, children, ...props }) => (
  <StyledModal overlayClassName={className} {...props}>{children}</StyledModal>
)

export default styled(MappedToOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
`
