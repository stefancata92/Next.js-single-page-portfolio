import { motion, AnimatePresence } from "framer-motion";
import Typography from "@/components/typography";

interface ErrorMessageProps {
  children: React.ReactNode;
  error: boolean;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children, error }) => {
  const variants = {
    hidden: { opacity: 0, y: "-10px" },
    visible: { opacity: 1, y: "0px" },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {error && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          className="mt-2"
        >
          <Typography tag="span" className="font-semibold text-red">
            {children}
          </Typography>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorMessage;
