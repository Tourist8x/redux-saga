import React from 'react';

const userList = React.lazy(() =>
  import("./web/user/Index").then((module) => ({
    default: module.List,
  }))
);
const dashboard = React.lazy(() =>
  import("./web/dashboard/index").then((module) => ({
    default: module.Dashboard,
  }))
);
const lyric = React.lazy(() =>
  import("./web/search/SearchContainer").then((module) => ({
    default: module.default,
  }))
);
export const routes = [
  { path: '/dashboard', exact: true, name: 'Dashboard', component: dashboard },
  { path: '/users', exact: true, name: 'List', component: userList },
  { path: '/lyric', exact: true, name: 'Lyric', component: lyric },
];