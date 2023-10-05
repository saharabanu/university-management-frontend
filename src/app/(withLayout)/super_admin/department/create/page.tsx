"use client";

import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import UmBreadcrumb from "@/components/ui/UmBreadcrumb";
import { Button, Col, Row } from "antd";

const CreateDepartmentPage = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (err: any) {
      console.error(err.message);
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