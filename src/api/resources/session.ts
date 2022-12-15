import api from 'api/api';
import { updateSession } from 'features/Authentication/slice';
import { Permission, GetSessionResponse } from 'shared/types';

export const sessionTransformer = (response: GetSessionResponse): GetSessionResponseTransformed => {
  const permissionObject: { [key: string]: Permission } = {};
  if (response.permissions) {
    response.permissions.forEach((permission: Permission) => {
      if (permission && permission.title) {
        permissionObject[permission.title.toLowerCase().replaceAll(' ', '_')] = permission;
      }
    });
  }

  return {
    ...response,
    permissions: permissionObject
  };
};

export const sessionAPI = api.injectEndpoints({
  endpoints: (build) => ({
    // Session
    getSession: build.query<GetSessionResponseTransformed, null>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        try {
          // Get Session
          const sessionResponse: any = await fetchWithBQ('/sessions');
          if (sessionResponse.error) throw sessionResponse.error;
          const { data: sessionData }: { data: GetSessionResponse } = JSON.parse(
            JSON.stringify(sessionResponse)
          );
          const session = sessionTransformer(sessionData);
          _queryApi.dispatch(updateSession(session));

          return {
            data: session
          };
        } catch (error: any) {
          return error;
        }
      },
      providesTags: ['Session']
    }),

    createSession: build.mutation<MemberInfoEntity, string>({
      query: (tokenID: string) => ({
        url: '/sessions',
        method: 'POST',
        body: { tokenID }
      }),
      invalidatesTags: ['Session']
    })
  }),
  overrideExisting: false
});

export const { useGetSessionQuery, useCreateSessionMutation, useLazyGetSessionQuery } = sessionAPI;

//////////////////////////////////////////////////////////////////////////
//                                TYPES                                 //
//////////////////////////////////////////////////////////////////////////

export interface GetSessionResponseTransformed {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  roleID: string;
  currentDomainID?: string;
  permissions: { [key: string]: Permission };
  is2FA?: boolean;
}

export interface MemberInfoEntity {
  roleMemberAPIKey: string;
  accountID: string;
  memberID: string;
  memberAccountID: string;
  domainID: string;
  roleID: string;
  roleAdmin: boolean;
  email: string;
  accountAdmin: boolean;
  apiRequest: boolean;
  routePath: string;
  routeMethod: string;
  trayUserID: string;
  trayUserAccessToken: string;
  trayTokenCreatedAt: string;
  isAgency: boolean;
  isDomainAgency: boolean;
  planID: string;
}
