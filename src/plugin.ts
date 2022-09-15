
import {  createComponentExtension, createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';
import {
  configApiRef,
  createApiFactory,
  createRouteRef,
  discoveryApiRef,
} from '@backstage/core-plugin-api';
import { ChangelogApiRef, ChangelogClient } from './api';
import React from 'react';
import { getSourceType } from './api/annotations';
import { useEntity } from '@backstage/plugin-catalog-react';

export const rootRouteRef = createRouteRef({
  id: 'Changelog',
});

export const changelogPlugin = createPlugin({
  id: 'Changelog',
  apis: [
    createApiFactory({
      api: ChangelogApiRef, 
      deps: { configApi: configApiRef, discoveryApi: discoveryApiRef },
      factory: ({ discoveryApi }) =>(        
        new ChangelogClient(getSourceType(useEntity()), discoveryApi)
      )
    })
  ],
});
