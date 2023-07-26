import { Table } from 'antd';
import './InvestmentsPage.css';

const columns = [
  {
    title: 'Investor',
    dataIndex: 'Investor',
    key: 'Investor',
    render: (text, record) => (
      <div>
        <img src={record.Investor.img} alt={record.Investor.title} />
        <div>
          <h3>{record.Investor.title}</h3>
          <p>{record.Investor.desc}</p>
        </div>
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

const data = [
  {
    key: '1',
    Investor: {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/13446144_46460487_99662322_52002959.png',
      title: 'Febe Venture',
      desc: 'We apply a value-added approach, backing the best founders and offering our local bus...',
    },
    Locations: ['HCMC-Vietnam', 'Hanoi-Vietnam', 'Danang-Vietnam'],
    Sectors: ['Ecommerce', 'Education', 'Logistic & Supply Chain'],
    Range: [200000, 1000000],
  },
  {
    Investor: {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/60204964_42958949_78595942_89188115.png',
      title: 'Draper Startup House',
      desc: 'We apply a value-added approach, backing the best founders and offering our local bus...',
    },
    Locations: ['HCMC-Vietnam', 'Hanoi-Vietnam', 'Danang-Vietnam'],
    Sectors: ['Ecommerce', 'Education', 'Logistic & Supply Chain'],
    Range: [200000, 1000000],
  },
  {
    Investor: {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/54217015_67926000_75741021_90989591.png',
      title: 'Block 71 Saigon',
      desc: 'We apply a value-added approach, backing the best founders and offering our local bus...',
    },
    Locations: ['HCMC-Vietnam', 'Hanoi-Vietnam', 'Danang-Vietnam'],
    Sectors: ['Ecommerce', 'Education', 'Logistic & Supply Chain'],
    Range: [200000, 1000000],
  },
  {
    Investor: {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/54725110_40920331_60225418_75369709.png',
      title: 'Unorthodox Ventures',
      desc: 'We apply a value-added approach, backing the best founders and offering our local bus...',
    },
    Locations: ['HCMC-Vietnam', 'Hanoi-Vietnam', 'Danang-Vietnam'],
    Sectors: ['Ecommerce', 'Education', 'Logistic & Supply Chain'],
    Range: [200000, 1000000],
  },
];

const InvestmentsPage = () => <Table columns={columns} dataSource={data} />;

export default InvestmentsPage;
