import { Button, Input, Select } from 'antd';
import './SearchUser.css';
import { Option } from 'antd/es/mentions';
import { CaretRightOutlined, SearchOutlined } from '@ant-design/icons';
import clone from 'utils/clone';
import { Link, createSearchParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import categories from 'constants/categories';
import statuses from 'constants/statuses';

export const SearchUser = ({ searchParams }) => {
  const [filterOptions, setFilterOptions] = useState({
    conextor: '',
    industry: '',
    search: '',
  });

  const navigate = useNavigate();

  const handleSelectChangeConextor = (value) => {
    setFilterOptions((prev) => {
      const cloned = clone(prev);
      cloned.conextor = value;
      return cloned;
    });
  };

  const handleSelectChangeIndustry = (value) => {
    setFilterOptions((prev) => {
      const cloned = clone(prev);
      cloned.industry = value;
      return cloned;
    });
  };

  const handleSelectChangeSearch = (e) => {
    setFilterOptions((prev) => {
      const cloned = clone(prev);
      cloned.search = e.target.value;
      return cloned;
    });
  };

  const handleFilter = () => {
    navigate({
      pathname: '/search',
      search: `?${createSearchParams(filterOptions)}`,
    });
  };

  return (
    <div className="search">
      <p style={{ padding: '50px 0px 0px 57px', fontSize: '18px' }}>
        <Link to={'/'} style={{ color: 'black' }}>
          Home
        </Link>
        <CaretRightOutlined />{' '}
        <span style={{ color: 'grey' }}> Search User </span>
      </p>
      <h1 style={{ padding: '15px 0px 20px 57px' }}>Search User</h1>
      <div className="search-three">
        <p className="title-search-p">Conextors</p>
        <Select
          defaultValue={
            searchParams.size
              ? searchParams.get('conextor')
              : 'All Business type'
          }
          className="select-search"
          onChange={handleSelectChangeConextor}
        >
          {categories.map((category, index) => (
            <Option key={index.toString()} value={index ? category : ''}>
              {category}
            </Option>
          ))}
        </Select>
        <p className="title-search-p">in somes industry:</p>
        <Select
          defaultValue={
            searchParams.size ? searchParams.get('industry') : 'All status'
          }
          className="select-search"
          onChange={handleSelectChangeIndustry}
        >
          {Object.entries(statuses).map(([key, value], index) => (
            <Option key={index.toString()} value={index ? value : ''}>
              {key}
            </Option>
          ))}
        </Select>
        <div style={{ position: 'relative' }}>
          <Input
            className="input-search"
            placeholder="Search Startups"
            onChange={handleSelectChangeSearch}
          ></Input>
          <SearchOutlined className="icon-search" />
        </div>
        <div className="description-search">
          <Button className="button-search" onClick={handleFilter}>
            Find
          </Button>
        </div>
      </div>
    </div>
  );
};
