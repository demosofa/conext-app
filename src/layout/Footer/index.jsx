import { Row, Col, Image } from 'antd';
import { Link } from 'react-router-dom';
import './style.css';

const logos = [
  {
    to: 'https://heppi.net/',
    image:
      'https://conext-production.s3.ap-southeast-1.amazonaws.com/81117382_27385972_39460188_29384504.png',
  },
  {
    to: 'https://stunited.vn/',
    image:
      'https://conext-production.s3.ap-southeast-1.amazonaws.com/65073885_63481675_52316868_19688546.png',
  },
  {
    to: 'https://ciaoflora.com/',
    image:
      'https://conext-production.s3.ap-southeast-1.amazonaws.com/89195353_15553923_83740473_19429978.png',
  },
  {
    to: 'http://iotcoworkingspace.com/',
    image:
      'https://conext-production.s3.ap-southeast-1.amazonaws.com/95377956_96814966_96323525_49547344.png',
  },
  {
    to: 'https://madeindanang.com/',
    image:
      'https://conext-production.s3.ap-southeast-1.amazonaws.com/64271580_60163244_17378348_73394412.png',
  },
];

export default function Footer() {
  return (
    <section className="footer">
      <Row
        gutter={[16, 16]}
        align="middle"
        style={{
          maxWidth: '83.125rem',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {logos.map(({ to, image }) => (
          <Col span={8} lg={4} key={to} style={{ textAlign: 'center' }}>
            <Link to={to} target="_blank" rel="noopener noreferrer">
              <Image
                style={{ maxHeight: '12vh' }}
                preview={false}
                src={image}
              />
            </Link>
          </Col>
        ))}
      </Row>
      <Row></Row>
    </section>
  );
}
