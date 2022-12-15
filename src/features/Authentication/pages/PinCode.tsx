import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import useDarkMode from 'theme/hooks/useDarkMode';
import Button from 'theme/components/bootstrap/Button';
import Spinner from 'theme/components/bootstrap/Spinner';

const PinCode: React.FC<{ onSubmit: (pin: string) => void; isLoading: boolean }> = ({
  onSubmit,
  isLoading = false
}) => {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const { darkModeStatus } = useDarkMode();
  const [code, setCode] = useState([...Array(4)].map(() => ''));
  const [finalCode, setFinalCode] = useState<string>();
  const processInput = (e: React.ChangeEvent<HTMLInputElement>, slot: number) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;
    const newCode = [...code];
    newCode[slot] = value;
    setCode(newCode);
    if (slot !== 4 - 1) {
      inputs?.current[slot + 1]?.focus();
    }
    if (newCode.every((c: any) => c !== '')) {
      setFinalCode(newCode.join(''));
    }
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>, slot: number) => {
    if (e.keyCode === 8 && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = '';
      setCode(newCode);
      inputs?.current[slot - 1]?.focus();
    }
  };

  return (
    <div>
      <div className="h6 text-muted mb-2">Enter Pin Code</div>
      <div className="d-flex">
        {code.map((num, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={num}
            autoFocus={!code[0].length && index === 0}
            onChange={(e) => processInput(e, index)}
            style={{
              border: 'none',
              backgroundImage: 'none',
              backgroundColor: 'transparent',
              boxShadow: 'none',
              textAlign: 'center',
              height: '60px',
              minWidth: '60px',
              width: '100%',
              borderRadius: '0px',
              margin: '0 10px',
              borderBottom: `2px solid grey`,
              fontSize: '38px',
              outline: 'none'
            }}
            onKeyUp={(e) => onKeyUp(e, index)}
            ref={(ref) => inputs.current.push(ref)}
          />
        ))}
      </div>
      <div className="col-12 mt-5">
        <Button
          isOutline
          isDisable={!finalCode}
          color={darkModeStatus ? 'light' : 'dark'}
          className={classNames('w-100 py-3', {
            'border-light': !darkModeStatus,
            'border-dark': darkModeStatus
          })}
          onClick={() => {
            if (finalCode) onSubmit(finalCode);
          }}
        >
          Continue
          {isLoading && <Spinner isSmall inButton isGrow />}
        </Button>
      </div>
    </div>
  );
};

export default PinCode;
