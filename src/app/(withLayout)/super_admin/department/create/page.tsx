"use client";

import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import UmBreadcrumb from "@/components/ui/UmBreadcrumb";
import { useAddDepartmentMutation } from "@/redux/api/departmentApi";
import { Button, Col,  Row, message } from "antd";

const CreateDepartmentPage = () => {
  const [addDepartment] = useAddDepartmentMutation()
  const onSubmit = async (data: any) => {
    message.loading("department is creating ............")
    try {
      // console.log(data);
      await addDepartment(data)
      message.success("Department added successfully")
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message)
    }
  };
  const base = "super_admin";
  return (
    <div>
      <UmBreadcrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "department", link: `/${base}/department` },
        ]}
      />
      <h1>Create Department</h1>
      
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
  );
};

export default CreateDepartmentPage;