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

export default ({ dashboard, addWidget, editWidget, deleteWidget, openWidget, closeWidget }) => (
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
    >
      {Object.keys(dashboard.widgets).map(key => (
        React.createElement(
          widgetsKeyToComponentMap[key],
          {
            ...dashboard.widgets[key],
            key,
            widgetKey: key,
            onEdit: editWidget,
            onDelete: deleteWidget
          }
        )
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
