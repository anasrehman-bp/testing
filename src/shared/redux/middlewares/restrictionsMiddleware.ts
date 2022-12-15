import { Middleware } from '@reduxjs/toolkit';

const restrictionsMiddleware: Middleware = () => (next) => (action) => {
  // Restrict RTK Query from executing if a person do not have permission
  // if (action.type === "slice/action") {
  //   if (session.permissions[PermissionTypes.{Name}].[view/create/edit/delete] === false) {
  //     Show Error message
  //     return next({
  //       payload: "entity name",
  //       type: "commonSlice/toggleNotificationModal",
  //     });
  //   }
  // } else if () ...
  return next(action);
};

export { restrictionsMiddleware };
