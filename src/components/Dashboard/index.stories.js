import React from 'react'
import { storiesOf } from '@storybook/react'
import Dashboard from './index'

storiesOf('Dashboard', module)
  .add('default', () => (
    <Dashboard />
  ))
