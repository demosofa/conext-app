import { Button, Input, Select } from 'antd';
import './searchStartup.css';
import { Option } from 'antd/es/mentions';
import { CaretRightOutlined, SearchOutlined } from '@ant-design/icons';
import clone from 'utils/clone';
import { Link } from 'react-router-dom';

export const SearchStartup = ({ setFilterOptions }) => {
  // console.log(data);
  const listAllCategory = [
    'All category',
    'Advertising',
    'AgriTech',
    'Artificial Intelligent',
    'AR/VR',
    'Automotive',
    'Ecommerce',
    'Education',
    'Entertainment',
    'Enterprise Solutions',
    'Fintech',
    'Food & Beverage',
    'Healthcare',
    'Internet of Things',
    'Logistic & Supply Chain',
    'MedTech',
    'Platform',
    'Real Estate',
    'Tourism & Travel',
    'Manufacturing',
    'Cybersecurity',
  ];

  const listStatus = [
    'All Status',
    'No Funding',
    'Pre-seed',
    'Angel or Seed',
    'Series A',
    'Series B',
    'Series C',
    'Series D+',
    'Private Equity',
    'Debt Financing',
    'IPO',
  ];

  const handleSelectChangeCategory = (value) => {
    setFilterOptions((prev) => {
      const cloned = clone(prev);
      cloned.category = value;
      return cloned;
    });
  };

  const handleSelectChangeStatus = (value) => {
    setFilterOptions((prev) => {
      const cloned = clone(prev);
      cloned.status = value;
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

  return (
    <div className="search">
      <p style={{ padding: '50px 0px 0px 57px', fontSize: '18px' }}>
        <Link to={'/'} style={{ color: 'black' }}>
          Home
        </Link>
        <CaretRightOutlined /> <span style={{ color: 'grey' }}> Startups </span>
      </p>
      <h1 style={{ padding: '15px 0px 20px 57px' }}>Startups</h1>
      <div className="search-three">
        <Select
          defaultValue="All category"
          className="select-search"
          onChange={handleSelectChangeCategory}
        >
          {listAllCategory.map((category, index) => (
            <Option key={index.toString()} value={index ? category : ''}>
              {category}
            </Option>
          ))}
        </Select>
        <Select
          defaultValue="All status"
          className="select-search"
          onChange={handleSelectChangeStatus}
        >
          {listStatus.map((status, index) => (
            <Option key={index.toString()} value={index ? status : ''}>
              {status}
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
          <p className="title-search">
            Make your startup visible to investors <br /> network at Conext
          </p>
          <Button className="button-search">SUBMIT MY PROJECT</Button>
        </div>
      </div>
    </div>
  );
};
