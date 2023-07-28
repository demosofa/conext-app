import { CaretRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './FAQPage.css';
import { Col, Row } from 'antd';

const FAQPage = () => {
  return (
    <div>
      <Row>
        <Col span={2}></Col>
        <Col>
          <p className="about-p">
            <Link to={'/'} style={{ color: 'black' }} className="about-link">
              Home
            </Link>
            <CaretRightOutlined />
            <span style={{ color: 'grey' }}> FAQ </span>
          </p>
          <h1 className="about-h1">Frequently Asked Questions</h1>
        </Col>
      </Row>
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
          <div>
            <p className="about-text-top">
              How can I meet up with other conexters?
            </p>
            <p className="about-text-bottom">
              {` When you log in to your account, you can see Meetup Community. Please choose positions or industries of Conextor who you want to meet, and click let’s meet to connect with them.`}
            </p>
            <p className="about-text-bottom">abc</p>
            <p className="about-text-bottom">test</p>
            <p className="about-text-top">How to create an account?</p>
            <p className="about-text-bottom">
              On the menu bar, please choose join Conextor. Now, you can either
              create a new account by providing your name, email and password or
              use your Facebook/Google account to sign up.
            </p>
            <p className="about-text-top">Who is CoNEXTer?</p>
            <p className="about-text-bottom">
              Conextor is a community for information and communications
              technology (ICT ) members, investors, venture companies or even
              people who are seeking jobs in technology and want to find more
              information about job market.
            </p>
            <p className="about-text-top">
              How can I change my account information?
            </p>
            <p className="about-text-bottom">
              On the menu bar, please click on your profile picture.
            </p>
            <p className="about-text-bottom">
              Looking to your left hand side, you will see a menu bar. Click
              “Update Profile” to change your personal information
            </p>
            <p className="about-text-top">How can I get a voucher?</p>
            <p className="about-text-bottom">
              Scroll down to see “Explore” part. You can see “Vouchers” in your
              left hand side. Click on to find your vouchers!
            </p>
            <p className="about-text-bottom">
              When you choose a voucher, you can click on get voucher code.
              After clicking on the button, you can see your code and validation
              of your vouchers
            </p>
            <p className="about-text-bottom">
              You can also see all your vouchers by click “View my vouchers”
              button.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FAQPage;
