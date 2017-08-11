import React from 'react'
import { compose, withHandlers, withState } from 'recompose'
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
  withState('numberOfUsers', 'setNumberOfUsers', ({ settings }) => settings.numberOfUsers),
  withState('activity', 'setActivity', ({ settings }) => settings.activity),
  withHandlers({
    editNumberOfUsers: ({ setNumberOfUsers }) => e => {
      setNumberOfUsers(e.target.value)
    },
    editActivity: ({ setActivity }) => e => {
      setActivity(e.target.value)
    },
    onSave: ({ numberOfUsers, activity, widgetKey, onEdit }) => _ => {
      onEdit(widgetKey, 'numberOfUsers', numberOfUsers)
      onEdit(widgetKey, 'activity', activity)
    },
    onCancel: ({ setNumberOfUsers, setActivity, settings }) => _ => {
      setNumberOfUsers(settings.numberOfUsers)
      setActivity(settings.activity)
    }
  })
)(({
  data, settings, widgetKey, onDelete,
  numberOfUsers, editNumberOfUsers,
  activity, setActivity, onSave, onCancel,
  editActivity, ...props
}) => (
  <DashboardWidget
    header='Users activity'
    main={data.users && data.users.map(UserRow(data))}
    settings={(
      <div>
        <InputGroup>
          <Label block>Number of users</Label>
          <Input
            value={numberOfUsers}
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
                checked={activity === 'Highest'}
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
                checked={activity === 'Lowest'}
                onChange={editActivity}
              />
              <label htmlFor='activity-lowest'>Lowest</label>
            </Grid>
          </Flex>
        </InputGroup>
      </div>
    )}
    widgetKey={widgetKey}
    onSettingsSave={onSave}
    onSettingsCancel={onCancel}
    onDelete={onDelete}
  />
))
