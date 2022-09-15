import { changelogPlugin, rootRouteRef } from "./plugin";
import {
    createComponentExtension, createRoutableExtension,  
  } from '@backstage/core-plugin-api';
import { useEntity } from '@backstage/plugin-catalog-react';
import React from 'react';

export const EntityChangelogCard = changelogPlugin.provide(
    createComponentExtension({
        name: 'EntityChangelogCard',
        component: {
            lazy: () => 
                import('./components/ChangelogCard').then(
                    ({ ChangelogCard }) => {
                        const Changelog = () =>{
                            const { entity } = useEntity();
                            return (
                                <ChangelogCard entity={entity}></ChangelogCard>
                            );
                        };
                        return Changelog;
                    }
                )
        }
    })
)

export const EntityChangelogContent = changelogPlugin.provide(
    createRoutableExtension({
        name: 'EntityChangelogContent',
        mountPoint: rootRouteRef,
        component: ()=>
        import('./components/ChangelogCard').then(
            ({ ChangelogCard }) => {
                const ChangelogPage = () => {
                    const { entity } = useEntity();
                    return (
                        <ChangelogCard entity={entity}/>
                    );
                };
                return ChangelogPage;
            }
        )
    })
)