import { Col, Row } from "antd"
import FormInput from "../forms/FormInput"
import FormTextArea from "../forms/FormTextArea"


const LocalGuardianInfo = () => {
  return (
    <>
    <div style={{padding: '10px', border:'1px solid #d9d9d9', borderRadius:'5px',  marginBottom:'10px'}}>
            {/* basic information */}
            <p style={{marginBottom:'10px', fontSize:'20px'}}>Basic Information</p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormInput
                  name="student.localGuardian.name"
                  type="text"
                  label="Local Guardian Name"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormInput
                  name="student.localGuardian.occupation"
                  type="text"
                  label="Local Guardian Occupation"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormInput name="student.localGuardian.contactNo" type="number" label="Local Guardian Contact No" size="large" />
              </Col>
             
              
              

              <Col className="gutter-row" span={12} style={{marginBottom:'10px'}}>
                <FormTextArea name="student.localGuardian.address"  label="Local Guardian Address" size="large" rows={4}/>
              </Col>
              
              
              
              
              
            </Row>
            
          </div>
    
    </>
  )
}

export default LocalGuardianInfo