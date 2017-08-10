import React from 'react'
import ActivityRowWrapper from './Wrapper'
import Half from './Half'
import ProgressBar from './ProgressBar'
import Progress from './Progress'
import ProgressPerc from './ProgressPerc'

import userAvatar1 from '../../../../assets/images/userAvatar1.png'

export default ({ id, name, lastname, daily, progress }) => (
  <ActivityRowWrapper key={id}>
    <div>
      <img src={userAvatar1} />
    </div>
    <Half>{name} {lastname}</Half>
    <Half>
      <ProgressBar>
        <Progress progress={progress} />
      </ProgressBar>
    </Half>
    <ProgressPerc>
      {Math.round(progress)}%
    </ProgressPerc>
  </ActivityRowWrapper>
)
