import * as Icons from "lucide-react";

interface IconProps {
  name: keyof typeof Icons;
  size?: number;
  className?: string;
  fallback?: keyof typeof Icons;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent = Icons[name] || Icons[fallback];
  return <IconComponent size={size} className={className} />;
};

export default Icon;
