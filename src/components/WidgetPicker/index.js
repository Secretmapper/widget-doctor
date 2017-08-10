import React from 'react'
import Input from '../Input'
import IconButton from '../IconButton'
import Button from '../Button'
import HeaderSidebarLayout from '../HeaderSidebarLayout'
import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
import WidgetPickerRow from './WidgetPickerRow'
import Actions from '../Actions'

import WidgetActivityUsersImage from '../../assets/images/widget_activity_users.png'

import CloseIcon from 'react-icons/lib/io/close'

export default ({ header, sidebar, main }) => (
  <HeaderSidebarLayout
    header={
      <Header>
        Add a widget
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Header>
    }
    sidebar={
      <Sidebar>
        <Input placeholder='Search' />
      </Sidebar>
    }
    main={
      <Main>
        <WidgetPickerRow
          img={WidgetActivityUsersImage}
          header='Users Activity'
          author='TimeDoctor'
          description='Users who worked more or less than their minimuim hours required in daily, weekly, and monthly.'
        />
        <Actions>
          <Button mute>Cancel</Button>
          <Button>Save</Button>
        </Actions>
      </Main>
    }
  />
)
