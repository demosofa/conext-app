import { Link } from 'react-router-dom';
import { CaretRightOutlined } from '@ant-design/icons';
import { Form, Input, Col, Row, Button } from 'antd';
import { useState } from 'react';

import Modal from 'antd/es/modal/Modal';
import './contact.css';

export const Contact = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isModalVisible2, setIsModalVisible2] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModal2 = () => {
    setIsModalVisible2(true);
  };

  const handleOk2 = () => {
    setIsModalVisible2(false);
    setIsModalVisible(false);
  };

  return (
    <>
      <p style={{ padding: '30px 0px 0px 50px', fontSize: '18px' }}>
        <Link to={'/'} style={{ color: 'black' }}>
          Home
        </Link>
        <CaretRightOutlined />
        <span style={{ color: 'grey' }}> Contact-us </span>
      </p>
      <h1 style={{ padding: '15px 0px 40px 50px' }}>Contact</h1>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12}>
          <div className="scroll-contact">
            <Form onFinish={showModal}>
              <p style={{ paddingLeft: 50, paddingBottom: 10 }}>
                Address: 14 An Thuong 18, Ngu Hanh Son, Da Nang
              </p>
              <p style={{ paddingLeft: 50, paddingBottom: 10 }}>
                Hotline: (+84) 777 463 183
              </p>
              <p style={{ paddingLeft: 50, paddingBottom: 20 }}>
                Email :
                <a style={{ textDecoration: 'none', color: 'black' }}>
                  hello@stunited.vn
                </a>
              </p>
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12}>
                  <div style={{ paddingLeft: 50 }}>
                    <p>Name</p>
                    <Form.Item
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </div>
                </Col>
                <Col className="padding-col" xs={24} sm={24} md={12}>
                  <p>E-mail</p>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        message: 'Please input your E-mail!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12}>
                  <div style={{ paddingLeft: 50 }}>
                    <p>Phone Number</p>
                    <Form.Item
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your phone!',
                        },
                      ]}
                    >
                      <Input style={{ width: '100%' }} />
                    </Form.Item>
                  </div>
                </Col>
                <Col className="padding-col" xs={24} sm={24} md={12}>
                  <p>Subject</p>
                  <Form.Item
                    name="subject"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your subject!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24}>
                  <div style={{ paddingLeft: 50 }}>
                    <p>Content</p>
                    <Form.Item
                      name="content"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your subject!',
                        },
                      ]}
                    >
                      <Input.TextArea
                        showCount
                        maxLength={100}
                        style={{ height: 135 }}
                      />
                    </Form.Item>
                  </div>
                </Col>
              </Row>
              <Form.Item style={{ paddingLeft: 50 }}>
                <Button
                  className="button-search"
                  type="primary"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col className="map-contact" xs={24} sm={24} md={11}>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="100%"
                height="450"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=116 Mai Thúc Lân, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam&t=&z=12&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </Col>
      </Row>
      <Modal
        title="Are you sure want to send this message to the Admin?"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={showModal2}>
            Yes, Send it!
          </Button>,
        ]}
      ></Modal>
      <Modal
        title="Thank you for send information to us"
        visible={isModalVisible2}
        onOk={handleOk2}
        cancelButtonProps={{ style: { display: 'none' } }}
      ></Modal>
    </>
  );
};
