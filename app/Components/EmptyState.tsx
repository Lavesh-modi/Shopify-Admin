import {LegacyCard, EmptyState} from '@shopify/polaris';
import React from 'react';

function EmptyStateExample() {
  return (
    <LegacyCard sectioned>
      <EmptyState
        heading="Add an offer to get started"
        action={{content: '+ Add transfer'}}
        // secondaryAction={{
        //   content: 'Learn more',
        //   url: 'https://help.shopify.com',
        // }}
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      >
        <p>An offer associates upsell & cross sell products to trigger products..</p>
      </EmptyState>
    </LegacyCard>
  );
}

export default EmptyStateExample;