import { Button, Card, Col, Row } from 'antd';
import './card.css';
import { SearchStartup } from '/ex-reactjs/conext-app/src/components/search/searchStartup';
import useGet from '../../hooks/useGet';
import { useEffect, useState } from 'react';
import { useCity } from 'hooks/useCity';

export const Cards = () => {
  const { city } = useCity();

  const { isLoading, data } = useGet('startup');

  const [buttonVisible, setButtonVisible] = useState(true);

  const [visibleCards, setVisibleCards] = useState(6);

  const [lstFilter, setLstFilter] = useState([]);

  const [filterOptions, setFilterOptions] = useState({
    category: '',
    status: '',
    search: '',
  });

  const handleShowMore = () => {
    setVisibleCards(data.length);
    setButtonVisible(false);
  };

  useEffect(() => {
    if (!isLoading) {
      const { category, status, search } = filterOptions;
      const filteredData = data.filter(
        ({ info: { desc, name }, title }) =>
          name.toLowerCase().includes(search.toLowerCase()) &&
          desc.includes(category) &&
          title.includes(status)
      );
      setLstFilter(filteredData);
    }
  }, [isLoading, filterOptions]);

  return (
    <div>
      <SearchStartup setFilterOptions={setFilterOptions} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Row gutter={[30, 30]} style={{ width: '90%' }}>
          {isLoading
            ? null
            : lstFilter
                .slice(0, visibleCards)
                .filter((startup) => startup.city === city)
                .map((startup) => (
                  <Col span={6} xs={24} sm={12} md={8} key={startup.info.name}>
                    <CardItem
                      img={startup.img}
                      title={startup.title}
                      info={startup.info.name}
                      education={startup.info.desc}
                    />
                  </Col>
                ))}
          {buttonVisible && (
            <Col className="div-button" md={24}>
              <div
                className="buttons"
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <Button
                  block
                  onClick={handleShowMore}
                  className="more-button raise"
                  style={{
                    width: '300px',
                    marginBottom: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  More
                </Button>
              </div>
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
};

const CardItem = ({ img, title, info, education }) => {
  return (
    <Card
      hoverable
      style={{
        width: '100%',
        marginBottom: 14,
      }}
      cover={
        <img
          className="zoom"
          style={{ borderBottom: '1px solid grey' }}
          src={img}
        />
      }
    >
      <p className="title-card">{title}</p>
      <hr />
      <div className="info-card">
        <img
          className="img-card"
          src="https://www.ldg.com.vn/media/uploads/uploads/21204609-hinh-anh-gai-xinh-1.jpg"
        />
        <div className="desc-card">
          <p className="name-card">{info}</p>
          <p className="education-card">{education}</p>
        </div>
      </div>
    </Card>
  );
};
