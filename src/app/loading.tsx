import { Spin, Row} from 'antd';
const loading = () => {
  return (
    <Row justify='center' align='middle' style={{margin:'100px 0'}}>
       <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Row>
  )
}

export default loading