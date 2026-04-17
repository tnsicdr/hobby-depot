/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router';
import { Dashboard } from '../screens/Dashboard/Dashboard';

function RouteComponent() {
  return <Dashboard />;
}

export const Route = createFileRoute('/')({
  component: RouteComponent,
});
