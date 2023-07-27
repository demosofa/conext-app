import { Col, Row, Table } from 'antd';
import './InvestmentsPage.css';
import useGet from 'hooks/useGet';

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
        {record.Locations.map((location) => (
          <p key={location}>{location}</p>
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
        {record.Sectors.map((sector) => (
          <p key={sector}>{sector}</p>
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
  console.log(data);
  return (
    <>
      <Table columns={columns} dataSource={isLoading ? null : data} />;{' '}
    </>
  );
};

export default InvestmentPage;
