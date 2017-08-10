import React from 'react'
import Modal from './Modal'
import Button from '../Button'
import Dashboard from '../Dashboard'
import WidgetPicker from '../WidgetPicker'
import Title from './Title'

import AddIcon from 'react-icons/lib/io/android-add'

import UsersActivity from '../DashboardWidget/UsersActivity'

export default _ => (
  <div>
    <Dashboard
      header={
        <div>
          <Title>Team Dashboard</Title>
          <div>
            <Button><AddIcon /> Add Widget</Button>
          </div>
        </div>
      }
    >
      <UsersActivity />
    </Dashboard>
    <Modal isOpen={false} contentLabel='Widget Picker'>
      <WidgetPicker />
    </Modal>
  </div>
)
