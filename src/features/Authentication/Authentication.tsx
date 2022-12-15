import React from 'react';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { Link, Routes, Route } from 'react-router-dom';
import classNames from 'classnames';
import PageWrapper from 'theme/layout/PageWrapper/PageWrapper';
import Page from 'theme/layout/Page/Page';
import Card, { CardBody } from 'theme/components/bootstrap/Card';
import Logo from 'theme/assets/img/LogoYellow.png';
import useDarkMode from 'theme/hooks/useDarkMode';
import { SnackBar } from 'components';

const Authentication: React.FC = () => {
  const { darkModeStatus } = useDarkMode();
  return (
    <PageWrapper isProtected={false} title={'Login'} className="bg-warning">
      <Page className="p-0">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-8 shadow-3d-container">
            <Card className="shadow-3d-dark" data-tour="login-page">
              <CardBody>
                <div className="text-center my-5">
                  <Link
                    to="/"
                    className={classNames('text-decoration-none  fw-bold display-2', {
                      'text-dark': !darkModeStatus,
                      'text-light': darkModeStatus
                    })}
                  >
                    <img src={Logo} alt="Leafgistics" width={80} />
                  </Link>
                </div>

                <div className="text-center h1 fw-bold mt-5">Welcome</div>
                <div className="text-center h4 text-muted mb-5">Sign in to continue!</div>
                <SnackBar isInline />
                <Routes>
                  <Route path="/signup/:inviteID" element={<SignUp />} />
                  <Route path="/" element={<SignIn />} />
                </Routes>
              </CardBody>
            </Card>
            <div className="text-center">
              <a href="/" className="text-decoration-none me-3 link-dark">
                Privacy policy
              </a>
              <a href="/" className="link-dark link-light text-decoration-none">
                Terms of use
              </a>
            </div>
          </div>
        </div>
      </Page>
    </PageWrapper>
  );
};

export default Authentication;
