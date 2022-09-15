import { Entity } from '@backstage/catalog-model';

export const CHANGELOG_SOURCETYPE_ANNOTATION = 'changelog/source';
export const CHANGELOG_DIRECTLINK_ANNOTATION = 'changelog/directlink';

export const getSourceType = ({entity}: {entity: Entity}) => {
    const sourceType = entity?.metadata.annotations?.[CHANGELOG_SOURCETYPE_ANNOTATION] ?? '';
    return sourceType ?? '';
}

export const getDirectLink = (entity: Entity) => {
    if(entity?.metadata.annotations?.[CHANGELOG_SOURCETYPE_ANNOTATION] === 'direct'){        
        return entity?.metadata.annotations?.[CHANGELOG_DIRECTLINK_ANNOTATION] ?? '';
    }
    return '';
}