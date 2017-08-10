import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from './index'

storiesOf('Input', module)
  .add('default', () => (
    <Input />
  ))
  .add('with placeholder', () => (
    <Input placeholder='Placeholder' />
  ))
  .add('number', () => (
    <Input type='number' min='0' max='5' />
  ))
