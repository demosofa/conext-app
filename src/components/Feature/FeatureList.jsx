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
            padding: '1.875rem 0',
            textAlign: 'left',
            borderBottom: '0.1rem solid #ddd',
          }}
        >
          <Col span={6} style={{ marginRight: 'auto' }}>
            <Image src={voucher.img} />
          </Col>

          <Col span={17}>
            <h4 style={{ fontWeight: '500', marginBottom: '.5em' }}>
              {voucher.title}
            </h4>
            <p className="voucher-text">Expried on : {voucher.exp}</p>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default FeatureList;
