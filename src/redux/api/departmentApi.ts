
import { IDepartments, IMeta } from "@/types";
import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"


export const DEPARTMENT_URL = '/management-departments'

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //  get all  departments
    departments: build.query({
      query: (arg: Record<string, any>) => ({
        url: DEPARTMENT_URL,
        method: "GET",
        params: arg,


      }),
      transformResponse: (response: IDepartments, meta: IMeta) => {
        return {
          departments: response,
          meta,
        };

      },
      providesTags: [tagTypes.department]
    }),
    // get single department
    department: build.query({
      query: (id: any) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "GET",



      }),

      providesTags: [tagTypes.department]
    }),
    // update department
    updateDepartment: build.mutation({
      query: (data) => ({
        url: `${DEPARTMENT_URL}/${data.id}`,
        method: "PATCH",
        data: data.body



      }),

      invalidatesTags: [tagTypes.department]
    }),


    // delete department
  
    deleteDepartment: build.mutation({
      query: (id:any) => ({
        url:`${DEPARTMENT_URL}/${id}`,
        method:"DELETE",
        
        

      }),
      
      invalidatesTags:[tagTypes.department]
    }),

    // create department
    addDepartment: build.mutation({
      query: (data) => ({
        url: DEPARTMENT_URL,
        method: "POST",
        data

      }),
      invalidatesTags: [tagTypes.department]
    }),
  }),

})

export const { useDepartmentsQuery, useDepartmentQuery, useUpdateDepartmentMutation, useDeleteDepartmentMutation, useAddDepartmentMutation } = departmentApi