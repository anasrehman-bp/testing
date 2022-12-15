import React, { lazy } from 'react';
import { dashboardMenu, layoutMenu, zone, managementMenu, settingMenu, management } from '../menu';
// import Login from '../pages/presentation/auth/Login';

const LANDING = {
	DASHBOARD: lazy(() => import('../pages/dashboard/DashboardPage')),
};
// const AUTH = {
// 	PAGE_404: lazy(() => import('../pages/presentation/auth/Page404')),
// };
const PAGE_LAYOUTS = {
	// HEADER_SUBHEADER: lazy(() => import('../pages/presentation/page-layouts/HeaderAndSubheader')),
	// HEADER: lazy(() => import('../pages/presentation/page-layouts/OnlyHeader')),
	// SUBHEADER: lazy(() => import('../pages/presentation/page-layouts/OnlySubheader')),
	// CONTENT: lazy(() => import('../pages/presentation/page-layouts/OnlyContent')),
	INVITATIONS: lazy(() => import('../pages/presentation/invitations/Invitations')),
	WEAR_HOUSE: lazy(() => import('../pages/presentation/wear-house/WearHouse')),
	ZONES: lazy(() => import('../pages/presentation/zones/Zones')),
	ADD_ZONE: lazy(() => import('../pages/presentation/zones/AddZone')),
	EDIT_ZONE: lazy(() => import('../pages/presentation/zones/EditZone')),
	BRANDS: lazy(() => import('../pages/presentation/brands/Brands')),
	RETAILER: lazy(() => import('../pages/presentation/retailer/Retailer')),
	BARCODE: lazy(() => import('../pages/presentation/barCode/BarCode')),
	QRCODE: lazy(() => import('../pages/presentation/qrCode/QrCode')),
	// LIST: lazy(() => import('../pages/presentation/list-pages/BoxedList')),
	// ASIDE: lazy(() => import('../pages/presentation/aside-types/DefaultAsidePage')),
	// MINIMIZE_ASIDE: lazy(() => import('../pages/presentation/aside-types/MinimizeAsidePage')),
};

const MANAGEMENT_LAYOUTS = {
	USER_MANAGEMENT: lazy(() => import('../pages/presentation/userManagement/UserManagement')),
};

const PROCESS_LAYOUTS = {
	MANAGEMENT: lazy(() => import('../pages/presentation/process-managment/processManagment')),
}

const presentation = [
	/**
	 * Landing
	 */
	{
		path: dashboardMenu.dashboard.path,
		element: <LANDING.DASHBOARD />,
		exact: true,
	},
	// {
	// 	path: demoPages.page404.path,
	// 	element: <AUTH.PAGE_404 />,
	// 	exact: true,
	// },
	// {
	// 	path: demoPages.login.path,
	// 	element: <Login />,
	// 	exact: true,
	// },
	// {
	// 	path: demoPages.signUp.path,
	// 	element: <Login isSignUp />,
	// 	exact: true,
	// },

	/** ************************************************** */

	/**
	 * Page Layout Types
	 */
	{
		path: settingMenu.settings.subMenu.invitations.path,
		element: <PAGE_LAYOUTS.INVITATIONS />,
		exact: true,
	},
	{
		path: layoutMenu.wearHouse.path,
		element: <PAGE_LAYOUTS.WEAR_HOUSE />,
		exact: true,
	},
	{
		path: layoutMenu.zones.path,
		element: <PAGE_LAYOUTS.ZONES />,
		exact: true,
	},
	{
		path: zone.addZone.path,
		element: <PAGE_LAYOUTS.ADD_ZONE />,
		exact: true,
	},
	{
		path: zone.editZone.path,
		element: <PAGE_LAYOUTS.EDIT_ZONE />,
		exact: true,
	},
	{
		path: layoutMenu.brands.path,
		element: <PAGE_LAYOUTS.BRANDS />,
		exact: true,
	},
	{
		path: layoutMenu.retailer.path,
		element: <PAGE_LAYOUTS.RETAILER />,
		exact: true,
	},
	{
		path: layoutMenu.barCode.path,
		element: <PAGE_LAYOUTS.BARCODE />,
		exact: true,
	},
	{
		path: layoutMenu.qrScan.path,
		element: <PAGE_LAYOUTS.QRCODE />,
		exact: true,
	},

	// {
	// 	path: layoutMenu.qrCode.path,
	// 	element: <PAGE_LAYOUTS.QRCODE />,
	// 	exact: true,
	// },
	// {
	// 	path: layoutMenu.pageLayout.subMenu.headerAndSubheader.path,
	// 	element: <PAGE_LAYOUTS.HEADER_SUBHEADER />,
	// 	exact: true,
	// },
	// {
	// 	path: layoutMenu.pageLayout.subMenu.onlyHeader.path,
	// 	element: <PAGE_LAYOUTS.HEADER />,
	// 	exact: true,
	// },
	// {
	// 	path: layoutMenu.pageLayout.subMenu.onlySubheader.path,
	// 	element: <PAGE_LAYOUTS.SUBHEADER />,
	// 	exact: true,
	// },
	// {
	// 	path: layoutMenu.pageLayout.subMenu.onlyContent.path,
	// 	element: <PAGE_LAYOUTS.CONTENT />,
	// 	exact: true,
	// },
	// {
	// 	path: layoutMenu.listPages.subMenu.boxedList.path,
	// 	element: <PAGE_LAYOUTS.LIST />,
	// 	exact: true,
	// },
	// {
	// 	path: layoutMenu.asideTypes.subMenu.defaultAside.path,
	// 	element: <PAGE_LAYOUTS.ASIDE />,
	// 	exact: true,
	// },
	// {
	// 	path: layoutMenu.asideTypes.subMenu.minimizeAside.path,
	// 	element: <PAGE_LAYOUTS.MINIMIZE_ASIDE />,
	// 	exact: true,
	// },
	// User Management
	{
		path: managementMenu.userManagement.path,
		element: <MANAGEMENT_LAYOUTS.USER_MANAGEMENT />,
		exact: true,
	},
	{
		path: management.processManagement.path,
		element: <PROCESS_LAYOUTS.MANAGEMENT />,
		exact: true,
	},
];
const contents = [...presentation];

export default contents;
