import React from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import ResourceLoaderProps from './ResourceLoaderProps';

const ResourceLoader: React.FC<ResourceLoaderProps> = ({
  children,
  loadingMessage,
  isLoading,
}) => {
  if (isLoading) {
    return <>{loadingMessage}</>;
  }

  return <>{children}</>;
};

export default ResourceLoader;
