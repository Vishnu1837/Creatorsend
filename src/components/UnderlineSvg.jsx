import { motion } from "framer-motion";

const UnderlineSvg = () => {
  return (
    <svg width="292" height="23" viewBox="0 0 292 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="orange-line">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        d="M4 18.4005C68.3333 3.40051 256 -0.999929 287.5 12.5"
        stroke="#FF6600"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray="0 1"
      />
    </svg>
  );
};

export default UnderlineSvg; 