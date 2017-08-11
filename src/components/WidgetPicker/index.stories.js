import React from 'react'
import { storiesOf } from '@storybook/react'
import WidgetPicker from './index'

storiesOf('WidgetPicker', module)
  .add('default', () => (
    <WidgetPicker activeWidgets={[]} />
  ))
