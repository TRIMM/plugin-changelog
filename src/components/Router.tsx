import React from 'react';
import { Entity } from '@backstage/catalog-model';
import { Route, Routes } from 'react-router';
import { ChangelogCard } from './ChangelogCard';

export const Router = ({ entity }: { entity: Entity }) => {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <ChangelogCard
              entity={entity}              
            />
          }
        />        
      </Routes>
    );
  };