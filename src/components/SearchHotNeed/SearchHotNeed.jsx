import { CaretRightOutlined, SearchOutlined } from '@ant-design/icons';
import { Row, Col, Input } from 'antd';
import ModalSignInSignUp from 'components/ModalSignInSignUp/ModalSignInSignUp';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchHotNeed.css';

export const SearchHotNeed = ({ setSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSelectChangeSearch = (e) => {
    if (e.key === 'Enter') {
      setSearch(e.target.value);
    }
  };

  const handleSearchClick = () => {
    setSearch(searchValue);
  };

  useEffect(() => {
    setSearchValue('');
  }, []);

  return (
    <div className="search">
      <div className="search-container">
        <div className="search-header">
          <p>
            <Link to={'/'} className="home-link">
              Home
            </Link>
            <CaretRightOutlined />{' '}
            <span className="hot-needs-text">Hot Needs</span>
          </p>
          <p className="hot-needs-title">Hot Needs</p>
        </div>
      </div>

      <div className="search-three" style={{ alignItems: 'center' }}>
        <Row className="search-content">
          <Col sm={24} className="left-content">
            <p className="search-content-title">
              Conext community will take care about your need
            </p>
            <div className="input-container">
              <Input
                className="input-search"
                placeholder="Find something"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyUp={handleSelectChangeSearch}
              />
              <SearchOutlined
                style={{ paddingBottom: '10px' }}
                className="icon-search"
                onClick={handleSearchClick}
              />
            </div>
          </Col>

          <Col sm={24} xs={24} className="description-search">
            <ModalSignInSignUp />
          </Col>
        </Row>
      </div>
    </div>
  );
};
