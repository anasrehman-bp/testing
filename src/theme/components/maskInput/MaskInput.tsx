import React from 'react';
import ReactInputMask from 'react-input-mask';
import FormGroup from '../bootstrap/forms/FormGroup';
import { Input } from '../icon/material-icons';

interface IMaskInputProps {
}

const MaskInput: React.FC<IMaskInputProps> = (props) => {



    return (

        <>

            <FormGroup>
                <div className='margin-auto'>

                    <ReactInputMask className="form-control" style={{
                        background: '#F8F9FA', boxShadow: 'inset 0px 2px 8px rgba(0, 0, 0, 0.05)', width: '100%',
                        height: ' 35px', borderRadius: '5px', marginTop: '20px', marginBottom: '20px', border: 'none',
                    }} mask='+38(999)999-999' alwaysShowMask={true} />

                    <ReactInputMask className="form-control" style={{
                        background: '#F8F9FA', boxShadow: 'inset 0px 2px 8px rgba(0, 0, 0, 0.05)', width: '100%',
                        height: ' 35px', borderRadius: '5px', marginTop: '20px', marginBottom: '20px', border: 'none',
                    }} mask='+44(999)999-99-99' alwaysShowMask={true} />

                    <ReactInputMask className="form-control" style={{
                        background: '#F8F9FA', boxShadow: 'inset 0px 2px 8px rgba(0, 0, 0, 0.05)', width: '100%',
                        height: ' 35px', borderRadius: '5px', marginTop: '20px', marginBottom: '20px', border: 'none',
                    }} mask='+7(999)99-999' alwaysShowMask={true} />






                </div>

            </FormGroup>

        </>







    );
};

export default MaskInput;
