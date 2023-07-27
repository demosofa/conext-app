import './style.css';

export default function Wrapper({ children, className, ...props }) {
  return (
    <section className={`container-antd ${className || ''}`} {...props}>
      {children}
    </section>
  );
}
