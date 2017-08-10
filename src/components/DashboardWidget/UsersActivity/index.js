import React from 'react'
import Widget from '../Widget'
import ActivityRow from './Row'

const UserRow = ({ id, ...props }) => (
  <ActivityRow key={id} id={id} {...props} />
)

export default ({ users }) => (
  <Widget>
    <Widget.Header>Users activity</Widget.Header>
    <Widget.Body>
      {users && users.map(UserRow)}
    </Widget.Body>
  </Widget>
)
