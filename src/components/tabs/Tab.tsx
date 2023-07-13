import { motion } from "framer-motion";

interface TabProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ isActive, onClick, children }) => {
  return (
    <motion.button
      className={`text-left flex gap-2 items-center py-2 mb-2 font-bold text-lightBlue-100 ${
        isActive ? "text-primary" : ""
      }`}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      <span
        className={`block rounded-full w-[12px] h-[12px] bg-lightBlue-100 ${
          isActive ? "bg-primary" : ""
        }`}
      ></span>
      {children}
    </motion.button>
  );
};

export default Tab;
