import React, { FC, useState, useEffect } from 'react';
import Button from '../bootstrap/Button';
import FormGroup from '../bootstrap/forms/FormGroup';
import Input from '../bootstrap/forms/Input';
import Select from '../bootstrap/forms/Select';
import Modal, { ModalBody, ModalHeader, ModalTitle } from '../bootstrap/Modal';
import Icon from '../icon/Icon';
import Barcode from 'react-barcode'
import { any } from 'prop-types';
import MaskInput from '../maskInput/MaskInput';


interface IWareHouseModalProps {
    isOpen: any;
    setIsOpen: any;


}

const AddWareHouseModal: FC<IWareHouseModalProps> = (props) => {
    return (
        <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered='true' >
            <ModalHeader className='mt-2'>
                <ModalTitle id='contained-modal-title-vcenter'>Add Warehouse</ModalTitle>
                <div className='position-relative align-items-center' style={{ background: '#FEEEE9', width: '40px', height: '40px', borderRadius: '10px' }}>
                    <Icon
                        icon='Close'
                        style={{ cursor: 'pointer', color: '#F35421', top: '6px', left: '6px', position: 'absolute' }}
                        onClick={() => props.setIsOpen(false)} size="2x"
                    />

                </div>

            </ModalHeader>
            <ModalBody>
                <div className='row'>
                    <div className='col-4'>
                        {/* Name */}
                        <FormGroup
                            id='zone-name'


                            style={{ marginTop: '20px', marginBottom: '20px' }}>
                            <Input type='text' defaultValue={''} placeholder='Name' />
                        </FormGroup>
                        {/* Location Code */}
                        <FormGroup
                            id='zone-location-code'


                            style={{ marginTop: '20px', marginBottom: '20px' }}>
                            <Input type='text' placeholder='Address' />

                        </FormGroup>
                        <FormGroup
                            id='zone-location-code'


                            style={{ marginTop: '20px', marginBottom: '20px' }}>
                            <Input type='text' placeholder='City' />

                        </FormGroup>
                        {/* Type of Zone */}
                        <div className='row'>
                            <div className='col-6'>
                                <FormGroup
                                    id='zone-type'


                                    style={{ marginTop: '20px', marginBottom: '20px' }}>
                                    <Input type='text' placeholder='State' />
                                </FormGroup>
                            </div>
                            <div className='col-6'>
                                <FormGroup
                                    id='zone-type'


                                    style={{ marginTop: '20px', marginBottom: '20px' }}>
                                    <Input type='number' placeholder='Zip' />
                                </FormGroup>
                            </div>
                        </div>

                        <FormGroup
                            id='zone-type'
                            style={{ marginTop: '20px', marginBottom: '20px' }}>
                            <Input type='text' placeholder='Phone Number' />
                        </FormGroup>

                        <Button
                            type='submit'
                            style={{
                                backgroundColor: '#C8D0FC',
                                color: '#4D69F9',
                                width: '100%',
                                marginTop: '20px',
                                marginBottom: '20px',
                            }}>
                            Add Warehouse
                        </Button>



                    </div>
                    <div className='col-8'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14480.276627633446!2d67.0663629!3d24.8614875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x510c27ca1fa8b65!2sFortune%20Tower!5e0!3m2!1sen!2s!4v1670929546977!5m2!1sen!2s" width='100%' height='376px' style={{ border: 0 }} ></iframe>
                    </div>

                </div>
            </ModalBody>
        </Modal>


    );
};

export default AddWareHouseModal;