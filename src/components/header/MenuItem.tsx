import * as React from "react";
import { motion } from "framer-motion";
import Typography from "@components/typography";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface MenuItemProps {
  item: {
    id: number;
    name: string;
    link: string;
  };
  i: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, i }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      className="text-lightBlue-100 font-fira-code cursor-pointer"
    >
      <Typography tag="span" className="text-primary font-fira-code">
        {"0" + (i + 1) + "."}
      </Typography>
      {item.name}
    </motion.li>
  );
};

export default MenuItem;
