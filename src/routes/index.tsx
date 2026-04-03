/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router';

function RouteComponent() {
  return <div>Hello "/"!</div>;
}

export const Route = createFileRoute('/')({
  component: RouteComponent,
});
