import { DiscoveryApi } from "@backstage/core-plugin-api";
import { ChangelogApi } from "./ChangelogApi";
import { ChangelogHardlinkClient } from "./ChangelogDirectLinkClient";
import { ChangelogStubClient } from "./ChangelogStubClient";
import { Entity } from '@backstage/catalog-model';

export class ChangelogClient implements ChangelogApi{

    changelogApi: ChangelogApi;
    discoveryApi: DiscoveryApi;

    constructor(type: string, discoveryApi: DiscoveryApi){
        this.discoveryApi = discoveryApi;        
        switch(type){            
            case 'stub':
                this.changelogApi = new ChangelogStubClient({discoveryApi});
                break;
            case 'direct':
                this.changelogApi = new ChangelogHardlinkClient({discoveryApi});
                break;
            default:
                this.changelogApi = new ChangelogStubClient({discoveryApi});
                break;
        }        
    }
    
    getChangelogContents(entity: Entity): Promise<string | undefined> {        
        return this.changelogApi.getChangelogContents(entity);
    }
}