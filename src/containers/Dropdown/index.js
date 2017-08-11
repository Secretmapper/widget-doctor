import React, { Component } from 'react'

import Dropdown from '../../components/FloatingPaper'
import IconButton from '../../components/IconButton'

// TODO: Disabling linting here due to use of class properties
// Apparently an eslint bug (https://github.com/babel/babel-eslint/issues/487)

/*eslint-disable*/
export default class extends Component {
  state = {
    show: false
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
    this.setState(({ show }) => ({ show: !show }))
  }

  onDocumentClick = e => {
    const { element } = this.state

    if (element && element.contains(e.target)) return
    this.setState({ show: false })
  }

  render () {
    const { setRef, toggleDropdown } = this
    const { show } = this.state
    const { children, icon } = this.props

    return (
      <div>
        <IconButton onClick={toggleDropdown} innerRef={setRef}>
          {icon}
        </IconButton>
        {show && <Dropdown> {children} </Dropdown>}
      </div>
    )
  }
}
/*eslint-enable*/
