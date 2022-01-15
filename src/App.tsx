import { CategoryNavigationBar, Header, TopCarousel } from 'components/index';
import React from 'react';

import { css, jsx } from '@emotion/react';

export function App() {
  return (
    <div className="container">
      <Header />
      <CategoryNavigationBar />
      {/* <TopCarousel /> */}
      <div style={{ backgroundColor: 'grey', width: '100%', height: '445px' }}></div>
    </div>
  );
}
