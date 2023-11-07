import { motion } from "framer-motion";

interface AnimatedWrapperProps {
  children: React.ReactNode;
  delay: number;
  variants: any;
}

const AnimatedWrapper = ({
  children,
  delay,
  variants,
}: AnimatedWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
