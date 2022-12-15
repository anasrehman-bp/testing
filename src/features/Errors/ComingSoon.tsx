import React from 'react';
import PageWrapper from 'theme/layout/PageWrapper/PageWrapper';
import Page from 'theme/layout/Page/Page';
import Humans from 'theme/assets/img/scene4.png';
import HumansWebp from 'theme/assets/img/scene4.webp';
import Button from 'theme/components/bootstrap/Button';

const ComingSoon: React.FC = () => {
  return (
    <PageWrapper title="Coming Soon">
      <Page>
        <div className="row d-flex align-items-center h-100">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <div className="text-primary fw-bold" style={{ fontSize: 'calc(3rem + 3vw)' }}>
              Coming Soon
            </div>
            <div className="text-dark fw-bold" style={{ fontSize: 'calc(1.5rem + 1.5vw)' }}>
              Please try in 2023
            </div>
          </div>
          <div className="col-12 d-flex align-items-baseline justify-content-center">
            <img srcSet={HumansWebp} src={Humans} alt="Humans" style={{ height: '50vh' }} />
          </div>
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <Button
              className="px-5 py-3"
              color="primary"
              isLight
              icon="HolidayVillage"
              tag="a"
              href="/"
            >
              Homepage
            </Button>
          </div>
        </div>
      </Page>
    </PageWrapper>
  );
};

export default ComingSoon;
