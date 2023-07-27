import { Image, Menu, Space, Grid } from 'antd';
import XButton from 'components/XButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import SelectCity from 'components/SelectCity';
import links from 'constants/links';

const { useBreakpoint } = Grid;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { md, lg } = useBreakpoint();
  return (
    <>
      <section className="navbar">
        <div className="logo-city">
          <Image
            style={{ maxHeight: '50px' }}
            preview={false}
            src="https://conext-production.s3.ap-southeast-1.amazonaws.com/logo_header.png"
          />
          {md ? <SelectCity style={{ maxWidth: '250px' }} /> : null}
        </div>

        {lg ? (
          <Space className="block-nav">
            <p>Become a CoNEXTor to approach digital community in the city</p>
            <button>Join CoNEXT</button>
            <p>
              if you already have account please <span>Login</span>
            </p>
          </Space>
        ) : (
          <XButton open={open} onClick={() => setOpen(!open)} />
        )}
      </section>

      {lg ? null : (
        <div className="sidebar" style={{ right: open ? '0' : '-100%' }}>
          {md ? null : (
            <div
              style={{
                padding: '0.8rem 0.6rem',
                borderBottom: '1px solid #d8d8d8',
                marginBottom: '1.1875rem',
              }}
            >
              <SelectCity />
            </div>
          )}
          <Menu
            style={{
              flex: 1,
              width: '100%',
              backgroundColor: 'transparent',
            }}
            mode="vertical"
            items={[...links, { label: 'Login', to: '' }].map(
              ({ label, to }) => ({
                key: to,
                label: label.toUpperCase(),
                onClick: () => {
                  if (label != 'Login') navigate(to);
                },
                style: {
                  fontSize: '.9375rem',
                  color: '#171c32',
                  textTransform: 'uppercase',
                  height: 'auto',
                  borderTop: label == 'Login' ? '1px solid #d8d8d8' : 'none',
                },
              })
            )}
          />
          <Space className="block-nav">
            <p>Become a CoNEXTor to approach digital community in the city</p>
            <button>Join CoNEXT</button>
          </Space>
        </div>
      )}
    </>
  );
}
