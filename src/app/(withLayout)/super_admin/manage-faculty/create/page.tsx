import UmBreadcrumb from "@/components/ui/UmBreadcrumb"


const CreateFacultyPage = () => {
    return (
      <>
      <UmBreadcrumb items={[
        {
          label:'super_admin',
          link:'/super_admin'
       },
        {
          label:'manage-faculty',
          link:'/super_admin/manage-faculty'
       },
        
       ]}/>
      <h1> Create Faculty</h1>
      </>
    )
  }
  
  export default  CreateFacultyPage