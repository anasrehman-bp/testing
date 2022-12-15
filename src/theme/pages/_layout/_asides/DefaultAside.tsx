import React, { ReactNode, useContext, useState } from "react";
import { useTranslation } from 'react-i18next';
import Brand from '../../../layout/Brand/Brand';
import Navigation, { NavigationLine } from '../../../layout/Navigation/Navigation';
import User from '../../../layout/User/User';
import { dashboardMenu, layoutMenu, management, managementMenu } from '../../../menu';
import ThemeContext from '../../../contexts/themeContext';
import { menuOptions, analyticsOptions } from "../../../menu";

import Aside, {
	AsideBody,
	AsideFoot,
	AsideHead
} from "../../../layout/Aside/Aside";

const DefaultAside = () => {
	const { asideStatus, setAsideStatus } = useContext(ThemeContext);

	const [doc, setDoc] = useState(false);

	const { t } = useTranslation(["translation", "menu"]);

	return (
		<Aside>
			<AsideHead>
				<Brand asideStatus={asideStatus} setAsideStatus={setAsideStatus} />
			</AsideHead>
			<AsideBody>
				{/* <Navigation menu={dashboardMenu} id='aside-dashboard' />
				<NavigationLine /> */}
				<>
					<Navigation menu={menuOptions} id="aside-demo-pages" />
					<NavigationLine />
					<Navigation menu={analyticsOptions} id="aside-menu" />
					<Navigation menu={managementMenu} id="aside-management" />
					<Navigation menu={management} id="aside-management" />
					{/* <NavigationLine />
						<nav>
							<div className='navigation'>
								<div className='navigation-item'>
									<span className='navigation-link navigation-link-pill'>
										<span className='navigation-link-info'>
											<span className='navigation-text'>
												<Popovers
													title='Aside.tsx'
													desc={<code>src/pages/_layout/_asides/DefaultAside.tsx</code>}>
													Aside
												</Popovers>
												<code className='ps-3'>Aside.tsx</code>
											</span>
										</span>
									</span>
								</div>
							</div>
						</nav> */}
				</>
			</AsideBody>
			<AsideFoot>
				<nav>
					<div className="navigation">
						<div className="navigation-item">
							<span className="navigation-link navigation-link-pill">
								<span className="navigation-link-info">
									<span className="navigation-text">
										<code className="ps-3">Aside.tsx</code>
									</span>
								</span>
							</span>
						</div>
					</div>
				</nav>
				{/* <nav aria-label='aside-bottom-menu'>
					<div className='navigation'>
						<div
							role='presentation'
							className='navigation-item cursor-pointer'
							onClick={() => {
								setDoc(!doc);
							}}
							data-tour='documentation'>
							<span className='navigation-link navigation-link-pill'>
								<span className='navigation-link-info'>
									<Icon
										icon={doc ? 'ToggleOn' : 'ToggleOff'}
										color={doc ? 'success' : undefined}
										className='navigation-icon'
									/>
									<span className='navigation-text'>{t('menu:Documentation') as ReactNode}</span>
								</span>
								<span className='navigation-link-extra'>
									<Icon
										icon='Circle'
										className={classNames(
											'navigation-notification',
											'text-success',
											'animate__animated animate__heartBeat animate__infinite animate__slower',
										)}
									/>
								</span>
							</span>
						</div>
					</div>
				</nav> */}
				<User />
			</AsideFoot>
		</Aside>
	);
};

export default DefaultAside;
