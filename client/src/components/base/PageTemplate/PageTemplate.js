// @flow
import React from 'react';

const PageTemplate = ({ header, children }) => {
  return (
    <div className="PageTemplate">
      {header}
      <main>{children}</main>
    </div>
  );
};

export default PageTemplate;