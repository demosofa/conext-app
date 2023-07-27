import './style.css';

export default function XButton({ open, ...props }) {
  return (
    <button {...props} className={`x-btn ${open ? 'on' : 'off'}`}>
      <span></span>
    </button>
  );
}
