import { Row, Col, Image, Grid } from 'antd';
import { Link } from 'react-router-dom';
import './style.css';
import links from 'constants/links';

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
const { useBreakpoint } = Grid;
export default function Footer() {
  const { lg } = useBreakpoint();
  return (
    <section className="footer">
      <Row
        gutter={[16, 16]}
        align="middle"
        justify="center"
        style={{ padding: '1.5625rem 0' }}
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
      <Row
        justify="space-between"
        wrap={false}
        style={{ borderTop: '1px solid white', padding: '2.875rem 0' }}
      >
        <Col
          span={12}
          lg={4}
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginRight: '5vw',
          }}
        >
          <Link to="/">
            <Image
              style={{ maxHeight: '30px' }}
              preview={false}
              src="https://conext-production.s3.ap-southeast-1.amazonaws.com/logo_footer.png"
            />
          </Link>
          <span
            style={{
              display: 'block',
              fontSize: '.8125rem',
              color: '#5c6369',
              marginTop: '1.0625rem',
            }}
          >
            © 2020 CoNEXT
          </span>
        </Col>
        {lg ? (
          <Col span={16}>
            <Row wrap={true} align={'middle'} justify={'center'}>
              {links.slice(1).map(({ label, to }) => (
                <Col
                  span={6}
                  key={label}
                  style={{
                    padding: '0.9375rem !important',
                    lineHeight: '.9375rem',
                  }}
                >
                  <Link style={{ color: 'white' }} to={to}>
                    {label.toUpperCase()}
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>
        ) : null}
        <Col span={12} lg={4} style={{ textAlign: 'center' }}>
          <Link to="https://www.facebook.com/conext.asia">Facebook </Link>
          <Link to="https://www.linkedin.com/company/conextvietnam">
            LinkedIn
          </Link>
        </Col>
      </Row>
    </section>
  );
}
