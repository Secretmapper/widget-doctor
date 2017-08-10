import React from 'react'
import DashboardWidget from '../../DashboardWidget'
import ActivityRow from './Row'
import { Flex, Grid } from 'grid-styled'

import InputGroup from '../../InputGroup'
import Label from '../../Label'
import Input from '../../Input'

const UserRow = ({ id, ...props }) => (
  <ActivityRow key={id} id={id} {...props} />
)

export default ({ users }) => (
  <DashboardWidget
    header='Users activity'
    main={users && users.map(UserRow)}
    settings={(
      <div>
        <InputGroup>
          <Label block>Number of users</Label>
          <Input fullWidth placeholder='Number of users' type='number' min='1' max='5' />
        </InputGroup>
        <InputGroup>
          <Label name='activity' block>Activity</Label>
          <Flex>
            <Grid w={[1 / 2]}>
              <Input name='activity' type='radio' value='Highest' id='activity-highest' />
              <label htmlFor='activity-highest'>Highest</label>
            </Grid>
            <Grid w={[1 / 2]}>
              <Input name='activity' type='radio' value='Lowest' id='activity-lowest' />
              <label htmlFor='activity-lowest'>Lowest</label>
            </Grid>
          </Flex>
        </InputGroup>
      </div>
    )}
  />
)
