import { Entity } from '@backstage/catalog-model';
import { useApi, ErrorApi, errorApiRef } from '@backstage/core-plugin-api';
import useAsync from 'react-use/lib/useAsync';
import React, { useEffect } from 'react';
import ChangelogContentCard from '../ChangelogContentCard/ChangelogContentCard';
import { InfoCard, Progress } from '@backstage/core-components';
import { Alert } from '@material-ui/lab';
import { ChangelogApiRef } from '../../api';

export const ChangelogCard = ({
    entity
}: {entity: Entity}) => {
    const changelogApi = useApi(ChangelogApiRef);
    const errorApi = useApi<ErrorApi>(errorApiRef);

    const { loading, value, error} = useAsync(
        () => { return changelogApi.getChangelogContents(entity); },
        [],
    );

    useEffect(() => {
        if(error){
            errorApi.post(error);            
        }
    }, [error, errorApi]);

    if(loading || error){
        return(
            <InfoCard title="Changelog">
            {loading && <Progress />}            
            </InfoCard>
        );
    }

    return (
        <InfoCard title='Changelog' variant='gridItem'>            
            <ChangelogContentCard content={value}/>
        </InfoCard>
    );
}