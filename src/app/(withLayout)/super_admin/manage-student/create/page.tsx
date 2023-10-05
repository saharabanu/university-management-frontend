'use client'
import BasicInfo from "@/components/StudentForms/BasicInfo";
import GuardianInfo from "@/components/StudentForms/GuardianInfo";
import LocalGuardianInfo from "@/components/StudentForms/LocalGuardianInfo";
import StudentInfo from "@/components/StudentForms/StudentInfo";
import StepperForm from "@/components/stepperForm/StepperForm"
import UmBreadcrumb from "@/components/ui/UmBreadcrumb"


const CreateStudentPage = () => {
  const steps = [
    {
      title: 'Student Information',
      content: <StudentInfo/>,
    },
    {
      title: 'Basic Information',
      content: <BasicInfo/>,
    },
    {
      title: 'Guardian Information',
      content: <GuardianInfo/>,
    },
    {
      title: 'Local Guardian Information',
      content: <LocalGuardianInfo/>,
    },
  ];

  const handleStudentSubmit = async(data:any) => {
    try {
     
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
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
      <StepperForm  submitHandler={(value)=>handleStudentSubmit(value)} steps={steps}></StepperForm>
      </>
    )
  }
  
  export default  CreateStudentPage