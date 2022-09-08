import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const changelogPlugin = createPlugin({
  id: 'changelog',
  routes: {
    root: rootRouteRef,
  },
});

export const ChangelogPage = changelogPlugin.provide(
  createRoutableExtension({
    name: 'ChangelogPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
