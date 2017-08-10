import React from 'react'
import Dashboard from '../Dashboard'
import Button from '../Button'
import Title from './Title'

import AddIcon from 'react-icons/lib/io/android-add'

export default _ => (
  <Dashboard
    header={
      <div>
        <Title>Team Dashboard</Title>
        <div>
          <Button><AddIcon /> Button</Button>
        </div>
      </div>
    }
  />
)
