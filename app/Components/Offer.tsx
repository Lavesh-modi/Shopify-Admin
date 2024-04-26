import React from 'react'
import ButtonExample from './AddButton'
import EmptyStateExample from './EmptyState'

function OfferCard() {
  return (
    <div>
        <div style={{marginLeft:"3px"}}>
<div style={{display:'flex',justifyContent:'space-between',margin:"2px"}}>
    <h2 style={{fontWeight:"bold",fontSize:"23px"}}>Create new offer</h2>
    <ButtonExample></ButtonExample>

</div>
    <p>Edit your Announcement bars, pick colors, edit message etc</p>
    </div>
<div style={{marginTop:'20px'}}><EmptyStateExample></EmptyStateExample></div>

    </div>
  )
}

export default OfferCard