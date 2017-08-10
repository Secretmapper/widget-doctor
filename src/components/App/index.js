import React from 'react'
import Modal from './Modal'
import Button from '../Button'
import Dashboard from '../Dashboard'
import WidgetPicker from '../WidgetPicker'
import Title from './Title'

import AddIcon from 'react-icons/lib/io/android-add'

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
    />
    <Modal isOpen contentLabel='Widget Picker'>
      <WidgetPicker />
    </Modal>
  </div>
)
