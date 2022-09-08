import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { changelogPlugin, ChangelogPage } from '../src/plugin';

createDevApp()
  .registerPlugin(changelogPlugin)
  .addPage({
    element: <ChangelogPage />,
    title: 'Root Page',
    path: '/changelog'
  })
  .render();
