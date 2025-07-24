import { cn } from "@/lib/utils";

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-3xl text-shop_dark_green font-bold capitalize tracking-wider",
        className
      )}
    >
      {children}
    </h2>
  );
};

export { Title };
