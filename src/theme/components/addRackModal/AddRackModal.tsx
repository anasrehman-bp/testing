import { Form, Field, Formik, ErrorMessage } from 'formik';
import React, { FC, useRef, useState } from 'react';
import Button from '../bootstrap/Button';
import Checks from '../bootstrap/forms/Checks';
// import input from '../bootstrap/forms/input';
import * as Yup from 'yup';
import Modal, { ModalBody, ModalHeader, ModalTitle } from '../bootstrap/Modal';
import Icon from '../icon/Icon';
import './AddRackModal.scss';

// type MyRadioProps = { label: string } & FieldAttributes<{}>;

// const MyRadio: React.FC<MyRadioProps> = ({label, ...props}) => {
//   const [field] = useField<{}>(props);
//   return <input {...field} label={label} />
// }

interface IWareHouseModalProps {
  isOpen: any;
  setIsOpen: any;
  setValues: any;
  handleRackData: any;
}

const AddRackModal: FC<IWareHouseModalProps> = (props) => {
  const onSubmits = (values: object) => {
    props.setValues(values);
  };

  const initialValue = {
    // column: '',
    // shelves: '',
    rows: '',
    sections: [],
    orientation: [],
    position: '',
    column: '',
    shelves: ''
  };

  const validationSchema = Yup.object().shape({
    rows: Yup.string().oneOf(['row', 'column']).required('atleast one required'),
    sections: Yup.array().min(1).required('at least one required'),
    column: Yup.number()
      .min(1)
      .positive('positive number required')
      .integer('integer required')
      .required('required'),
    shelves: Yup.number()
      .min(1)
      .positive('positive number required')
      .integer('integer required')
      .required(),
    position: Yup.string().oneOf(['Right', 'Below']).required('at least one required'),
    orientation: Yup.array().min(1).required('at least one required')
  });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      isCentered={true}
      dialogClassName="modal"
    >
      <ModalHeader>
        {/* <ModalTitle id='contained-modal-title-vcenter'>Add Zone</ModalTitle> */}
        <ModalTitle id="contained-modal-title-vcenter">Add Directions</ModalTitle>
        <Icon
          size={'lg'}
          icon="Close"
          style={{ cursor: 'pointer' }}
          onClick={() => props.setIsOpen(false)}
        />
      </ModalHeader>
      <ModalBody>
        <div>
          <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={(values, onSubmitProps) => {
              props.setValues(values);
              props.setIsOpen(false);
              onSubmitProps.setSubmitting(false);
              onSubmitProps.resetForm();
              props.handleRackData(values);
            }}
          >
            {({ values, handleChange, handleBlur, isSubmitting }) => (
              <Form>
                <div className="modalBody">
                  <div className="modalColumnFirst">
                    <label>
                      <Field
                        type="radio"
                        name="rows"
                        value="row"
                        onChange={handleChange}
                        helperText={<ErrorMessage name="rows" />}
                      />
                      &nbsp;Row
                    </label>
                    {/* <MyRadio type='radio' name='rows' value={values.rows} onChange={handleChange} label="Rows" /> */}
                    <h5 className="elementsFirst">Sections</h5>
                    <label>
                      <Field
                        type="checkbox"
                        name="sections"
                        value="A"
                        // checked={section}
                        onChange={handleChange}
                        helperText={<ErrorMessage name="sections" />}
                      />
                      &nbsp;A
                    </label>
                    <h5 className="elementsFirst">Column</h5>
                    <Field
                      type="number"
                      className="input"
                      name="column"
                      helperText={<ErrorMessage name="column" />}
                    />
                    <h5 className="elementsFirst">Orientation</h5>
                    <label>
                      <Field
                        type="checkbox"
                        name="orientation"
                        value="Horizontal"
                        onChange={handleChange}
                        helperText={<ErrorMessage name="orientation" />}
                      />{' '}
                      &nbsp;Horizontal
                    </label>
                    <h5 className="elementsFirst">Position</h5>
                    <label>
                      <Field
                        type="radio"
                        name="position"
                        value="Right"
                        onChange={handleChange}
                        helperText={<ErrorMessage name="position" />}
                      />
                      &nbsp;Right
                    </label>
                  </div>
                  <div className="modalColumnSecond">
                    <div style={{ paddingBottom: '4.35rem' }}>
                      <label>
                        <Field
                          type="radio"
                          name="rows"
                          value="column"
                          onChange={handleChange}
                          helperText={<ErrorMessage name="rows" />}
                        />
                        &nbsp;Column
                      </label>
                    </div>
                    <label>
                      <Field
                        type="checkbox"
                        name="sections"
                        value="B"
                        label="B"
                        onChange={handleChange}
                        helperText={<ErrorMessage name="sections" />}
                      />
                      &nbsp;B
                    </label>
                    <div style={{ paddingBottom: '4.35rem' }}>
                      <h5 className="shelves">Shleves</h5>
                      <Field
                        type="number"
                        className="input"
                        name="shelves"
                        helperText={<ErrorMessage name="shelves" />}
                      />
                    </div>
                    <label>
                      <Field
                        type="checkbox"
                        name="orientation"
                        value="Vertical"
                        onChange={handleChange}
                        helperText={<ErrorMessage name="orientation" />}
                      />{' '}
                      &nbsp;Vertical
                    </label>
                    <div style={{ paddingTop: '4.35rem' }}>
                      <label>
                        <Field
                          type="radio"
                          name="position"
                          value="Below"
                          onChange={handleChange}
                          helperText={<ErrorMessage name="position" />}
                        />
                        &nbsp;Below
                      </label>
                    </div>
                  </div>
                </div>
                <Button
                  type="submit"
                  style={{
                    backgroundColor: '#C8D0FC',
                    color: '#4D69F9',
                    width: '100%',
                    marginTop: '20px',
                    marginBottom: '20px'
                  }}
                >
                  Add Zone
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default AddRackModal;
