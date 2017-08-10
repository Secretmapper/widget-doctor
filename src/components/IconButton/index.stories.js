import React from 'react'
import { storiesOf } from '@storybook/react'
import IconButton from './index'

import CloseIcon from 'react-icons/lib/io/close'

storiesOf('IconButton', module)
  .add('default', () => (
    <IconButton>
      <CloseIcon />
    </IconButton>
  ))
