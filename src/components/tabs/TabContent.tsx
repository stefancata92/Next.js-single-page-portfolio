import Typography from "@components/typography";
import { ArrowIcon } from "@components/icons";

interface TabContentProps {
  title: string;
  position: string;
  date: string;
  description: string[];
}

const TabContent: React.FC<TabContentProps> = ({
  position,
  date,
  description,
}) => {
  return (
    <div className="relative">
      <Typography tag="h3" className="text-2xl font-bold text-white mb-4">
        {position}
      </Typography>
      <Typography
        tag="h4"
        className="text-xl font-bold text-lightBlue-200 mb-4 font-fira-code"
      >
        {date}
      </Typography>
      {description.map((desc, i) => (
        <Typography tag="p" key={i} className="text-lightBlue-200 mb-4 flex">
          <ArrowIcon className="inline-block mr-2 w-[25px] flex-shrink-0" />
          {desc}
        </Typography>
      ))}
    </div>
  );
};

export default TabContent;
