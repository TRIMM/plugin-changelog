import React from 'react';
import { useAsync } from 'react-use';
import { useApi } from '@backstage/core-plugin-api';
import ReactMarkdown from 'react-markdown';
import { ChangelogApiRef } from '../../api';
import { Progress, InfoCard } from '@backstage/core-components';
import { Alert } from '@material-ui/lab';
import remarkGfm from 'remark-gfm';

export const MarkdownCard = ({}) => {
    const changelogApi = useApi(ChangelogApiRef);

    const { value, loading, error} = useAsync(async (): Promise<string | undefined> => {
        let content = await changelogApi.getChangelogContents();
        return content;        
    }, []);

    if(loading){
        return <Progress />;
    } else if (error) {
        return <Alert severity='error'>{error.message}</Alert>;
    }

    if(!value){
        return <Alert severity='error'>No data</Alert>;
    } else {
        return <InfoCard title='Changelog'>
            <ReactMarkdown 
                children={value} 
                remarkPlugins={[remarkGfm]}                 
                components={{ 
                    a: ({node, ...props}) => <a style={{color: '#9CC9FF'}} {...props} />,
                }}
            >
            </ReactMarkdown></InfoCard>
    }    
}