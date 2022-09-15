import { createApiRef, DiscoveryApi } from '@backstage/core-plugin-api';
import { Entity } from '@backstage/catalog-model';

export const ChangelogApiRef = createApiRef<ChangelogApi>({
	id: 'plugin.changelog.service',
});

export type ChangelogApi = {    
    discoveryApi: DiscoveryApi;
    getChangelogContents(entity: Entity): Promise<string | undefined>;
};