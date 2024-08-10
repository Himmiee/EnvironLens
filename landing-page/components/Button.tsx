type Props = {
  className: string;
  title: string;
};

const Button = ({ className, title }: Props) => {
  return (
    <div
      className={`p-3 flex justify-center bg-black rounded-sm  ${className}`}
    >
      {title}
    </div>
  );
};

export default Button;
