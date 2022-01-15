import { CategoryNavigationBar, Header } from 'components/index';
import React from 'react';

import { css } from '@emotion/react';

export function App() {
  return (
    <div className="container">
      <Header />
      <CategoryNavigationBar />
    </div>
  );
}
