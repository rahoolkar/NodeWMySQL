import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { motion } from "motion/react";
import { HiSparkles } from "react-icons/hi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthModel from "../components/AuthModel";
import cardArray from "../utils/cardArray";
import Card from "../components/Card";
import Footer from "../components/Footer";
import skillsArray from "../utils/skillsArray";
import featuresArray from "../utils/featuresArray";
import SkillCard from "../components/SkillCard";

function Home() {
  const [showAuth, setShowAuth] = useState(false);

  const userData = useSelector((store) => {
    return store.user.userData;
  });

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f3f3f3] flex flex-col">
      <Navbar></Navbar>
      <div className="flex-1 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded-full flex items-center gap-2">
              <HiSparkles
                size={16}
                className="bg-green-50 text-green-600"
              ></HiSparkles>
              AI Powered Smart Interview Platform
            </div>
          </div>
          <div className="text-center mb-28">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto"
            >
              Practice Interviews with
              <span className="relative inline-block">
                <span className="bg-green-100 text-green-600 px-5 py-1 rounded-full">
                  AI Intelligence
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg"
            >
              Role-based mock intervies with smart follow-ups, adaptive
              difficulty and real-time performance evaluation.
            </motion.p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <motion.button
                onClick={() => {
                  if (!userData) {
                    setShowAuth(true);
                    return;
                  }
                  navigate("/interview");
                }}
                whileHover={{ opacity: 0.9, scale: 1.03 }}
                whileTap={{ opacity: 1, scale: 0.98 }}
                className="bg-black text-white px-10 py-3 rounded-full hover:opacity-90 transition shadow-md"
              >
                Start Interview
              </motion.button>

              <motion.button
                onClick={() => {
                  if (!userData) {
                    setShowAuth(true);
                    return;
                  }
                  navigate("/history");
                }}
                whileHover={{ opacity: 0.9, scale: 1.03 }}
                whileTap={{ opacity: 1, scale: 0.98 }}
                className="border border-gray-300 px-10 py-3 rounded-full hover:bg-gray-100 transition"
              >
                View History
              </motion.button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-28">
          {cardArray.map((card, index) => {
            return <Card key={index} index={index} item={card}></Card>;
          })}
        </div>

        <div className="mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-center mb-16"
          >
            Advanced AI <span className="text-green-600">Capabilities</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10 px-28">
            {skillsArray.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 flex justify-center">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-auto object-contain max-h-64"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <div className="bg-green-50 text-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                        {item.icon}
                      </div>
                      <h3 className="font-semibold mb-3 text-xl">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-center mb-4 md:mb-12 lg:mb-20"
          >
            Multiple Interview <span className="text-green-600">Modes</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10 px-28">
            {featuresArray.map((mode, index) => {
              return <SkillCard key={index} mode={mode} index={index} />;
            })}
          </div>
        </div>
      </div>

      {showAuth && (
        <AuthModel
          onClose={() => {
            setShowAuth(false);
          }}
        ></AuthModel>
      )}
      <Footer></Footer>
    </div>
  );
}

export default Home;
