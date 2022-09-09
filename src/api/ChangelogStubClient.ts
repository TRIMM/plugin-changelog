import { DiscoveryApi } from '@backstage/core-plugin-api';
import { ChangelogApi } from './ChangelogApi';

export class ChangelogStubClient implements ChangelogApi {

    discoveryApi: DiscoveryApi;

    constructor({ discoveryApi }: { discoveryApi: DiscoveryApi;}) {
        this.discoveryApi = discoveryApi;
    }

    async getChangelogContents(): Promise<string | undefined> {
        const file = require('../../test.md');
        let test_markdown = await fetch(file).then((r)=>r.text());
        return test_markdown;
    }
    
}