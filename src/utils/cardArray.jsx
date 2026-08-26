import { BsClock, BsMic, BsRobot } from "react-icons/bs";

const cardArray = [
  {
    icon: <BsRobot size={24}></BsRobot>,
    step: "Step 1",
    title: "Role and Experience Selection",
    desc: "AI adjusts difficulty based on selected job roles",
  },
  {
    icon: <BsMic size={24}></BsMic>,
    step: "Step 2",
    title: "Smart Voice Interview",
    desc: "Dynamic follow-up questions based on your answers",
  },
  {
    icon: <BsClock></BsClock>,
    step: "Step 3",
    title: "Timer Based Simulation",
    desc: "Real interview pressure with time tracking.",
  },
];

export default cardArray;
