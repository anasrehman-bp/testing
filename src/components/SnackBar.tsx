import React from 'react';
import { useTypedSelector } from 'shared/redux/store';
import Alert from 'theme/components/bootstrap/Alert';
import { ErrorInterface } from 'shared/types';

const SnackBar: React.FC<{ isInline?: boolean }> = ({ isInline = false }) => {
  const snackBar = useTypedSelector((state: any) => state.commonSlice.snackBar);
  if (!snackBar || !snackBar.messages) {
    return null;
  }

  if (Boolean(snackBar.messages) && isInline) {
    return snackBar.messages.map((e: ErrorInterface) => (
      <Alert color="danger" isLight icon="Error" key={e.message} isDismissible>
        {e.message}
      </Alert>
    ));
  }
  return null;
};

export default SnackBar;
