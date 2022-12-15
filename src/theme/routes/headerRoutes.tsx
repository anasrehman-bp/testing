import React from 'react';
import { dashboardMenu,  layoutMenu } from '../menu';
import DashboardHeader from '../pages/_layout/_headers/DashboardHeader';
import DefaultHeader from '../pages/_layout/_headers/DefaultHeader';

const headers = [
	// { path: layoutMenu.pageLayout.subMenu.onlySubheader.path, element: null, exact: true },
	// { path: layoutMenu.pageLayout.subMenu.onlyContent.path, element: null, exact: true },
	// { path: layoutMenu.blank.path, element: null, exact: true },
	// { path: demoPages.login.path, element: null, exact: true },
	// { path: demoPages.signUp.path, element: null, exact: true },
	// { path: demoPages.page404.path, element: null, exact: true },
	{ path: dashboardMenu.dashboard.path, element: <DashboardHeader />, exact: true },
	{
		path: `*`,
		element: <DefaultHeader />,
	},
];

export default headers;
