export interface Permission {
  permID?: string;
  title?: string;
  permType?: string;
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
}

export interface GetSessionResponse {
  employeeID: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  roleID: string;
  currentDomainID?: string;
  permissions: Permission[];
}

export interface SnackbarInterface {
  messages?: string;
  type?: string;
}

export interface CommonSliceInterface {
  snackBar?: SnackbarInterface;
  showPermissionModal: boolean;
}

export interface ErrorInterface {
  message: string;
}
