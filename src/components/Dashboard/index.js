import React from 'react'
import { Grid } from 'grid-styled'
import Centered from '../Centered'

import Wrapper from './Wrapper'
import Header from './Header'
import Box from './Box'

const ratios = [1, 1 / 2, 1 / 3]
const DropHereMessage = _ => <Centered style={{ color: '#697FA8' }}>Drop Here</Centered>

export default ({ header }) => (
  <Wrapper>
    <Header>{header}</Header>
    <div style={{ boxSizing: 'border-box' }}>
      <Grid w={ratios} p={1}>
        <Box aspectRatio={[400, 250]}>
          <DropHereMessage />
        </Box>
      </Grid>
      <Grid w={ratios} p={1}>
        <Box aspectRatio={[400, 250]}>
          <DropHereMessage />
        </Box>
      </Grid>
      <Grid w={ratios} p={1}>
        <Box aspectRatio={[400, 250]}>
          <DropHereMessage />
        </Box>
      </Grid>
      <Grid w={ratios} p={1}>
        <Box aspectRatio={[400, 250]}>
          <DropHereMessage />
        </Box>
      </Grid>
      <Grid w={ratios} p={1}>
        <Box aspectRatio={[400, 250]}>
          <DropHereMessage />
        </Box>
      </Grid>
      <Grid w={ratios} p={1}>
        <Box aspectRatio={[400, 250]}>
          <DropHereMessage />
        </Box>
      </Grid>
    </div>
  </Wrapper>
)
