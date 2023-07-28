import { Col, Select } from 'antd';
import categories from 'constants/categories';
import statuses from 'constants/statuses';
import { Link, createSearchParams } from 'react-router-dom';
import './communitsearch.css';
import LineTitle from 'components/LineTitle/LineTitle';
import { useState } from 'react';
import clone from 'utils/clone';

const { Option } = Select;

export default function CommunitySearch() {
  const [filterOptions, setFilterOptions] = useState({
    conextor: '',
    industry: '',
  });

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

  return (
    <Col
      className="community-search"
      span={20}
      md={7}
      style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
    >
      <LineTitle title="Meetup Community" />
      <p>
        {`Let's explore people belonging to the local digital community! Gather to
        network, collaborate, and exchange ideas!`}
      </p>
      <Select
        size={'large'}
        defaultValue={categories[0]}
        style={{ width: '100%' }}
        onChange={handleSelectChangeConextor}
      >
        {categories.map((category) => (
          <Option key={category} value={category}>
            {category}
          </Option>
        ))}
      </Select>
      <p>Looking for Conextors in</p>
      <Select
        size="large"
        defaultValue={statuses[Object.keys(statuses)[0]]}
        style={{ width: '100%' }}
        onChange={handleSelectChangeIndustry}
      >
        {Object.entries(statuses).map(([key, value]) => (
          <Option key={key} value={value}>
            {key}
          </Option>
        ))}
      </Select>
      <Link
        to={{
          pathname: '/search',
          search: `?${createSearchParams(filterOptions)}`,
        }}
      >{`Let's meet`}</Link>
    </Col>
  );
}
