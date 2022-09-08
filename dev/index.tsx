import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { changelogPlugin } from '../src/plugin';

createDevApp()
  .registerPlugin(changelogPlugin)
  .render();
