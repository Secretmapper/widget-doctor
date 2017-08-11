import React from 'react'
import { storiesOf } from '@storybook/react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import UsersActivity from './index'
import data from '../../../__fixtures__/data'

const WithContext = DragDropContext(HTML5Backend)(UsersActivity)

storiesOf('WidgetDashboard.UsersActivity', module)
  .add('default', () => (
    <WithContext data={data} settings={{ numberOfUsers: 1, activity: 'Lowest' }} />
  ))
