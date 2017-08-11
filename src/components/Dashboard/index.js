import React from 'react'
import { Grid } from 'grid-styled'
import DroppableGrid from '../../containers/DashboardDroppableGrid'
import Centered from '../Centered'

import Wrapper from './Wrapper'
import Header from './Header'
import Box from './Box'

const ratios = [1, 1 / 2, 1 / 3]
const DropHereMessage = _ => <Centered style={{ color: '#697FA8' }}>Drop Here</Centered>

export default ({ header, children, moveWidget }) => (
  <Wrapper>
    <Header>{header}</Header>
    <div>
      {children && React.Children.map(
        children,
        (child, index) => (
          child
          ? (
            <Grid w={ratios} p={1} key={child.key}>
              <Box aspectRatio={[400, 250]} filled>
                {child || <DropHereMessage />}
              </Box>
            </Grid>
          )
          : (
            <DroppableGrid w={ratios} p={1} key={index} index={index} onDrop={k => moveWidget(k, index)}>
              <Box aspectRatio={[400, 250]}>
                <DropHereMessage />
              </Box>
            </DroppableGrid>
          )
        )
      )}
    </div>
  </Wrapper>
)
