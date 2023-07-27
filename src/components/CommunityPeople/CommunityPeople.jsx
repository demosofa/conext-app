import { Col, Image, Row } from 'antd';
import { useCity } from 'hooks/useCity';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

export default function CommunityPeople({ isLoading, data }) {
  const { city } = useCity();

  const shuffledUsers = useMemo(() => {
    const lstUser = data ? data.people.sort(() => Math.random() - 0.5) : [];
    return [lstUser.slice(0, 3), lstUser.slice(3, 6), lstUser.slice(6)];
  }, [data, city]);

  return (
    <Col span={0} md={12}>
      {isLoading
        ? null
        : shuffledUsers.map((users, index) => (
            <Row
              key={index}
              justify={index == 1 ? 'start' : 'end'}
              align="middle"
              style={{ marginBottom: '1rem' }}
            >
              {users.map(({ name, img }) => (
                <Col key={name} span={7}>
                  <Link
                    to="/"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      color: '#171c32',
                      fontSize: '.8125rem',
                    }}
                  >
                    <Image
                      preview={false}
                      style={{
                        width: '98px',
                        height: '98px',
                        overflow: 'hidden',
                        borderRadius: '100%',
                      }}
                      src={img}
                    />
                    {name}
                  </Link>
                </Col>
              ))}
            </Row>
          ))}
    </Col>
  );
}
