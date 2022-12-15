import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import Button from 'theme/components/bootstrap/Button';
import useDarkMode from 'theme/hooks/useDarkMode';
import Spinner from 'theme/components/bootstrap/Spinner';
import {
  useGetFirebaseTokenMutation,
  useSignUpMutation,
  useCreateSessionMutation,
  useVerifyInvitationMutation
} from 'api';
import PinCode from './PinCode';
import { useTypedDispatch } from 'shared/redux/store';
import { updateAccessToken } from '../slice';
import AuthContext from 'theme/contexts/authContext';

const SignUp: React.FC = () => {
  const { inviteID = '' } = useParams();
  const dispatch = useTypedDispatch();
  const { setUser } = useContext(AuthContext);
  const { darkModeStatus } = useDarkMode();
  const navigate = useNavigate();
  const [token, setToken] = useState<string>('');
  const [onGetInvitation, { isLoading: isVerifyingInvitation }] = useVerifyInvitationMutation();
  const [onFirebaseToken, { isLoading: isFirebaseTokenLoading }] = useGetFirebaseTokenMutation();
  const [onSignUpNew, { isLoading: isLoadingSignUp }] = useSignUpMutation();
  const [onCreateSession, { isLoading: isCreateSession }] = useCreateSessionMutation();

  const handleTokenInvitationVerification = async () => {
    const invitationResponse: any = await onGetInvitation(inviteID);
    if (invitationResponse.data) {
      const firebaseResponse: any = await onFirebaseToken();
      if (firebaseResponse.data) {
        const accessToken = firebaseResponse.data;
        setToken(accessToken);
      }
    }
  };

  const handleSignUp = async (pin: string) => {
    const signUpResponse: any = await onSignUpNew({
      pin,
      token,
      invitationID: inviteID
    });
    if (signUpResponse.data) {
      dispatch(updateAccessToken(token));
      const createSessionResponse: any = await onCreateSession(token);
      if (createSessionResponse.data && setUser) {
        setUser(token);
        navigate('/app');
      }
    }
  };

  return (
    <div className="col-12">
      <Button onClick={() => console.log('sdf')}>asdf</Button>
      {token === '' ? (
        <Button
          isOutline
          color={darkModeStatus ? 'light' : 'dark'}
          className={classNames('w-100 py-3', {
            'border-light': !darkModeStatus,
            'border-dark': darkModeStatus
          })}
          isDisable={isFirebaseTokenLoading || isVerifyingInvitation}
          icon="CustomGoogle"
          onClick={handleTokenInvitationVerification}
        >
          Continue with Google&nbsp;
          {(isFirebaseTokenLoading || isVerifyingInvitation) && <Spinner isSmall inButton isGrow />}
        </Button>
      ) : (
        <PinCode onSubmit={handleSignUp} isLoading={isLoadingSignUp || isCreateSession} />
      )}
    </div>
  );
};

export default SignUp;
