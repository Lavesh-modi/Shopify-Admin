import {  MediaCard, VideoThumbnail} from '@shopify/polaris';
import React from 'react';
import './Video.css'

function VideoThumbnailExample() {
  return (
  
   <div style={{height:"150px"}}>
    <MediaCard
      title="In-Depth Walkthrough of Libautech’s Smart Upsell"
      primaryAction={{
        content: 'Learn more',
        onAction: () => {},
      }}
      description={`Detailed video about Libautech’s powerful post purchase platform and funnel capabilities. Learn about how to setup triggers, create one click upsells, and edit your thank you page to boost your AOV 🚀!`}
      popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
    
    >
      <div style={{height:"100%", objectFit:"contain"}}>
      <VideoThumbnail
        videoLength={141}
        thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?height=140"
        onClick={() => console.log('clicked')}
      />
      </div>
    </MediaCard>
    </div>
  );
}

export default VideoThumbnailExample;