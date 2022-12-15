import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "theme/components/bootstrap/Button";
import FormGroup from "theme/components/bootstrap/forms/FormGroup";
import Input from "theme/components/bootstrap/forms/Input";
import Select from "theme/components/bootstrap/forms/Select";
import Modal, {
  ModalBody,
  ModalHeader,
  ModalTitle
} from "theme/components/bootstrap/Modal";
import Icon from "theme/components/icon/Icon";
import {
  CreateInvitationResponse,
  useCreateInvitationMutation,
  useGetAllInvitationsQuery
} from "api";

interface ISendInviteModalProps {
  isOpen: any;
  setIsOpen: any;
}

const roles = [
  {
    value: "5fdc7f6f-cfcb-494b-a180-aa8c4e02122d",
    text: "Master"
  }
];

const initialData = {
  email: "",
  role: ""
};

const schema = {
  email: Yup.string().email().required("Email is required"),
  role: Yup.string().required("Role is required")
};

const SendInviteModal: React.FC<ISendInviteModalProps> = ({
  setIsOpen,
  isOpen
}: ISendInviteModalProps) => {
  const { data } = useGetAllInvitationsQuery(null);
  // console.log('data', data);
  const [onSend] = useCreateInvitationMutation();
  return (
    <Modal
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered="true"
    >
      <ModalHeader>
        <ModalTitle id="contained-modal-title-vcenter">
          Send Invitation
        </ModalTitle>
        <Icon
          size={"lg"}
          icon="Close"
          style={{ cursor: "pointer" }}
          onClick={() => setIsOpen(false)}
        />
      </ModalHeader>
      <ModalBody>
        <Formik
          initialValues={initialData}
          validationSchema={Yup.object().shape(schema)}
          enableReinitialize
          onSubmit={(values: CreateInvitationResponse) =>
            onSend(values).then(() => setIsOpen(false))
          }
          render={({
            touched,
            errors,
            handleChange,
            values,
            handleSubmit,
            handleBlur
          }: any) => (
            <form onSubmit={handleSubmit}>
              <FormGroup
                id="email"
                isFloating
                label="Email"
                style={{ marginTop: "20px", marginBottom: "20px" }}
              >
                <Input
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  isTouched={touched.email}
                  invalidFeedback={errors.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </FormGroup>
              <FormGroup
                id="role"
                isFloating
                label="Role"
                style={{ marginTop: "20px", marginBottom: "20px" }}
              >
                <Select
                  value={values.role}
                  isTouched={touched.role}
                  invalidFeedback={errors.role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  ariaLabel="role"
                >
                  {roles.map((role, index) => (
                    <option value={role.value} key={index}>
                      {role.text}
                    </option>
                  ))}
                </Select>
              </FormGroup>
              <Button
                type="submit"
                style={{
                  backgroundColor: "#C8D0FC",
                  color: "#4D69F9",
                  width: "100%",
                  marginTop: "20px",
                  marginBottom: "20px"
                }}
              >
                Add Zone
              </Button>
            </form>
          )}
        />
      </ModalBody>
    </Modal>
  );
};

export default SendInviteModal;
