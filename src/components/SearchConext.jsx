import { Card, Col, Row } from 'antd';
import './SearchConext.css';

export default function SearchContext() {
  const data = [
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/57366564_36921537_27573725_49233608.png',
      name: 'An Luong',
      from: null,
      rule: ['Software Development', 'Freelancer'],
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/27127131_88220256_29943421_98951309.png',
      name: 'Chris Nguyen',
      from: 'Viet Nam',
      rule: ['Software Development', 'Freelancer'],
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/29388871_12401329_71354276_15303634.png',
      name: 'Nghia Vo',
      from: null,
      rule: [],
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/71350017_45859038_57406748_98603351.png',
      name: 'Thanh Tran',
      from: null,
      rule: [],
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/27127131_88220256_29943421_98951309.png',
      name: 'Chris Nguyen',
      from: 'Viet Nam',
      rule: ['Software Development', 'Freelancer'],
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/27127131_88220256_29943421_98951309.png',
      name: 'Chris Nguyen',
      from: 'Viet Nam',
      rule: ['Software Development', 'Freelancer'],
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/27127131_88220256_29943421_98951309.png',
      name: 'Chris Nguyen',
      from: 'Viet Nam',
      rule: ['Software Development', 'Freelancer'],
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/27127131_88220256_29943421_98951309.png',
      name: 'Chris Nguyen',
      from: 'Viet Nam',
      rule: ['Software Development', 'Freelancer'],
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/27127131_88220256_29943421_98951309.png',
      name: 'Chris Nguyen',
      from: 'Viet Nam',
      rule: ['Software Development', 'Freelancer'],
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/27127131_88220256_29943421_98951309.png',
      name: 'Chris Nguyen',
      from: 'Viet Nam',
      rule: ['Software Development', 'Freelancer'],
    },
  ];

  return (
    <div className="wrap-container">
      <Row justify="center">
        {data.map((item) => (
          <Col
            key={item.id}
            xs={24}
            // sm={8}
            md={11}
            lg={7}
            xl={5}
            className="row-wrap"
          >
            <Card
              hoverable
              className="card-wrap"
              style={{ padding: '0' }}
              cover={
                <>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      alt={item.title}
                      src={item.img}
                      style={{
                        borderRadius: '50%',
                        height: '110px',
                        width: '110px',
                        textAlign: 'center',
                      }}
                    />
                  </div>
                  <h3 className="wrap-text-name">{item.name}</h3>
                  <hr></hr>
                  <div className="wrap-title">
                    <p className="wrap-text-p">{item.rule[0]}</p>
                    <p className="wrap-text-p">{item.rule[1]}</p>
                  </div>
                </>
              }
            ></Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
