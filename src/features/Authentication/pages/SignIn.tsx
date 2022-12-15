import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import Button from 'theme/components/bootstrap/Button';
import useDarkMode from 'theme/hooks/useDarkMode';
import Spinner from 'theme/components/bootstrap/Spinner';
import { useSignInMutation, useCreateInvitationMutation } from 'api';
import AuthContext from 'theme/contexts/authContext';

const SignIn: React.FC = () => {
  const { darkModeStatus } = useDarkMode();
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [onSignIn, { isLoading }] = useSignInMutation();
  const [onCreateInvitation] = useCreateInvitationMutation();

  const handleOnClick = async () => {
    onSignIn().then((res: any) => {
      if (res.data && setUser) {
        console.log('🚀 ~ file: SignIn.tsx:20 ~ onSignIn ~ res.data', res.data);
        setUser('ok');
        const obj = { email: res.data.email };
        onCreateInvitation(obj).then(() =>
          console.log('Link Created on Line 22 in SignIn.tsx', res.data.email)
        );
        navigate('/app');
      }
    });
  };

  return (
    <div className="col-12">
      <Button
        isOutline
        color={darkModeStatus ? 'light' : 'dark'}
        className={classNames('w-100 py-3', {
          'border-light': !darkModeStatus,
          'border-dark': darkModeStatus
        })}
        icon="CustomGoogle"
        onClick={handleOnClick}
      >
        Continue with Google&nbsp;
        {isLoading && <Spinner isSmall inButton isGrow />}
      </Button>
    </div>
  );
};

export default SignIn;
