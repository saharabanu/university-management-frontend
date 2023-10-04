import {Button, Row} from 'antd'
import Link from 'next/link'

const NotfoundPage = () => {
  return (
    <div>
      <Row justify='center' align='middle' style={{ backgroundColor: "#000", height:'100vh', color: "#fff"}}>
      <h1 style={{textAlign:"center",padding:'20px'}}>OOOPs!!!! This page does not found</h1>
      <br /> <br />
     <Button danger> <Link href='/'> Back To Home</Link></Button>
      
    </Row>
        
    </div>
  )
}

export default NotfoundPage 