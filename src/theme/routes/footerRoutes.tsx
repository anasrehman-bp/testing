import React from 'react';
import { layoutMenu } from '../menu';
import DefaultFooter from '../pages/_layout/_footers/DefaultFooter';

const footers = [
	// { path: layoutMenu.blank.path, element: null, exact: true },
	// { path: demoPages.login.path, element: null, exact: true },
	// { path: demoPages.signUp.path, element: null, exact: true },
	// { path: demoPages.page404.path, element: null, exact: true },
	{ path: '*', element: <DefaultFooter /> },
];

export default footers;
