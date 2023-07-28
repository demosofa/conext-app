import { Result } from 'antd';
import { Link } from 'react-router-dom';

export default function NotExist() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link
          className="button-search"
          to="/"
          style={{ padding: '0.75rem 1.125rem 0.6875rem' }}
        >
          Back Home
        </Link>
      }
    />
  );
}
