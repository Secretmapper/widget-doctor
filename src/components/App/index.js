import React from 'react'
import Modal from './Modal'
import Button from '../Button'
import Dashboard from '../Dashboard'
import WidgetPicker from '../WidgetPicker'
import Title from './Title'

import AddIcon from 'react-icons/lib/io/android-add'

import UsersActivity from '../DashboardWidgets/UsersActivity'

const widgetsKeyToComponentMap = ({
  'UsersActivity': UsersActivity
})

export default ({
  dashboard,
  addWidget, editWidget,
  moveWidget, deleteWidget,
  openWidget, closeWidget
}) => (
  <div>
    <Dashboard
      header={
        <div>
          <Title>Team Dashboard</Title>
          <div>
            <Button onClick={openWidget}><AddIcon /> Add Widget</Button>
          </div>
        </div>
      }
      moveWidget={moveWidget}
    >
      {dashboard.widgets.map(object => (
        object
        ? (
          React.createElement(
            widgetsKeyToComponentMap[object.key],
            {
              ...object,
              key: object.key,
              widgetKey: object.key,
              onEdit: editWidget,
              onDelete: deleteWidget
            }
          )
        )
        : null
      ))}
    </Dashboard>
    <Modal
      isOpen={dashboard.ui.widgetPickerOpen}
      contentLabel='Widget Picker'
    >
      <WidgetPicker
        onRequestClose={closeWidget}
        activeWidgets={dashboard.widgets}
        addWidget={addWidget}
        deleteWidget={deleteWidget}
      />
    </Modal>
  </div>
)
