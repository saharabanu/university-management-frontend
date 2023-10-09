import { IAdmin, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

export const ADMIN_URL = '/admins'

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //  get all  admins
    admins: build.query({
      query: (arg: Record<string, any>) => ({
        url: ADMIN_URL,
        method: "GET",
        params: arg,


      }),
      transformResponse: (response: IAdmin[], meta: IMeta) => {
        return {
          admins: response,
          meta,
        };

      },
      providesTags: [tagTypes.admin]
    }),
   
    //  get single admin
    admin: build.query({
      query: (id:string) => ({
        url: `/${ADMIN_URL}/${id}`,
        method: "GET",
       


      }),
     
      providesTags: [tagTypes.admin]
    }),
    //  update admin
    updateAdmin: build.mutation({
      query: (data) => ({
        url: `/${ADMIN_URL}/${data.id}`,
        method: "PATCH",
        data: data.body
        


      }),
      
      invalidatesTags: [tagTypes.admin]
    }),
    //  delete single admin
    deleteAdmin: build.mutation({
      query: (id:any) => ({
        url: `/${ADMIN_URL}/${id}`,
        method: "DELETE",
       


      }),
     
      invalidatesTags: [tagTypes.admin]
    }),

    // create admin
    addAdminWithFormData: build.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        data,
        contentType:"multipart/form-data"

      }),
      invalidatesTags: [tagTypes.admin]
    }),
  }),

})

export const { useAdminsQuery,useAdminQuery , useUpdateAdminMutation , useDeleteAdminMutation,useAddAdminWithFormDataMutation } = adminApi