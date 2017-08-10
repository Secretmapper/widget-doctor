import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './index'
import AddIcon from 'react-icons/lib/io/android-add'
import DownIcon from 'react-icons/lib/io/chevron-down'

storiesOf('Button', module)
  .add('default', () => (
    <Button>Button</Button>
  ))
  .add('with left icon', () => (
    <Button><AddIcon /> Button</Button>
  ))
  .add('with right icon', () => (
    <Button>Button <DownIcon /></Button>
  ))
