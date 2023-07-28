import { Col, Row } from 'antd';
import CommunityPeople from 'components/CommunityPeople/CommunityPeople';
import CommunitySearch from 'components/CommunitySearch/CommunitySearch';
import useGet from 'hooks/useGet';
import './style.css';
import explories from 'constants/explories';
import LineTitle from 'components/LineTitle/LineTitle';
import { Link } from 'react-router-dom';

export default function Home() {
  const { isLoading, data } = useGet('home');

  return (
    <section className="homepage">
      <Row justify={'space-around'} style={{ padding: '4.3125rem 0' }}>
        <CommunitySearch />
        <CommunityPeople isLoading={isLoading} data={data} />
      </Row>

      <div className="explore-container">
        <div>
          <div>
            <LineTitle title="Explore" />
          </div>

          <p>Figure out exclusive things for Conextors</p>
          <Row gutter={[16, 16]}>
            {explories.map(({ label, img, to }) => (
              <Col key={label} span={12} md={6} style={{ overflow: 'hidden' }}>
                <Link className="card-explore" to={to}>
                  <img className="zoom" src={img} />
                  <div className="card-info-explore">
                    <h3>{label}</h3>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
}
