import React from 'react'
import { storiesOf } from '@storybook/react'
import UsersActivity from './index'
import data from '../../../__fixtures__/data'

const dataset = data.users.map(user => ({
  ...user,
  progress: data.daily[user.id]
}))

storiesOf('WidgetDashboard.UsersActivity', module)
  .add('default', () => (
    <UsersActivity users={dataset} />
  ))
