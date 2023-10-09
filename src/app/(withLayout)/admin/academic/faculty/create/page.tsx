"use client";

import Form from "@/components/forms/Form";


import FormInput from "@/components/forms/FormInput";
import UmBreadcrumb from "@/components/ui/UmBreadcrumb";
import { useAddAcademicFacultyMutation } from "@/redux/api/academic/facultyApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const CreateACFacultyPage = () => {
    const router = useRouter()
    const [addAcademicFaculty] = useAddAcademicFacultyMutation()
    const onSubmit = async (data: any) => {
      message.loading("Academic Faculty is creating ............")
      try {
         console.log(data);
        const res= await addAcademicFaculty(data)
        if(!!res){
            message.success("Academic Faculty added successfully");
        }

        
        router.push("/admin/academic/faculty")
      } catch (err: any) {
        
        message.error(err.message)
      }
    };
  const base = 'admin';

  return (
    <>
      <UmBreadcrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: "academic-faculty",
            link: `/${base}/academic/faculty`,
          },
        ]}
      />

      <h1>Create Academic Faculty</h1>

      <div>
      <Form submitHandler={onSubmit}>
        <Row gutter={{  }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
      </div>
    </>
  );
};

export default CreateACFacultyPage;
