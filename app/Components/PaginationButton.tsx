import {Pagination} from '@shopify/polaris';
import React from 'react';

function PaginationExample() {
  return (
    <Pagination
      hasPrevious
      onPrevious={() => {
        console.log('Previous');
      }}
      hasNext
      onNext={() => {
        console.log('Next');
      }}
    />
  );
}

export default PaginationExample