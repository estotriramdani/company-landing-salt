interface Props {
  title: string;
  subtitle: string;
  body: string;
}

export const AboutUsCard = ({ body, subtitle, title }: Props) => {
  return (
    <div>
      <h2 className="mb-3 text-4xl font-medium text-[#029FE4]">{title}</h2>
      <h3 className="mb-1 text-lg">{subtitle}</h3>
      <p className="min-h-[196.2px] text-[#777777]">{body}</p>
    </div>
  );
};
