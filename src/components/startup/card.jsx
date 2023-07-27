import { Card, Col, Row } from 'antd';
import './card.css';
import { SearchStartup } from '../search/searchStartup';

export const Cards = () => {
  //   const [startups, setStartup] = useState([]);

  //   useEffect(() => {
  //     fetch('https://64c07d080d8e251fd11220f8.mockapi.io/conext')
  //       .then((res) => res.json())
  //       .then((data) => setStartup(data));
  //   }, []);

  const listStartup = [
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/40333840_26875441_12729187_72109721.png',
      title: 'Shipway',
      info: {
        name: 'By Duong Minh Hung',
        desc: 'Logistic & Supply Chain',
      },
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/33412135_83262428_58486204_79077168.png',
      title: 'Shipway',
      info: {
        name: 'By Trinh Le',
        desc: 'Education',
      },
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/20822779_39080733_98940112_63525772.png',
      title: 'Shipway',
      info: {
        name: 'By Thinh Pham',
        desc: 'Education',
      },
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/18415641_57034120_75239829_97749801.png',
      title: 'Shipway',
      info: {
        name: 'By Quy Thi',
        desc: 'Ecommerce',
      },
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/54591211_48121044_40323256_90790517.png',
      title: 'Shipway',
      info: {
        name: 'By Vu Tran',
        desc: 'Automotive',
      },
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/68545835_48839481_38148750_28209533.png',
      title: 'Shipway',
      info: {
        name: 'By Jin Pham',
        desc: 'Enterprise Solutions',
      },
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/43947262_54772358_73387067_51732859.png',
      title: 'Shipway',
      info: {
        name: 'By Tam Pham',
        desc: 'Manufacturing',
      },
    },
    {
      img: 'https://conext-production.s3.ap-southeast-1.amazonaws.com/41328237_84814025_42659943_49748377.png',
      title: 'Shipway',
      info: {
        name: 'By Anh Le',
        desc: 'Platform',
      },
    },
  ];

  return (
    <div>
      {/* data={listStartup}  */}
      <SearchStartup />
      <Row gutter={[16, 16]}>
        {listStartup.map((card) => (
          <Col xs={24} sm={12} md={8} key={card.info.name}>
            <CardItem
              img={card.img}
              title={card.title}
              info={card.info.name}
              education={card.info.desc}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

const CardItem = ({ img, title, info, education }) => {
  return (
    <Card
      hoverable
      style={{
        width: '100%',
        marginBottom: 14,
      }}
      cover={
        <img
          className="zoom"
          style={{ borderBottom: '1px solid grey' }}
          src={img}
        />
      }
    >
      <p className="title-card">{title}</p>
      <hr />
      <div className="info-card">
        <img
          className="img-card"
          src="https://www.ldg.com.vn/media/uploads/uploads/21204609-hinh-anh-gai-xinh-1.jpg"
        />
        <div className="desc-card">
          <p className="name-card">{info}</p>
          <p className="education-card">{education}</p>
        </div>
      </div>
    </Card>
  );
};
