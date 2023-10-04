import UmBreadcrumb from "@/components/ui/UmBreadcrumb"


const CreateAdminPage = () => {


    return (
      <>
<UmBreadcrumb items={[
        {
          label:'super_admin',
          link:'/super_admin'
       },
        {
          label:'admin',
          link:'/super_admin/admin'
       },
        
       ]}/>

      <h1>Create Admin</h1>
      </>
    )
  }
  
  export default  CreateAdminPage