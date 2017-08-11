import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { compose } from 'recompose'
import { DragSource } from 'react-dnd'

import Dropdown from '../../containers/Dropdown'
import ListItem from '../ListItem'
import Widget from './Widget'

import SettingsIcon from 'react-icons/lib/io/android-more-vertical'
import SettingsContainer from './SettingsContainer'
import Actions from '../Actions'
import Button from '../Button'

const widgetDrag = {
  beginDrag: ({ widgetKey }) => ({ widgetKey })
}

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

// TODO: Disabling linting here due to use of class properties
// Apparently an eslint bug (https://github.com/babel/babel-eslint/issues/487)

/*eslint-disable*/
export default compose(
  DragSource('DASHBOARD_WIDGET', widgetDrag, collect)
)(class extends Component {
  static defaultProps = {
    onSettingsSave: _ => {},
    onSettingsCancel: _ => {}
  }

  state = {
    element: null,
    editing: false
  }

  openSettings = e => {
    this.setState({ editing: true, showDropdown: false })
  }

  onSave = _ => {
    const { onSettingsSave } = this.props

    onSettingsSave()
    this.setState({ editing: false })
  }

  onCancel = _ => {
    const { onSettingsCancel } = this.props

    onSettingsCancel()
    this.setState({ editing: false })
  }

  onDelete = _ => {
    const { onDelete, widgetKey } = this.props

    onDelete(widgetKey)
  }

  render () {
    const { openSettings, onCancel, onSave, onDelete } = this
    const { header, main, settings } = this.props
    const { editing } = this.state

    const { connectDragSource, isDragging } = this.props

    return (
      <Widget innerRef={ins => connectDragSource(findDOMNode(ins))}>
        <Widget.Header>
          {header}
          {!editing && (
            <Dropdown icon={<SettingsIcon />}>
              <ListItem onClick={openSettings}>Edit Widget</ListItem>
              <ListItem onClick={onDelete}>Delete Widget</ListItem>
            </Dropdown>
          )}
        </Widget.Header>
        <Widget.Body>
          {!editing
            ? main
            : (
              <SettingsContainer>
                {settings}
                <Actions compact>
                  <Button mute onClick={onCancel}>Cancel</Button>
                  <Button onClick={onSave}>Save</Button>
                </Actions>
              </SettingsContainer>
            )}
        </Widget.Body>
      </Widget>
    )
  }
})
/*eslint-enable*/
