import React, { Component } from 'react'
import Dropdown from './Dropdown'

import IconButton from '../IconButton'
import ListItem from '../ListItem'
import Widget from './Widget'

import SettingsIcon from 'react-icons/lib/io/android-more-vertical'
import SettingsContainer from './SettingsContainer'
import Actions from '../Actions'
import Button from '../Button'

// TODO: Disabling linting here due to use of class properties
// Apparently an eslint bug (https://github.com/babel/babel-eslint/issues/487)

/*eslint-disable*/
export default class extends Component {
  static defaultProps = {
    onSettingsSave: _ => {},
    onSettingsCancel: _ => {}
  }

  state = {
    element: null,
    editing: false,
    showDropdown: false
  }

  componentWillMount () {
    document.addEventListener('click', this.onDocumentClick, false)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.onDocumentClick, false)
  }

  setRef = element => {
    this.setState({ element })
  }

  toggleDropdown = _ => {
    this.setState(({ showDropdown }) => ({ showDropdown: !showDropdown }))
  }

  onDocumentClick = e => {
    const { element } = this.state

    if (element && element.contains(e.target)) return
    this.setState({ showDropdown: false })
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
    const { setRef, toggleDropdown, openSettings, onCancel, onSave, onDelete } = this
    const { header, main, settings } = this.props
    const { editing, showDropdown } = this.state

    return (
      <Widget>
        <Widget.Header>
          {header}
          {!editing && (
            <div ref={setRef}>
              <IconButton onClick={toggleDropdown}>
                <SettingsIcon />
              </IconButton>
              {showDropdown && (
                <Dropdown>
                  <ListItem onClick={openSettings}>Edit Widget</ListItem>
                  <ListItem onClick={onDelete}>Delete Widget</ListItem>
                </Dropdown>
              )}
            </div>
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
}
/*eslint-enable*/
