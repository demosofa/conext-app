import { Col, Image, Row } from 'antd';
import 'pages/vourcher/VoucherList.css';

const FeatureList = ({ vouchers }) => {
  const featuredVouchers = vouchers.filter((voucher) => voucher.feat);

  return (
    <div className="feature-list-container">
      <h3>Featured Vouchers</h3>
      {featuredVouchers.map((voucher, index) => (
        <Row
          className="feature-list-container-item"
          key={index}
          style={{
            padding: '10px',
            textAlign: 'left',
            borderBottom: '0.1rem solid #ddd',
          }}
        >
          <Col md={7} xs={24} style={{ margin: 'auto' }}>
            <Image src={voucher.img} />
          </Col>

          <Col md={14} xs={24}>
            <h4 style={{ fontWeight: '500' }}>{voucher.title}</h4>
            <p>Expried on : {voucher.exp}</p>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default FeatureList;
