import { InfoCard } from '@backstage/core-components';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ChangelogContentCard = ({
    content
}: {content: string | undefined}) => {
    if(!content){
        throw new Error('No content to render');
    }

    return(
        
            <ReactMarkdown 
                children={content} 
                remarkPlugins={[remarkGfm]}                 
                components={{ 
                    a: ({node, ...props}) => <a style={{color: '#9CC9FF'}} {...props} />,
                }}
            />
        
    )
}

export default ChangelogContentCard;