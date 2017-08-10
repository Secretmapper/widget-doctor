import React from 'react'
import { storiesOf } from '@storybook/react'
import HeaderSidebarLayout from './index'

storiesOf('HeaderSidebarLayout', module)
  .add('default', () => (
    <HeaderSidebarLayout
      header={
        <div>Header</div>
      }
      sidebar={
        <div>Sidebar</div>
      }
      main={
        <div>Main</div>
      }
    />
  ))
