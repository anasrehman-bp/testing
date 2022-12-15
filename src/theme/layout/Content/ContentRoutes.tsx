import Dashboard from 'features/Dashboard/Dashboard';
import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import contents from '../../routes/contentRoutes';

const PAGE_404 = lazy(() => import('features/Errors/Page404'));

const ContentRoutes = () => {
	return (
		<Routes>
			{contents.map((page) => (
				// eslint-disable-next-line react/jsx-props-no-spreading
				<Route key={page.path} {...page} />
			))}
			<Route path='/' element={<Dashboard />} />
			{/* {session &&
          session.permissions &&
          session.permissions[PermissionTypes.SOMEPERMISSIOn] &&
          session.permissions[PermissionTypes.SOMEPERMISSIOn].read && (
            <Route path="/path-to-page" element={<FeatureComponent />} />
          )} */}
			<Route path='*' element={<PAGE_404 />} />
		</Routes>
	);
};

export default ContentRoutes;
