import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import { ThemeProvider } from 'react-jss';
import { ReactNotifications } from 'react-notifications-component';
import { useFullscreen } from 'react-use';
import { ToastProvider } from 'react-toast-notifications';
import { TourProvider } from '@reactour/tour';
import ThemeContext from 'theme/contexts/themeContext';
import Portal from 'theme/layout/Portal/Portal';
import { Toast, ToastContainer } from 'theme/components/bootstrap/Toasts';
import useDarkMode from 'theme/hooks/useDarkMode';
import COLORS from 'theme/common/data/enumColors';
import { getOS } from 'theme/helpers/helpers';
import steps, { styles } from 'theme/steps';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from 'features/AppRoutes';
import Authentication from 'features/Authentication/Authentication';

const App = () => {
  getOS();

  /**
   * Dark Mode
   */
  const { themeStatus, darkModeStatus } = useDarkMode();
  const theme = {
    theme: themeStatus,
    primary: COLORS.PRIMARY.code,
    secondary: COLORS.SECONDARY.code,
    success: COLORS.SUCCESS.code,
    info: COLORS.INFO.code,
    warning: COLORS.WARNING.code,
    danger: COLORS.DANGER.code,
    dark: COLORS.DARK.code,
    light: COLORS.LIGHT.code,
  };
  useEffect(() => {
    if (darkModeStatus) {
      document.documentElement.setAttribute('theme', 'dark');
    }
    return () => {
      document.documentElement.removeAttribute('theme');
    };
  }, [darkModeStatus]);

  /**
   * Full Screen
   */
  // @ts-ignore
  const { fullScreenStatus, setFullScreenStatus } = useContext(ThemeContext);
  const ref = useRef(null);
  useFullscreen(ref, fullScreenStatus, {
    onClose: () => setFullScreenStatus(false),
  });

  /**
   * Modern Design
   */
  useLayoutEffect(() => {
    if (process.env.REACT_APP_MODERN_DESGIN === 'true') {
      document.body.classList.add('modern-design');
    } else {
      document.body.classList.remove('modern-design');
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <ToastProvider components={{ ToastContainer, Toast }}>
        <TourProvider steps={steps} styles={styles} showNavigation={false} showBadge={false}>
          <div
            ref={ref}
            className='app'
            style={{
              backgroundColor: fullScreenStatus ? 'var(--bs-body-bg)' : undefined,
              zIndex: fullScreenStatus ? 1 : undefined,
              overflow: fullScreenStatus ? 'scroll' : undefined,
            }}>
            <Routes>
              <Route path='/app/*' element={<AppRoutes />} />
              <Route path='/*' element={<Authentication />} />
            </Routes>
          </div>
          <Portal id='portal-notification'>
            <ReactNotifications />
          </Portal>
        </TourProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
