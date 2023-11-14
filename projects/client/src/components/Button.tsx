const defaultProps = {
  className: '',
  onClick: () => {},
};

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

function Button({ children, onClick, className }: Props) {
  return (
    <button
      type='button'
      className={`${className} transition duration-100 active:transform active:scale-90 cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = defaultProps;

export default Button;
