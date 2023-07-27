import { Col, Image, Row, Button } from 'antd';
import { useState } from 'react';
import './VoucherList.scss';

const voucherData = {
  createdAt: '2023-07-25T07:52:34.746Z',
  vourchers: [
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/19108943_99406985_35790756_17780126.png',
      title: '[BeansWorkspace] GET FREE 2-DAY PASS TICKETS for CoNextor',
      exp: '30th May 2021',
      desc: 'Welcome CoNextor to BeansWorkspace Beans offers customers 2-day free for using Workspace',
      city: 'DN',
      feat: false,
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/64997444_46246574_77800462_16390180.png',
      title: '[BeansWorkspace] GET FREE 2-DAY PASS TICKETS for CoNextor',
      exp: '30th May 2021',
      desc: 'Welcome CoNextor to BeansWorkspace Beans offers customers 2-day free for using Workspace',
      city: 'DN',
      feat: false,
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/55089944_13864010_74212248_59364091.png',
      title: '[IoT Space] special discount for conextors',
      exp: '28th Feb 2023',
      desc: 'Welcome CoNextor to BeansWorkspace Beans offers customers 2-day free for using Workspace',
      city: 'DN',
      feat: true,
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/74313383_53873570_78120201_17459810.png',
      title: 'Get promo code 10% discount with ciaoflora.com',
      exp: '30th Oct 2020',
      desc: 'Welcome CoNextor to BeansWorkspace Beans offers customers 2-day free for using Workspace',
      city: 'DN',
      feat: true,
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/11651098_65371620_44128630_19933593.png',
      title: '[Hanoi] GET 50% OFF at THAS Studio & Coworking Space :',
      exp: '30th Oct 2020',
      desc: 'Welcome CoNextor to BeansWorkspace Beans offers customers 2-day free for using Workspace',
      city: 'HN',
      feat: false,
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/61656657_61341284_49331954_21025502.png',
      title: '[Hanoi] GET PROMO CODE UP TO 15% DISCOUNT at GOO COWORKING',
      exp: '30th Oct 2020',
      desc: 'Welcome CoNextor to BeansWorkspace Beans offers customers 2-day free for using Workspace',
      city: 'HN',
      feat: false,
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/83954347_95613108_46665580_23806504.png',
      title: 'Promo code for 10% discount at ciaoflora.com',
      exp: '30th Oct 2020',
      desc: 'Welcome CoNextor to BeansWorkspace Beans offers customers 2-day free for using Workspace',
      city: 'HN',
      feat: true,
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/85149483_71434123_86236723_51831475.png',
      title: '[HCM] GET FREE 1-DAY FOR HOT DESK AT WORK LABS Co-working Space',
      exp: '30th Oct 2020',
      desc: 'Welcome CoNextor to BeansWorkspace Beans offers customers 2-day free for using Workspace',
      city: 'HCM',
      feat: false,
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/92978783_83516361_87324379_60609685.png',
      title: '[HCMC] GET PROMO UP TO 50% DISCOUNT at BLOCK 71 Saigon',
      exp: '30th Oct 2020',
      desc: 'Welcome CoNextor to BeansWorkspace Beans offers customers 2-day free for using Workspace',
      city: 'HCM',
      feat: false,
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/93695084_76150208_90998377_98268313.png',
      title:
        '[HCMC] GET PROMO CODE UP TO 50% DISCOUNT at URBANFRESH COWORKING SPACE',
      exp: '30th Oct 2020',
      desc: 'Welcome CoNextor to BeansWorkspace Beans offers customers 2-day free for using Workspace',
      city: 'HCM',
      feat: true,
    },
  ],
  name: 'vourchers',
  id: '5',
};

const VoucherItem = ({ voucher }) => {
  return (
    <Row className="voucher-item-container">
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

const VoucherList = () => {
  const { vourchers } = voucherData;
  const [numDisplayed, setNumDisplayed] = useState(5);
  const [buttonVisible, setButtonVisible] = useState(true); // Thêm state cho trạng thái của nút

  const handleShowMore = () => {
    setNumDisplayed((prevNum) => prevNum + 5);

    setButtonVisible(false);
  };

  return (
    <div className="voucher-list-container">
      <Row>
        <Col md={16}>
          <h3 className="voucher-list-heading">Get Vouchers</h3>
          {vourchers.slice(0, numDisplayed).map((voucher, index) => (
            <VoucherItem key={index} voucher={voucher} />
          ))}
          <Row>
            <Col md={3}></Col>
            <Col className="div-button" md={18}>
              <div className="buttons">
                {buttonVisible && (
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
          <FeatureList vouchers={vourchers} />
        </Col>
      </Row>
    </div>
  );
};

export default VoucherList;
