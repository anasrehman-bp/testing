import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from 'shared/redux/store';
import AsideRoutes from 'theme/layout/Aside/AsideRoutes';
import Wrapper from 'theme/layout/Wrapper/Wrapper';
import { getUser } from './Authentication/slice';

const AppRoutes: React.FC = () => {
  const user = useTypedSelector(getUser);
  const navigate = useNavigate();
  if (!user) {
    navigate('/');
  }
  return (
    <React.Fragment>
      <AsideRoutes />
      <Wrapper />
    </React.Fragment>
  );
};

export default AppRoutes;
