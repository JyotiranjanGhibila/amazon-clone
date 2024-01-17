import React, { memo } from 'react'

import { Carousel } from 'react-responsive-carousel';
const MiniTV = () => {
  return (
    <Carousel autoPlay>
        <div>
            <img src="https://m.media-amazon.com/images/S/sonata-images-prod/ATV_IN_Desktop_hunter_new/2f1cf8d0-74c1-4ec4-a3f9-a4068553c3ef.__SX2090.00004529953__SY418.000009059906__QL60__._TTH_.jpeg" alt="x" />
        </div>
        <div>
            <img src="https://m.media-amazon.com/images/S/sonata-images-prod/ATV_IN_Desktop_TrustIssue_v3/f575c591-3237-451e-8325-708be3e669b2.__SX2090.00004529953__SY418.000009059906__QL60__._TTH_.jpeg" alt="x" />
        </div>
        <div>
            <img src="https://m.media-amazon.com/images/S/sonata-images-prod/ATV_IN_Desktop_GuturGu_v2/10b8912e-c105-488a-9ad2-6deca76f3929.__SX2090.00004529953__SY418.000009059906__QL60__._TTH_.jpeg" alt="x" />
        </div>
        <div>
            <img src="https://m.media-amazon.com/images/S/sonata-images-prod/ATV_IN_Desktop_Haunting/4659f7d0-c260-47a4-b666-14142f10f989.__SX2090.00004529953__SY418.000009059906__QL60__._TTH_.jpeg" alt="x" />
        </div>
    </Carousel>
  )
}

export default memo(MiniTV)