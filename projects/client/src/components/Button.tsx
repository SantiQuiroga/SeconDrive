const defaultProps = {
  data_testID: '',
  className: '',
  onClick: () => {},
};

type Props = {
  data_testID?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

function Button({ children, onClick, className, data_testID }: Props) {
  return (
    <button
      data-testid={data_testID}
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
