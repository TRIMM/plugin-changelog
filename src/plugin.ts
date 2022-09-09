
import {  createComponentExtension, createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';
import {
  configApiRef,
  createApiFactory,
  createRouteRef,
  discoveryApiRef,
} from '@backstage/core-plugin-api';
import { ChangelogApiRef, ChangelogStubClient } from './api';

export const rootRouteRef = createRouteRef({
  id: 'Changelog',
});

export const changelogPlugin = createPlugin({
  id: 'Changelog',
  apis: [
    createApiFactory({
      api: ChangelogApiRef,
      deps: { configApi: configApiRef, discoveryApi: discoveryApiRef },
      factory: ({ discoveryApi }) => 
        new ChangelogStubClient({
          discoveryApi
        })              
    }),
  ],
});

export const EntityChangelogCard = changelogPlugin.provide(
  createComponentExtension({
    name: 'EntityChangelogCard',
    component: {
      lazy: () => 
        import('./components/widgets/index').then((m)=> m.MarkdownCard)
    }
  })
);