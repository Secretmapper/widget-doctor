import React from 'react'

import Wrapper from './Wrapper'
import Header from './Header'
import ContentWrapper from './ContentWrapper'
import Sidebar from './Sidebar'
import Main from './Main'

export default ({ header, sidebar, main }) => (
  <Wrapper>
    <Header>{header}</Header>
    <ContentWrapper>
      <Sidebar>{sidebar}</Sidebar>
      <Main>{main}</Main>
    </ContentWrapper>
  </Wrapper>
)
