import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import Navigation from '../Navigation/Navigation';
import AuthContext from '../../contexts/authContext';
import Button from 'theme/components/bootstrap/Button';
import { settingMenu } from 'theme/menu';
import { useTypedDispatch } from 'shared/redux/store';
import { resetStateAction } from 'shared/redux/actions/reset';

const User: React.FC = () => {
  const dispatch = useTypedDispatch();
  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <>
      <Navigation menu={settingMenu} id="aside-menu" />
      <Button
        className={classNames('w-100 py-3')}
        onClick={() => {
          dispatch(resetStateAction());
          if (setUser) {
            setUser(undefined);
          }
          navigate('/');
        }}
        rounded={0}
        color="brand-two"
        style={{ textAlign: 'start' }}
        icon="Logout"
      >
        Log Out
      </Button>
    </>
  );
};

export default User;
