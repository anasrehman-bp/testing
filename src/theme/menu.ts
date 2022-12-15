import WearHouse from '../theme/assets/img/portalTable/warehouse-white.png';
import Zones from '../theme/assets/img/portalTable/zone-white.png';
import Brands from '../theme/assets/img/portalTable/brand-white.png';
import Retailers from '../theme/assets/img/portalTable/retailers-white.png';
import BarCode from '../theme/assets/img/portalTable/barcode_white.png';
import UserManagement from '../theme/assets/img/portalTable/carbon_id-management_white.png';
import HandCart from '../theme/assets/img/portalTable/handcart-white.png';
import Products from '../theme/assets/img/portalTable/products white.png';
import QrCode from '../theme/assets/img/portalTable/qrscan.png';
import Management from '../theme/assets/img/portalTable/management.png'

export const homeMenu = {
	intro: { id: 'intro', text: 'Intro', path: '#intro', icon: 'Vrpano', subMenu: null },
	bootstrap: {
		id: 'bootstrap',
		text: 'Bootstrap Components',
		path: '#bootstrap',
		icon: 'BootstrapFill',
		subMenu: null,
	},
	storybook: {
		id: 'storybook',
		text: 'Storybook',
		path: '#storybook',
		icon: 'CustomStorybook',
		subMenu: null,
	},
	formik: {
		id: 'formik',
		text: 'Formik',
		path: '#formik',
		icon: 'CheckBox',
		subMenu: null,
	},
	apex: {
		id: 'apex',
		text: 'Apex Charts',
		path: '#apex',
		icon: 'AreaChart',
		subMenu: null,
	},
};

export const dashboardMenu = {
	dashboard: {
		id: 'dashboard',
		text: 'Dashboard',
		path: '/',
		icon: 'Dashboard',
		subMenu: null,
	},
};

// export const demoPages = {
// 	auth: {
// 		id: 'auth',
// 		text: 'Auth Pages',
// 		icon: 'Extension',
// 	},
// 	login: {
// 		id: 'login',
// 		text: 'Login',
// 		path: 'auth-pages/login',
// 		icon: 'Login',
// 	},
// 	signUp: {
// 		id: 'signUp',
// 		text: 'Sign Up',
// 		path: 'auth-pages/sign-up',
// 		icon: 'PersonAdd',
// 	},

// 	page404: {
// 		id: 'Page404',
// 		text: '404 Page',
// 		path: 'auth-pages/404',
// 		icon: 'ReportGmailerrorred',
// 	},
// };
// import Image from '../theme/assets/img/portalTable/warehouse.png'

export const menuOptions = {
	warehouses: {
		id: 'warehouses',
		text: 'Warehouses',
		path: 'warehouses',
		icon: 'check_box_outline_blank ',
		src: WearHouse,
	},
	zones: {
		id: 'zones',
		text: 'Zones',
		path: 'zones',
		icon: 'check_box_outline_blank ',
		src: Zones,
	},
	brands: {
		id: 'brands',
		text: 'Brands',
		path: 'brands',
		icon: 'check_box_outline_blank ',
		src: Brands,
	},
	retailers: {
		id: 'retailers',
		text: 'Retailers',
		path: 'retailers',
		icon: 'check_box_outline_blank ',
		src: Retailers,
	},
	products: {
		id: 'products',
		text: 'Products',
		path: 'products',
		icon: 'check_box_outline_blank ',
		src: Products,
	},
	transfers: {
		id: 'transfers',
		text: 'Transfers',
		path: 'transfers',
		icon: 'check_box_outline_blank',
		src: HandCart,
	},
	barcodes: {
		id: 'barcodes',
		text: 'Barcodes',
		path: 'codes',
		icon: 'check_box_outline_blank ',
		src: BarCode,
	},
};

export const layoutMenu = {
	// layoutTypes: {
	// 	id: 'layoutTypes',
	// 	text: 'Page Layout Types',
	// },
	// blank: {
	// 	id: 'blank',
	// 	text: 'Blank',
	// 	path: 'page-layouts/blank',
	// 	icon: 'check_box_outline_blank ',
	// },
	wearHouse: {
		id: 'wearHouse',
		text: 'Wear House',
		path: 'warehouses',
		icon: 'check_box_outline_blank',
		src: WearHouse,
	},
	zones: {
		id: 'zones',
		text: 'Zones',
		path: 'zones',
		icon: 'check_box_outline_blank',
		src: Zones,

		// src: '../theme/assets/img/portalTable/warehouse.png',
	},
	brands: {
		id: 'brands',
		text: 'Brands',
		path: 'brands',
		icon: 'check_box_outline_blank',
		src: Brands,
	},
	retailer: {
		id: 'retailer',
		text: 'Retailer',
		path: 'retailers',
		icon: 'check_box_outline_blank',
		src: Retailers,
	},
	barCode: {
		id: 'barCode',
		text: 'Bar Code',
		path: 'codes',
		icon: 'check_box_outline_blank',
		src: BarCode,

	},

	qrScan: {
		id: 'qrCode',
		text:'QR Code',
		path: 'qrCode/QRCode',
		icon: 'check_box_outline_blank ',
		src: QrCode,

	},
	// pageLayout: {
	// 	id: 'pageLayout',
	// 	text: 'Page Layout',
	// 	path: 'page-layouts',
	// 	icon: 'BackupTable',
	// 	subMenu: {
	// 		headerAndSubheader: {
	// 			id: 'headerAndSubheader',
	// 			text: 'Header & Subheader',
	// 			path: 'page-layouts/header-and-subheader',
	// 			icon: 'ViewAgenda',
	// 		},
	// 		onlyHeader: {
	// 			id: 'onlyHeader',
	// 			text: 'Only Header',
	// 			path: 'page-layouts/only-header',
	// 			icon: 'ViewStream',
	// 		},
	// 		onlySubheader: {
	// 			id: 'onlySubheader',
	// 			text: 'Only Subheader',
	// 			path: 'page-layouts/only-subheader',
	// 			icon: 'ViewStream',
	// 		},
	// 		onlyContent: {
	// 			id: 'onlyContent',
	// 			text: 'Only Content',
	// 			path: 'page-layouts/only-content',
	// 			icon: 'WebAsset',
	// 		},
	// 	},
	// },
	// listPages: {
	// 	id: 'listPages',
	// 	text: 'List Pages',
	// 	path: 'list-page',
	// 	icon: 'BackupTable',
	// 	subMenu: {
	// 		boxedList: {
	// 			id: 'boxedList',
	// 			text: 'Boxed List',
	// 			path: 'list-page/boxed-list',
	// 			icon: 'ViewAgenda',
	// 		},
	// 	},
	// },
	// asideTypes: {
	// 	id: 'asideTypes',
	// 	text: 'Aside Types',
	// 	path: 'aside-types',
	// 	icon: 'Vertical Split',
	// 	subMenu: {
	// 		defaultAside: {
	// 			id: 'defaultAside',
	// 			text: 'Default Aside',
	// 			path: 'aside-types/default-aside',
	// 			icon: 'ViewQuilt',
	// 		},
	// 		minimizeAside: {
	// 			id: 'minimizeAside',
	// 			text: 'Minimize Aside',
	// 			path: 'aside-types/minimize-aside',
	// 			icon: 'View Compact',
	// 		},
	// 	},
	// },
};

export const settingMenu = {
	settings: {
		id: 'settings',
		text: 'Settings',
		path: 'settings',
		icon: 'BackupTable',
		subMenu: {
			users: {
				id: 'users',
				text: 'Users',
				path: 'settings/users',
				icon: 'ViewAgenda',
			},
			invitations: {
				id: 'invitations',
				text: 'Invitations',
				path: 'settings/invitations',
				icon: 'ViewStream',
			},
		},
	},
};

export const analyticsOptions = {
	analytics: {
		id: 'analytics',
		text: 'Analytics',
		path: 'page-layouts',
		icon: 'BackupTable',
		subMenu: {
			headerAndSubheader: {
				id: 'headerAndSubheader',
				text: 'Header & Subheader',
				path: 'page-layouts/header-and-subheader',
				icon: 'ViewAgenda',
			},
			onlyHeader: {
				id: 'onlyHeader',
				text: 'Only Header',
				path: 'page-layouts/only-header',
				icon: 'ViewStream',
			},
			onlySubheader: {
				id: 'onlySubheader',
				text: 'Only Subheader',
				path: 'page-layouts/only-subheader',
				icon: 'ViewStream',
			},
			onlyContent: {
				id: 'onlyContent',
				text: 'Only Content',
				path: 'page-layouts/only-content',
				icon: 'WebAsset',
			},
		},
	},
};

export const zone = {
	addZone: {
		id: 'addZone',
		text: 'Add Zone',
		path: 'zones/addZone',
	},
	editZone: {
		id: 'editZone',
		text: 'Edit Zone',
		path: 'zones/editZone',
	},
};

export const managementMenu = {
	userManagement: {
		id: 'userManagement',
		text: 'User Management',
		path: 'user-management/UserManagement',
		src: UserManagement,
	},
};

export const management = {
	processManagement: {
	id: 'management',
	text: 'management',
	path: 'management',
	icon: 'check_box_outline_blank',
	src: Management,
	},
};


export const productsMenu = {
	companyA: { id: 'companyA', text: 'Company A', path: 'grid-pages/products', subMenu: null },
	companyB: { id: 'companyB', text: 'Company B', path: '/', subMenu: null },
	companyC: { id: 'companyC', text: 'Company C', path: '/', subMenu: null },
	companyD: { id: 'companyD', text: 'Company D', path: '/', subMenu: null },
};
