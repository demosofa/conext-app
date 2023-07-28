import { Col, Image, Row } from 'antd';
import 'pages/vourcher/VoucherList.css';

const VoucherItem = ({ voucher }) => {
  return (
    <Row className="voucher-item-container" justify={'space-between'}>
      <Col md={8} span={24}>
        <Image src={voucher.img} />
      </Col>
      <Col md={15} span={24}>
        <h4>{voucher.title}</h4>
        <p className="voucher-text">
          <strong>Exp:</strong> {voucher.exp}
          <span className="expired">Expired</span>
        </p>
        <p>{voucher.desc}</p>
      </Col>
    </Row>
  );
};

export default VoucherItem;
