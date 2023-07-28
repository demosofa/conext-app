import { Button, Col, Row, Spin } from 'antd';
import { useCity } from 'hooks/useCity';
import useGet from 'hooks/useGet';
import HotNeedItem from '../HotNeedItem/HotNeedItem';
import { useEffect, useState } from 'react';
import Category from '../HotNeedCategory/Category';
import { SearchHotNeed } from './SearchHotNeed';

const HotNeed = () => {
  const [numDisplayed, setNumDisplayed] = useState(2);
  const { isLoading, data } = useGet('hotNeeds');
  const { city } = useCity();
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');

  const handleShowMore = () => {
    setNumDisplayed((prevNum) => prevNum + 5);
  };

  const handleByCategory = (selectedCategory) => {
    setCategory(selectedCategory);
    setNumDisplayed(2);
  };

  const listHotNeed = isLoading
    ? []
    : data.filter(
        (item) =>
          item.city === city &&
          (category === 'all' || item.category === category) &&
          item.title.toLowerCase().includes(search.toLowerCase()) // Filter by search input
      );
  const isMoreButtonVisible = numDisplayed < listHotNeed.length;

  useEffect(() => {
    setNumDisplayed(2);
  }, [city]);

  return (
    <div>
      <SearchHotNeed setSearch={setSearch} />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Row style={{ width: '90%' }}>
          <Col md={6}>
            <br />
            <Category handleByCategory={handleByCategory} />
          </Col>
          <Col md={9}>
            {isLoading ? (
              <Spin />
            ) : (
              listHotNeed.slice(0, numDisplayed).map((item, index) => (
                <Col key={index} md={24} className="row-wrap">
                  <HotNeedItem item={item} />
                </Col>
              ))
            )}
            <div style={{ textAlign: 'center' }} className="div-button">
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
            </div>
          </Col>
          <Col md={9}>
            <br />
            <h3
              style={{
                borderBottom: '.1875rem solid #ddd',
                padding: '20px',
              }}
            >
              Could be urgently
            </h3>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HotNeed;
