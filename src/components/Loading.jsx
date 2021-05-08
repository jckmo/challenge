import React from 'react'
import Skeleton from '@yisheng90/react-loading';

class Loading extends React.Component {
  render() {
    return (
      <div>
        <Skeleton rows={75}/>
      </div>
    )
  }
}

export default Loading
