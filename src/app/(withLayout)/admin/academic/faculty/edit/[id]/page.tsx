"use client"
import Form from "@/components/forms/Form"
import FormInput from "@/components/forms/FormInput"
import ActionBars from "@/components/ui/ActionBars"
import UmBreadcrumb from "@/components/ui/UmBreadcrumb"
import { useAcademicFacultyQuery, useUpdateAcademicFacultyMutation } from "@/redux/api/academic/facultyApi"
import { Button, Col,  Row, message } from "antd"
import { useRouter } from "next/navigation"

export type IDProps = {
    params: string
}

const EditPage = ({params}:IDProps) => {
     //@ts-ignore
    const {id}  = params;
    const {data} =  useAcademicFacultyQuery(id);
    const [updateAcademicFaculty] = useUpdateAcademicFacultyMutation();
    const router = useRouter()
   
   const defaultValues: any = {
    title: data?.title
   }
   
    const base = "admin";
    
    const onSubmit = async (values: any) => {
      message.loading("academic faculty is updating ............")
      try {
        // console.log(data);
        await updateAcademicFaculty({id, body:values})
       
        message.success("Academic Academic updated successfully");
        router.push("/admin/academic/faculty")
      } catch (err: any) {
        message.error(err.message)
      }
    };



  return (
    <>
    <UmBreadcrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "academic-faculties", link: `/${base}/academic/faculty` },
        ]}
      />

      <ActionBars title="Update Academic Faculty"></ActionBars>
     
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{  }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          update
        </Button>
      </Form>
    
    </>
  )
}

export default EditPage  