import { Button, Input, Select } from 'antd';
import './SearchInvestment.css';
import { Option } from 'antd/es/mentions';
import { CaretRightOutlined, SearchOutlined } from '@ant-design/icons';
import clone from 'utils/clone';
import { Link } from 'react-router-dom';

export const SearchInvestment = ({ setFilterOptions }) => {
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

  const listLocation = [
    'All location',
    'HCMC-Vietnam',
    'Danang-Vietnam',
    'Hanoi-Vietnam',
    'Jakarta-Indonesia',
    'Bandung-Indonesia',
    'Bangkok-Thailand',
    'Chiang Mai -Thailand',
    'Yangon - Myanmar',
    'Manila - Philippine',
    'Others',
  ];

  const handleSelectChangeCategory = (value) => {
    setFilterOptions((prev) => {
      const cloned = clone(prev);
      cloned.category = value;
      return cloned;
    });
  };

  const handleSelectChangeLocation = (value) => {
    setFilterOptions((prev) => {
      const cloned = clone(prev);
      cloned.location = value;
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
        <CaretRightOutlined />{' '}
        <span style={{ color: 'grey' }}> Investments </span>
      </p>
      <h1 style={{ padding: '15px 0px 20px 57px' }}>
        {`Connect with Asia's top tech Investors`}
      </h1>
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
          defaultValue="All location"
          className="select-search"
          onChange={handleSelectChangeLocation}
        >
          {listLocation.map((location, index) => (
            <Option key={index.toString()} value={index ? location : ''}>
              {location}
            </Option>
          ))}
        </Select>
        <div style={{ position: 'relative' }}>
          <Input
            className="input-search"
            placeholder="Search name"
            onChange={handleSelectChangeSearch}
          ></Input>
          <SearchOutlined className="icon-search" />
        </div>
        <div className="description-search">
          <p className="title-search">
            Would you like to create new investment profile ?
          </p>
          <Button className="button-search">CREATE NEW</Button>
        </div>
      </div>
    </div>
  );
};
