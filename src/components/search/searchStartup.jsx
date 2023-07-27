import { Button, Input, Select } from 'antd';
import './searchStartup.css';
import { Option } from 'antd/es/mentions';
import { SearchOutlined } from '@ant-design/icons';
// import { useState } from 'react';

export const SearchStartup = () => {
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
  // const [input, setInput] = useState(data);
  // const [searchTerm, setSearchTerm] = useState('');

  // const handleSearch = (e) => {
  //   const value = e.target.value;
  //   setSearchTerm(value);
  //   const filteredData = data?.filter((item) =>
  //     item.toLowerCase().includes(value.toLowerCase())
  //   );
  //   setInput(filteredData);
  // };

  const handleSelectChangeCategory = (value) => {
    console.log('Selected value:', value);
  };

  const handleSelectChangeStatus = (value) => {
    console.log('Selected value:', value);
  };

  return (
    <div className="search">
      <h2>Startups</h2>
      <div className="search-three">
        <Select
          defaultValue="All category"
          className="select-search"
          onChange={handleSelectChangeCategory}
        >
          {listAllCategory.map((category, index) => (
            <Option key={index.toString()} value={category}>
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
            <Option key={index.toString()} value={status}>
              {status}
            </Option>
          ))}
        </Select>
        <div style={{ position: 'relative' }}>
          <Input
            className="input-search"
            placeholder="Search Startups"
            // onChange={handleSearch}
            // value={searchTerm}
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
