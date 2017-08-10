import React from 'react'
import { storiesOf } from '@storybook/react'
import Widget from './index'

storiesOf('Widget', module)
  .add('default', () => (
    <Widget>
      <Widget.Header>
        Widget
      </Widget.Header>
    </Widget>
  ))
