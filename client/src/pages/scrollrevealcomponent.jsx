import { motion } from "framer-motion";

const ScrollRevealComponent = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <div>
      {/* ... lots of content ... */}
      <ScrollRevealComponent>
        <h1>My Animated Section</h1>
        <p>This text will slide in when you scroll down!</p>
      </ScrollRevealComponent>
      {/* ... more content ... */}
    </div>
  );
}
