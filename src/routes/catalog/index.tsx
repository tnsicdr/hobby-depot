/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router';
import { Fragment } from 'react/jsx-runtime';
import { Catalog } from '../../screens/Catalog/Catalog';

function RouteComponent() {
  return (
    <Fragment>
      <Catalog />
    </Fragment>
  );
}

export const Route = createFileRoute('/catalog/')({
  component: RouteComponent,
});
