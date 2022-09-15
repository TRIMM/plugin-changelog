import { DiscoveryApi } from '@backstage/core-plugin-api';
import { getDirectLink } from './annotations';
import { ChangelogApi } from './ChangelogApi';
import { useEntity } from '@backstage/plugin-catalog-react';
import { Entity } from '@backstage/catalog-model';

export class ChangelogHardlinkClient implements ChangelogApi {

    discoveryApi: DiscoveryApi;

    constructor({ discoveryApi }: { discoveryApi: DiscoveryApi;}) {
        this.discoveryApi = discoveryApi;        
    }

    async getChangelogContents(entity: Entity): Promise<string | undefined> {        
       const response = await fetch(getDirectLink(entity));
       if(response.status >= 400 && response.status < 600){
        throw new Error('Lukt niet');
       }     

       return (await response.text()) as string;
    }
    
}