import { Col, Row } from "antd"
import FormInput from "../forms/FormInput"
import FormTextArea from "../forms/FormTextArea"


const GuardianInfo = () => {
  return (
    <>
    <div style={{padding: '10px', border:'1px solid #d9d9d9', borderRadius:'5px',  marginBottom:'10px'}}>
            {/* basic information */}
            <p style={{marginBottom:'10px', fontSize:'20px'}}>Guardian Information</p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormInput
                  name="student.guardian.fatherName"
                  type="text"
                  label="Father Name"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormInput
                  name="student.guardian.fatherOccupation"
                  type="text"
                  label="Father Occupation"
                  size="large"
                />
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormInput name="student.guardian.fatherContactNo" type="number" label="Father Contact No" size="large" />
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormInput name="motherName" type="text" label="motherName" size="large" />
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormInput name="motherOccupation" type="text" label="Mother Occupation" size="large" />
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormInput name="motherContactNo" type="number" label="Mother Contact No" size="large" />
              </Col>
              <Col className="gutter-row" span={8} style={{marginBottom:'10px'}}>
                <FormTextArea name="student.guardian.address" label=" Address" size="large" rows={4}/>
              </Col>
              
              
              
              

              
              
              
              
              
            </Row>
            
          </div>
    
    </>
  )
}

export default GuardianInfo