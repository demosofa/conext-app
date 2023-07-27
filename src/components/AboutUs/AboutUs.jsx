import { CaretRightOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';
import './AboutUs.css';
import { Col, Row } from 'antd';

const AboutUs = () => {
  return (
    <div className="about-container">
      <Row>
        <Col span={2}></Col>
        <Col>
          <p className="about-p">
            <Link to={'/'} style={{ color: 'black' }} className="about-link">
              Home
            </Link>
            <CaretRightOutlined />
            <span style={{ color: 'grey' }}> About Us </span>
          </p>
          <h1 className="about-h1">About</h1>
        </Col>
      </Row>
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
          <div>
            <p className="about-text">
              In the end of 2017, founders of ST United company decided to
              invest in coworking space business after long time focusing mainly
              on offshore software development industry.
            </p>
            <p className="about-text">
              Later, from April 2018, there were 2 new coworking spaces in
              Danang city , IoT Space and Nomad Space. It has been a new amazing
              journey for the founders and they figured out that behind this low
              margin business, coworking space unlike any other office rental
              facilities, it has a philosophy and contains core values including
              collaboration, openness, sustainability, accessibility, and
              community, being a key propellant to why coworking space has
              become a global trend in business.
            </p>
            <p className="about-text">
              And the idea of Conext is come up with above core values.
            </p>
            <p className="about-text">
              Conext offers a vibrant atmosphere where you can meet others, find
              partner/cofounder, network, schedule meetups, and most importantly
              accelerate your works through collaboration with local digital
              community in Vietnam.
            </p>
            <p className="about-text">
              At Conext, you could connect with startups, digital nomads,
              freelancers or even investor, incubators…who’s belonging to the
              community from massive of coworking spaces in the busiest cities
              in Vietnam.
            </p>
            <p className="about-text">
              Will you join our community, and together we continue writing our
              story ?
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
