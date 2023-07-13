import * as React from "react";
import { motion } from "framer-motion";
import MenuItem from "@/components/header/MenuItem";
import { Link } from "react-scroll";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuList = [
  {
    id: 1,
    name: "About",
    link: "about",
  },
  {
    id: 2,
    name: "Portfolio",
    link: "portfolio",
  },
  {
    id: 3,
    name: "Contact me",
    link: "contact",
  },
];

const Navigation = () => (
  <motion.ul variants={variants} className="flex gap-10">
    {menuList.map((item, i) => (
      <Link
        key={item.id}
        activeClass="active"
        to={item.link}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <MenuItem item={item} i={i} />
      </Link>
    ))}
  </motion.ul>
);

export default Navigation;
