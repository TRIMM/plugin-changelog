import { createApiRef, DiscoveryApi } from '@backstage/core-plugin-api';

export const ChangelogApiRef = createApiRef<ChangelogApi>({
	id: 'plugin.changelog.service',
});

export type ChangelogApi = {    
    discoveryApi: DiscoveryApi;
    getChangelogContents(): Promise<string | undefined>;
};