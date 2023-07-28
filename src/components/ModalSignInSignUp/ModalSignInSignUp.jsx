import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal } from 'antd';
import { useState } from 'react';
import './ModalSignInSignUp.css'; // Import your custom CSS file

const ModalSignInSignUp = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleFormSubmit = (values) => {
    console.log(values);
    setVisible(false);
  };

  return (
    <>
      <br />
      <Button className="button-search button-search-post" onClick={showModal}>
        Create A New Post
      </Button>
      <Modal
        open={visible}
        title="Sign In"
        onCancel={handleCancel}
        footer={null}
        width={420}
        style={{ top: 20 }}
      >
        <Form onFinish={handleFormSubmit}>
          <div className="input-label">
            <label>Email</label>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Email is a required field',
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
          </div>
          <div className="input-label">
            <label>Password</label>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Password is a required field',
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
          </div>
          <Form.Item>
            <Button
              className="button-search"
              htmlType="submit"
              style={{ width: '100%' }}
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: 'center' }}>
          <p>or use</p>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button
              icon={<FacebookOutlined />}
              style={{
                backgroundColor: '#3b5998',
                color: 'white',
                width: '45%',
              }}
            >
              Facebook
            </Button>
            <Button
              icon={<GoogleOutlined />}
              style={{
                backgroundColor: '#dd4b39',
                color: 'white',
                width: '45%',
              }}
            >
              Google
            </Button>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p>
            You haven&apos;t an account?<a href="#">Sign Up</a>
          </p>
        </div>
      </Modal>
    </>
  );
};

export default ModalSignInSignUp;
