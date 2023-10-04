import UmBreadcrumb from "@/components/ui/UmBreadcrumb"


const CreateDepartmentPage = () => {
    return (
      <>
<UmBreadcrumb items={[
        {
          label:'super_admin',
          link:'/super_admin'
       },
        {
          label:'department',
          link:'/super_admin/department'
       },
        
       ]}/>

      <h1> Create Department</h1>
      </>
    )
  }
  
  export default  CreateDepartmentPage