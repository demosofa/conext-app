import { CaretRightOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { useCity } from 'hooks/useCity';
import useGet from 'hooks/useGet';
import { useEffect, useState } from 'react';
import FeatureList from '../../components/Feature/FeatureList';
import VoucherItem from '../../components/Vourcher/VourcherItem';
import '../vourcher/VoucherList.css';

const VoucherList = () => {
  const [numDisplayed, setNumDisplayed] = useState(3);
  const { isLoading, data } = useGet('vourchers');
  const { city } = useCity();

  const handleShowMore = () => {
    setNumDisplayed((prevNum) => prevNum + 5);
  };

  const lstVourcher = isLoading
    ? []
    : data.filter((voucher) => voucher.city === city);
  const isMoreButtonVisible = numDisplayed < lstVourcher.length;

  useEffect(() => setNumDisplayed(3), [city]);

  return (
    <div className="voucher-list-container">
      <p
        className="voucher-text"
        style={{ fontSize: '18px', padding: '30px 0' }}
      >
        <Link to={'/'} style={{ color: 'black', textDecoration: 'none' }}>
          Home
        </Link>
        <CaretRightOutlined />{' '}
        <span style={{ color: 'grey' }}>Get Vouchers </span>
      </p>
      <Row gutter={[30, 30]}>
        <Col md={16}>
          <h3 className="voucher-list-heading">Get Vouchers</h3>
          {lstVourcher.slice(0, numDisplayed).map((voucher, index) => (
            <VoucherItem key={index} voucher={voucher} />
          ))}
          <Row>
            <Col md={3}></Col>
            <Col className="div-button" md={18}>
              <div className="buttons">
                {isMoreButtonVisible && (
                  <Button
                    block
                    onClick={handleShowMore}
                    className="more-button raise"
                  >
                    More
                  </Button>
                )}
              </div>
            </Col>
            <Col md={3}></Col>
          </Row>
        </Col>
        <Col md={1}></Col>
        <Col md={7}>
          <FeatureList vouchers={lstVourcher} />
        </Col>
      </Row>
    </div>
  );
};

export default VoucherList;
