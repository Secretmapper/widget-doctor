import React from 'react'
import Wrapper from './Wrapper'
import Image from './Image'
import Main from './Main'
import Header from './Header'
import SubHeader from './SubHeader'
import Description from './Description'
import Actions from './Actions'

import Button from '../../Button'
import AddIcon from 'react-icons/lib/io/android-add'

export default ({ img, header, author, description }) => (
  <Wrapper>
    <Image>
      <img src={img} alt='Widget Logo' />
    </Image>
    <Main>
      <Header>{header}</Header>
      <SubHeader>
        By {author}
      </SubHeader>
      <Description>
        {description}
      </Description>
    </Main>
    <Actions>
      <Button><AddIcon /> Add Widget</Button>
    </Actions>
  </Wrapper>
)
