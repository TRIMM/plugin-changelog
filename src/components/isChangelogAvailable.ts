import { Entity } from '@backstage/catalog-model';
import { CHANGELOG_DIRECTLINK_ANNOTATION, CHANGELOG_SOURCETYPE_ANNOTATION } from './hooks';
export const isChangelogAvailable = (entity: Entity) => {
    const sourceType = entity.metadata.annotations?.[CHANGELOG_SOURCETYPE_ANNOTATION];

    if(Boolean(sourceType)){
        switch(sourceType){
            case 'direct':
                if(entity.metadata.annotations?.[CHANGELOG_DIRECTLINK_ANNOTATION]){
                    return true;
                }
                return false;
            default:
                return false;                
        }
    }
    return false;
}