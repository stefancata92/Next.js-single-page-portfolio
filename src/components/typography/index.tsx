import { ReactNode } from "react";

type TagVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

interface TypographyProps {
  tag: TagVariants;
  children: ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  tag,
  children,
  className = "",
}) => {
  const Component = tag as keyof JSX.IntrinsicElements;
  const defaultClass = tag; // this will use the classes defined in tailwind.css

  return (
    <Component className={`${defaultClass} ${className}`}>{children}</Component>
  );
};

export default Typography;
