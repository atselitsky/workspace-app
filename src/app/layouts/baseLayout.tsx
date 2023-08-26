import React from 'react';
import { Sidebar } from 'widgets/sidebar';
import { Outlet, ScrollRestoration } from 'react-router-dom';

export default function BaseLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}
