import React from 'react'
import styled from 'styled-components'
import Rectangle from 'react-rectangle'

const RectangleWithValidProps = ({ filled, children, ...props }) => (
  <Rectangle {...props}>{children}</Rectangle>
)

export default styled(RectangleWithValidProps)`
  ${props => !props.filled && props.dragging && `
    border: 2px dashed #DCDFE6;
    border-radius: 8px;
  `}

  box-sizing: border-box;
  margin: -2px;

  align-items: center;
  justify-content: center;
`
