import { cn } from "@/lib/utils";

const SectionTitle = ({
  title,
  classnames = "",
}: {
  title: string;
  classnames?: string;
}) => (
  <h2 className={cn("text-3xl font-bold text-primary", classnames)}>{title}</h2>
);

export default SectionTitle;
