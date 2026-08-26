import { motion } from "motion/react";

function Card({ index, item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 + index * 0.2 }}
      whileHover={{ rotate: 0, scale: 1.06 }}
      className={`relative bg-white rounded-3xl border-2 border-green-100 hover:border-green-500 p-10 w-80 max-w-[90%] shadow-md hover:shadow-2xl transition-all duration-300
        ${index === 0 ? "rotate-[-4deg]" : ""}
        ${index === 1 ? "rotate-3 md:-mt-6 shadow-xl" : ""}
        ${index === 2 ? "-rotate-3" : ""}`}
    >
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white border-2 border-green-500 text-green-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
        {item.icon}
      </div>
      <div className="pt-10 text-center">
        <div className="text-xs text-green-600 font-semibold mb-2 tracking-wider">
          {item.step}
        </div>
        <h3 className="font-semibold mb-3 text-lgx">{item.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default Card;
