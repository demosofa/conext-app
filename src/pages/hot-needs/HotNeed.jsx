import { Button, Col, Row, Spin } from 'antd';
import { useCity } from 'hooks/useCity';
import useGet from 'hooks/useGet';
import HotNeedItem from '../../components/HotNeedItem/HotNeedItem';
import { useEffect, useState } from 'react';
import Category from '../../components/HotNeedCategory/Category';
import { SearchHotNeed } from '../../components/SearchHotNeed/SearchHotNeed';
import './HotNeed.css';

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
    : data &&
      data.filter(
        (item) =>
          item.city === city &&
          (category === 'all' || item.category === category) &&
          (search === '' ||
            item.title.toLowerCase().includes(search.toLowerCase()))
      );

  const isMoreButtonVisible = numDisplayed < listHotNeed.length;

  const categoryCounts = isLoading
    ? {}
    : data
        .filter((item) => item.city === city)
        .reduce((acc, item) => {
          const category = item.category;
          acc[category] = (acc[category] || 0) + 1;
          return acc;
        }, {});

  const totalItemCount = isLoading
    ? 0
    : data.filter((item) => item.city === city).length;

  useEffect(() => {
    setNumDisplayed(2);
    setSearch('');
    setCategory('all');
  }, [city]);

  return (
    <div>
      <SearchHotNeed setSearch={setSearch} />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Row style={{ width: '90%' }}>
          <Col md={6}>
            <br />
            <Category
              handleByCategory={handleByCategory}
              categoryCounts={categoryCounts}
              totalItemCount={totalItemCount}
            />
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
            <div className="div-button">
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
          <Col md={3}></Col>
          <Col md={5} xs={24}>
            <br />
            <p className="could-urgently-text">Could be urgently</p>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
    </div>
  );
};

export default HotNeed;
