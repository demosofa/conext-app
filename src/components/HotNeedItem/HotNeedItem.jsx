import { Avatar, Card, Tag } from 'antd';
import Meta from 'antd/es/card/Meta';
import './HotNeedItem.css';

const HotNeedItem = ({ item }) => {
  return (
    <Card className="hot-need-card">
      <a href="#" className="hot-need-title-link">
        <p className="hot-need-title">{item.title}</p>
      </a>
      <Tag className="hot-need-discussion-tag">
        {item.discussion} Disscussion
      </Tag>
      <br />
      <br />
      <Meta
        avatar={<Avatar src={item.info.img} />}
        title={item.info.name}
        description={item.info.date}
        className="hot-need-avatar"
      />
      <br />
      <p className="hot-need-description">{item.desc}</p>
      <p className="hot-need-deadline">
        Deadline: {item.deadline} <Tag className="expired">Expired</Tag>
      </p>
    </Card>
  );
};

export default HotNeedItem;
