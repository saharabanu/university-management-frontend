
import { IDepartments, IMeta } from "@/types";
import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"


export const DEPARTMENT_URL= '/management-departments'

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    departments: build.query({
      query: (arg:  Record<string, any>) => ({
        url:DEPARTMENT_URL,
        method:"GET",
        params:arg,
        

      }),
      transformResponse: (response: IDepartments, meta: IMeta) => {
        return {
          departments: response,
          meta,
        };

      },
      providesTags:[tagTypes.department]
    }),

    addDepartment: build.mutation({
      query: (data) => ({
        url:DEPARTMENT_URL,
        method:"POST",
        data

      }),
      invalidatesTags:[tagTypes.department]
    }),
  }),
  
})

export const {useDepartmentsQuery, useAddDepartmentMutation} = departmentApi