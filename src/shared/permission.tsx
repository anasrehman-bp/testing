
import React, { createContext, useContext } from 'react';
import { useTypedDispatch } from 'shared/redux/store';
import { Permission as PermissionType } from 'shared/types';
import { togglePermissionModal } from 'shared/redux/slices/common';

export enum PermissionTypes {
  Pass = "pass",
  Dashboard = "dashboard"
}

export const PermissionContext = createContext({});

export const withPermission = (
  type: 'create' | 'update' | 'delete' | 'read',
  entity?: PermissionTypes,
  selectPermission?: boolean
) => {
  return (Component: React.ElementType) => {
    return (props: { [key: string]: any }): any => {
      const permission = useContext(PermissionContext);
      const dispatch = useTypedDispatch();
      let permissions: PermissionType = {
        create: false,
        update: false,
        delete: false,
        read: false
      };

      permissions = { ...permissions, ...permission };

      if (permissions !== null && (permissions[type] || entity === "pass")) {
        return <Component {...props} />;
      } else if (type === 'read') {
        return (
          <div>Read Only</div>
        );
      }
      return (
        <Component
          {...props}
          disabled={selectPermission}
          onDragStart={() => alert(togglePermissionModal(true))}
          onAction={() => dispatch(togglePermissionModal(true))}
          onClick={() => dispatch(togglePermissionModal(true))}
        />
      );
    };
  };
};

export const hasPermission = (
  type: 'create' | 'update' | 'delete' | 'read',
  entity: PermissionTypes | string,
  isSilent?: boolean
): boolean => {
  const tmp = localStorage.getItem('session');
  const session: any = tmp ? JSON.parse(tmp) : '';
  if (
    session &&
    session.permissions !== null &&
    (session.permissions[entity][type] === true || entity === "pass")
  ) {
    return true;
  }
  if (!isSilent) {
    <div>Permission Denied</div>
  }
  return false;
};
