import './linetitle.css';

export default function LineTitle({ title, className = '', ...props }) {
  return (
    <h2 className={`line-title ${className || ''}`} {...props}>
      <span>{title}</span>
    </h2>
  );
}
