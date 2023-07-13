import Typography from "@components/typography";
import Container from "@components/Container";
import Tab from "@components/tabs/Tab";
import TabContent from "@components/tabs/TabContent";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const tabData = [
  {
    title: "G3 Golden Technology",

    position: "Software Engineer",
    date: "2021 - Present",
    description: [
      "Developed and maintained the company's website using ReactJS and NextJS.",
      "Developed and maintained the company's internal system using ReactJS, NextJS, and NodeJS.",
      "Developed and maintained the company's mobile application using React Native.",
    ],
  },
  {
    title: "Fortin Agency",
    position: "Software Engineer",
    date: "2021 - Present",
    description: [
      "Developed and maintained the company's website using ReactJS and NextJS.",
      "Developed and maintained the company's internal system using ReactJS, NextJS, and NodeJS.",
      "Developed and maintained the company's mobile application using React Native.",
    ],
  },
  {
    title: "Zoom-biz",

    position: "Software Engineer",
    date: "2021 - Present",
    description: [
      "Developed and maintained the company's website using ReactJS and NextJS.",
      "Developed and maintained the company's internal system using ReactJS, NextJS, and NodeJS.",
      "Developed and maintained the company's mobile application using React Native.",
    ],
  },
  // Add more tabs as needed
];

const WorkHistorySection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container>
      <div className="relative mx-auto max-w-[730px] py-20">
        <Typography
          tag="h2"
          className="text-3xl font-black text-white mb-8 font-fira-code"
        >
          <Typography tag="span" className="text-primary font-fira-code">
            02.
          </Typography>
          Where I’ve Worked.
        </Typography>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <div className="flex flex-col">
              {tabData.map((tab, index) => (
                <Tab
                  key={index}
                  isActive={activeTab === index}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </Tab>
              ))}
            </div>
          </div>
          <div className="col-span-8">
            <AnimatePresence mode="wait">
              {tabData.map(
                (tab, index) =>
                  activeTab === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <TabContent {...tab} />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WorkHistorySection;
