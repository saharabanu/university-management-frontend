import UmBreadcrumb from "@/components/ui/UmBreadcrumb"


const CreateStudentPage = () => {
    return (
      <>
      <UmBreadcrumb items={[
        {
          label:'super_admin',
          link:'/super_admin'
       },
        {
          label:'manage-student',
          link:'/super_admin/manage-student'
       },
        
       ]}/>
      <h1> Create Student</h1>
      </>
    )
  }
  
  export default  CreateStudentPage