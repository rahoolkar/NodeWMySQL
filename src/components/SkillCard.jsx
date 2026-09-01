import { motion } from "motion/react";

function SkillCard({ mode, index }) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all"
    >
      <div className="flex items-center justify-center gap-6">
        <div className="w-1/2">
          <h3 className="font-semibold text-xl mb-3">{mode.title}</h3>

          <p className="text-gray-500 text-sm leading-relaxed">{mode.desc}</p>
        </div>

        <div className="w-1/2 flex justify-end">
          <img
            className="w-28 h-28 object-contain"
            src={mode.image}
            alt={mode.title}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default SkillCard;
