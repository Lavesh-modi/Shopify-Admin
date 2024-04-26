import {Banner} from '@shopify/polaris';
import React from 'react';

function BannerExample() {
  return (
    <Banner
      title="Action needed"
      tone="critical"
      action={{content: 'Enable setting', url: ''}}
      secondaryAction={{content: 'Refresh', url: ''}}
      onDismiss={() => {}}
    >
        <div>  <p style={{fontSize:'20px',fontWeight:'bold'}}>
        Enable "Libautech: Smart Upsell" in your Theme Editor
      </p>
      <p>Product & Cart page widgets will only work when "Libautech: Smart Upsell" app embed is enabled in your theme. This is Shopify's recommended way to use the app.</p>
      </div>
    
    </Banner>
  );
}


export default BannerExample;