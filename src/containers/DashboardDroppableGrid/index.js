import React, { Component } from 'react'
import { compose } from 'recompose'
import { Grid } from 'grid-styled'
import { DropTarget } from 'react-dnd'

const gridTarget = {
  drop ({ onDrop }, monitor) {
    onDrop(monitor.getItem().widgetKey)
  }
}

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

export default compose(
  DropTarget('DASHBOARD_WIDGET', gridTarget, collect)
)(class extends Component {
  render () {
    const { children, connectDropTarget, isOver, index, ...props } = this.props

    return (
      <Grid {...props}>
        {connectDropTarget(
          <div>
            {children}
          </div>
        )}
      </Grid>
    )
  }
})
