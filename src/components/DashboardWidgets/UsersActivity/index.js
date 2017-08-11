import React from 'react'
import { compose, withHandlers } from 'recompose'
import DashboardWidget from '../../DashboardWidget'
import ActivityRow from './Row'
import { Flex, Grid } from 'grid-styled'

import InputGroup from '../../InputGroup'
import Label from '../../Label'
import Input from '../../Input'

const UserRow = data => ({ id, ...props }) => (
  <ActivityRow key={id} id={id} {...props} progress={data.daily[id]} />
)

export default compose(
  withHandlers({
    editNumberOfUsers: ({ widgetKey, onEdit }) => e => {
      onEdit(widgetKey, 'numberOfUsers', e.target.value)
    },
    editActivity: ({ widgetKey, onEdit }) => e => {
      onEdit(widgetKey, 'activity', e.target.value)
    }
  })
)(({ data, settings, widgetKey, onDelete, editNumberOfUsers, editActivity, ...props }) => (
  <DashboardWidget
    header='Users activity'
    main={data.users && data.users.map(UserRow(data))}
    settings={(
      <div>
        <InputGroup>
          <Label block>Number of users</Label>
          <Input
            value={settings.numberOfUsers}
            onChange={editNumberOfUsers}
            fullWidth
            placeholder='Number of users'
            type='number'
            min='1'
            max='5'
          />
        </InputGroup>
        <InputGroup>
          <Label name='activity' block>Activity</Label>
          <Flex>
            <Grid w={[1 / 2]}>
              <Input
                name='activity'
                type='radio'
                value='Highest'
                id='activity-highest'
                checked={settings.activity === 'Highest'}
                onChange={editActivity}
              />
              <label htmlFor='activity-highest'>Highest</label>
            </Grid>
            <Grid w={[1 / 2]}>
              <Input
                name='activity'
                type='radio'
                value='Lowest'
                id='activity-lowest'
                checked={settings.activity === 'Lowest'}
                onChange={editActivity}
              />
              <label htmlFor='activity-lowest'>Lowest</label>
            </Grid>
          </Flex>
        </InputGroup>
      </div>
    )}
    widgetKey={widgetKey}
    onDelete={onDelete}
  />
))
