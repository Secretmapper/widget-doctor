import React from 'react'
import { Grid } from 'grid-styled'
import Centered from '../Centered'

import Wrapper from './Wrapper'
import Header from './Header'
import Box from './Box'

const ratios = [1, 1 / 2, 1 / 3]
const DropHereMessage = _ => <Centered style={{ color: '#697FA8' }}>Drop Here</Centered>

export default ({ header, children }) => (
  <Wrapper>
    <Header>{header}</Header>
    <div>
      {children && React.Children.map(
        children,
        child => (
          <Grid w={ratios} p={1} key={child.key}>
            <Box aspectRatio={[400, 250]} filled>
              {child || <DropHereMessage />}
            </Box>
          </Grid>
        )
      )}
      {Array.from(Array(6 - React.Children.count(children))).map(
        (child, index) => (
          <Grid w={ratios} p={1} key={index}>
            <Box aspectRatio={[400, 250]}>
              <DropHereMessage />
            </Box>
          </Grid>
        )
      )}
    </div>
  </Wrapper>
)
