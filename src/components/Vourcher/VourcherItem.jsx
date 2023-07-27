import { Col, Image, Row } from 'antd';
import 'pages/vourcher/VoucherList.css';

const VoucherItem = ({ voucher }) => {
  return (
    <Row gutter={[30, 30]} className="voucher-item-container">
      <Col md={8} sm={24}>
        <Image src={voucher.img} />
      </Col>
      <Col md={16} sm={24} style={{ paddingLeft: '30px' }}>
        <h4>{voucher.title}</h4>
        <p>
          <strong>Exp:</strong> {voucher.exp}
          <span className="expired">Expired</span>
        </p>
        <p>{voucher.desc}</p>
      </Col>
    </Row>
  );
};

export default VoucherItem;
