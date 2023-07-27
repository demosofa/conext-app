import { Button, Input, Select } from 'antd';
import './SearchUser.css';
import { Option } from 'antd/es/mentions';
import { CaretRightOutlined, SearchOutlined } from '@ant-design/icons';
import clone from 'utils/clone';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCity } from 'hooks/useCity';
import { useEffect } from 'react';

export const SearchUser = ({ data, setLstFilter }) => {
  const listAllCategory = [
    'All Business type',
    'Incubator/Accelerator',
    'Startup',
    'Corporate',
    'Investor/Venture',
    'Startup eco-system',
    'Government',
    'Freelancer',
  ];

  const listStatus = {
    'All Expertise': 'al',
    'No Funding': 'nf',
    'Internet of Things': 'it',
    'NGO ': 'n',
    'Hospitality ': 'h',
    'Real estate': 're',
    'Investment ': 'i',
    'Legacy ': 'l',
    'Software Development': 'sd',
    'Business & Magement': 'bm',
  };

  const [filterOptions, setFilterOptions] = useState({
    contextor: '',
    industry: '',
    search: '',
  });

  const { city } = useCity();

  const handleSelectChangeContextor = (value) => {
    setFilterOptions((prev) => {
      const cloned = clone(prev);
      cloned.contextor = value;
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
    const { contextor, industry, search } = filterOptions;
    const filteredData = data.filter(
      ({ 'key-search': keySearch, rule, name, city: storedCity }) => {
        return (
          name.toLowerCase().includes(search.toLowerCase()) &&
          (contextor ? rule.includes(contextor) : true) &&
          keySearch.includes(industry) &&
          city === storedCity
        );
      }
    );
    setLstFilter(filteredData);
  };

  useEffect(() => {
    if (data) {
      setLstFilter(data.filter((item) => item.city === city));
    }
  }, [data]);

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
          defaultValue="All Business type"
          className="select-search"
          onChange={handleSelectChangeContextor}
        >
          {listAllCategory.map((category, index) => (
            <Option key={index.toString()} value={index ? category : ''}>
              {category}
            </Option>
          ))}
        </Select>
        <p className="title-search-p">in somes industry:</p>
        <Select
          defaultValue="All status"
          className="select-search"
          onChange={handleSelectChangeIndustry}
        >
          {Object.entries(listStatus).map(([key, value], index) => (
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
