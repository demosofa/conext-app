import { Card, Col, Row } from 'antd';
import './SearchConext.css';
import useGet from 'hooks/useGet';
import { SearchUser } from './SearchUser';
import { useState } from 'react';

export default function SearchContext() {
  const { isLoading, data } = useGet('search-conext');
  const [lstFilter, setLstFilter] = useState([]);

  return (
    <>
      <div className="wrap-container">
        <SearchUser data={data} setLstFilter={setLstFilter} />
        <Row justify="center">
          {isLoading
            ? null
            : lstFilter?.map((item, index) => (
                <Col
                  key={index}
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
                        <p className="wrap-text-from">{item.from}</p>
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
    </>
  );
}