import api from 'api/api';

export const invitationAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getInvitation: build.query<GetInvitationResponse, string>({
      query: (invitationID) => `/invitations/${invitationID}`
    }),

    createInvitation: build.mutation<any, CreateInvitationResponse>({
      query: (values: CreateInvitationResponse) => ({
        url: '/invitations',
        method: 'POST',
        body: values
      })
    }),

    deleteInvitation: build.mutation<any, string>({
      query: (id) => ({
        url: `/invitations/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Invitation']
    }),

    getAllInvitations: build.query<GetInvitationResponse, null>({
      query: () => `/invitations`,
      providesTags: ['Invitation']
    })
  }),
  overrideExisting: false
});

export const {
  useGetInvitationQuery,
  useLazyGetInvitationQuery,
  useDeleteInvitationMutation,
  useGetAllInvitationsQuery,
  useCreateInvitationMutation
} = invitationAPI;

//////////////////////////////////////////////////////////////////////////
//                                TYPES                                 //
//////////////////////////////////////////////////////////////////////////

export interface GetInvitationResponse {
  invitation_id: string;
  email: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface CreateInvitationResponse {
  email: string;
  // role: string;
}
