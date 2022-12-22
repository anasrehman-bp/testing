import React, { FC } from 'react';
import ReactInputMask from 'react-input-mask';
import Button from '../bootstrap/Button';
import FormGroup from '../bootstrap/forms/FormGroup';
import Input from '../bootstrap/forms/Input';
import Select from '../bootstrap/forms/Select';
import Modal, { ModalBody, ModalHeader, ModalTitle } from '../bootstrap/Modal';
import Icon from '../icon/Icon';
import MaskInput from '../maskInput/MaskInput';

interface IAddZoneModalProps {
  isOpen: any;
  setIsOpen: any;
}

const AddZoneModal: FC<IAddZoneModalProps> = (props) => {

  function handleChange(event: any) {
    console.log(event.target.value);
  }
  return (
    <Modal {...props} size='sm' aria-labelledby='contained-modal-title-vcenter' centered='true' >
      <ModalHeader>
        {/* <ModalTitle id='contained-modal-title-vcenter'>Add Zone</ModalTitle> */}
        <ModalTitle id='contained-modal-title-vcenter'>Mask Input</ModalTitle>
        <Icon
          size={'lg'}
          icon='Close'
          style={{ cursor: 'pointer' }}
          onClick={() => props.setIsOpen(false)}
        />
      </ModalHeader>
      <ModalBody>
        <MaskInput/>
        <Button
          type='submit'
          style={{
            backgroundColor: '#C8D0FC',
            color: '#4D69F9',
            width: '100%',
            marginTop: '20px',
            marginBottom: '20px',
          }}>
          Add Zone
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default AddZoneModal;

        // {/* Name */}
        // <FormGroup
        //   id='zone-name'


        //   style={{ marginTop: '20px', marginBottom: '20px' }}>
        //   <Input type='text' defaultValue={''} />
        // </FormGroup>
        // {/* Location Code */}
        // <FormGroup
        //   id='zone-location-code'


        //   style={{ marginTop: '20px', marginBottom: '20px' }}>
        //   <Input type='text' mask='+95-999-999' onChange={handleChange} />

        // </FormGroup>
        // {/* Type of Zone */}
        // <FormGroup
        //   id='zone-type'


        //   style={{ marginTop: '20px', marginBottom: '20px' }}>
        //   <Input type='number' />
        // </FormGroup>