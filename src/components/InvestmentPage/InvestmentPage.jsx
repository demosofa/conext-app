import { Col, Row, Table } from 'antd';
import './InvestmentsPage.css';
import useGet from 'hooks/useGet';
import { SearchInvestment } from './SearchInvestment/SearchInvestment';
import { useState } from 'react';
import { useEffect } from 'react';

const columns = [
  {
    title: 'Investor',
    dataIndex: 'Investor',
    key: 'Investor',
    render: (text, record) => (
      <div>
        <Row>
          <Col>
            <img
              src={record.Investor.img}
              alt={record.Investor.title}
              className="image-container"
            />
          </Col>
          <Col span={1}></Col>
          <Col span={10}>
            <div>
              <h3 className="title-h3">{record.Investor.title}</h3>
              <p className="title-p">{record.Investor.desc}</p>
            </div>
          </Col>
        </Row>
      </div>
    ),
  },
  {
    title: 'Locations',
    dataIndex: 'Locations',
    key: 'Locations',
    render: (text, record) => (
      <ul>
        {record.Locations.map((location, index) => (
          <p key={index}>{location}</p>
        ))}
      </ul>
    ),
  },
  {
    title: 'Sectors',
    dataIndex: 'Sectors',
    key: 'Sectors',
    render: (text, record) => (
      <ul>
        {record.Sectors.map((sector, index) => (
          <p key={index}>{sector}</p>
        ))}
      </ul>
    ),
  },
  {
    title: 'Range',
    dataIndex: 'Range',
    key: 'Range',
    render: (text, record) => (
      <div>
        ${record.Range[0]} - ${record.Range[1]}
      </div>
    ),
  },
];

const InvestmentPage = () => {
  const { isLoading, data } = useGet('investments');
  const [lstFilter, setLstFilter] = useState([]);

  const [filterOptions, setFilterOptions] = useState({
    category: '',
    location: '',
    search: '',
  });

  useEffect(() => {
    if (!isLoading) {
      const { category, location, search } = filterOptions;
      const filteredData = data.filter(({ Locations, Sectors, Investor }) => {
        return (
          (category ? Sectors.includes(category) : true) &&
          (location ? Locations.includes(location) : true) &&
          Investor.title.toLowerCase().includes(search.toLowerCase())
        );
      });
      setLstFilter(filteredData);
    }
  }, [isLoading, filterOptions]);

  return (
    <>
      <SearchInvestment setFilterOptions={setFilterOptions} />
      <Table
        columns={columns}
        dataSource={isLoading ? null : lstFilter}
        rowKey={(record) => record.Investor.img}
      />
    </>
  );
};

export default InvestmentPage;
