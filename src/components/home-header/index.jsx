import { Affix } from 'antd';
import React from 'react'
import './index.css'
function HomeHeader() {
  return (
    <Affix>
    <div className='homeHeader'>
      <div className='homeHeaderNav'>
        <h2>HomeHeader Demo</h2>
      </div>
    </div>
    </Affix>
  )
}
export default HomeHeader;