import React, { FC, useState, useEffect } from 'react';
import Button from '../bootstrap/Button';
import FormGroup from '../bootstrap/forms/FormGroup';
import Input from '../bootstrap/forms/Input';
import Select from '../bootstrap/forms/Select';
import Modal, { ModalBody, ModalHeader, ModalTitle } from '../bootstrap/Modal';
import Icon from '../icon/Icon';
import { any } from 'prop-types';
import QRCode from "react-qr-code";



interface IQrCodeModalProps {
    isOpen: any;
    setIsOpen: any;
    dummyDataHeader: any;
    dummyDataToShow: any;
    currentData: any;
    name: string;

}





const AddQrCodeModal: FC<IQrCodeModalProps> = (props) => {


    // const [qRcodeValue, setQrcodeValue] = useState<any>();

    // useEffect(() => {
    //     if (props.isOpen)
    //         setQrcodeValue(Math.floor(1000000 + Math.random() * 9000000));
    // }, [props.isOpen])
    if(props.name==="retailers" || props.name==="WearHouse" || props.name==="brand" || props.name==="zones" || props.name==="barCode"){
        return null
          }

    // console.log(props.currentData)
    return (
        <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered='true'>
            <div style={{ padding: "2rem" }}>
                <ModalHeader className='mt-2'>
                    <ModalTitle id='contained-modal-title-vcenter'>QR Scan</ModalTitle>
                    <div className='position-relative align-items-center'
                        style={{ background: '#FEEEE9', width: '40px', height: '40px', borderRadius: '10px' }}>
                        <Icon
                            icon='Close'
                            style={{ cursor: 'pointer', color: '#F35421', top: '6px', left: '6px', position: 'absolute' }}
                            onClick={() => props.setIsOpen(false)} size="2x"

                        />

                    </div>

                </ModalHeader>
                <hr />
            </div>

            <div style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                <ModalBody >
                    <div className='row'>
                        <div className='col-6 mb-5'>


                            <QRCode value={props?.currentData?.category} size={100} />


                            <div className=' mt-5 ' style={{ fontSize: '18px' }} >Title: <strong >XX090 Cart HU</strong></div>
                            <div className='mt-5' style={{ fontSize: '18px' }}>Type: <strong>{props?.currentData?.type}</strong></div>
                        </div>
                        <div className='col-6 positon-relative d-flex ' >

                            <div style={{ marginLeft: '130px', textAlign: 'right' }} >
                                <div style={{ fontSize: '18px', marginTop: '90px' }} >Last User: <strong style={{ fontSize: '18px' }}>Tom Holland</strong></div>
                                <div style={{ fontSize: '18px', marginTop: '42px' }}>Capacity: <strong style={{ fontSize: '18px' }}>20 cases</strong></div>
                                <div style={{ fontSize: '18px', marginTop: '40px' }}>Last Activity: <strong style={{ fontSize: '18px' }}>{props?.currentData?.lastActivity}</strong></div>

                            </div>

                        </div>



                    </div>


                </ModalBody>
            </div>



        </Modal>
    );
};

export default AddQrCodeModal;
