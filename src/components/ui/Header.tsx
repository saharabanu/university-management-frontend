import { Layout,Button, Dropdown, Row, Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { getUserInfo, removeUserInfo } from '@/services/auth.service';
import { useRouter } from 'next/navigation';
import { authKey } from '@/constants/storage';
const { Header:AntHeader } = Layout;




const Header = () => {
    const router = useRouter();

    // remove user


const removeUser = () => {
    removeUserInfo(authKey)
    router.push("/login")
}
const { role } = getUserInfo() as any;

const items: MenuProps['items'] = [
    {
        key: '0',
        label: (
          <Button onClick={removeUser} type="text" danger >
            Logout
          </Button>
        ),
      }
]
  return (
    <AntHeader style= {{backgroundColor:"#fff"}} >
        <Row justify='end' align='middle'>
        <p
          style={{
            margin: "0px 5px",
          }}
        >
          {role}
        </p>
        <Dropdown menu={{ items }} >
        
        
    <Space wrap size={16}>
    
      <Avatar size="large" icon={<UserOutlined />} />
      
    </Space>
    </Dropdown>
        </Row>
    </AntHeader>
  )
}

export default Header