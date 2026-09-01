import resumeImg from "../../assets/resume.png";
import pdfImg from "../../assets/pdf.png";
import analyticsImg from "../../assets/history.png";
import evalImg from "../../assets/ai-ans.png";
import { BsBarChart, BsFileEarmark, BsFileEarmarkText } from "react-icons/bs";

const skillsArray = [
  {
    image: evalImg,
    icon: <BsBarChart size={20}></BsBarChart>,
    title: "Ai Answer Evaluation",
    desc: "Scores communiation, techincal accuracy and confidence",
  },
  {
    image: resumeImg,
    icons: <BsFileEarmark size={20}></BsFileEarmark>,
    title: "Resume Based Interview",
    desc: "Project-specific questions based on uploaded resume",
  },
  {
    image: pdfImg,
    icon: <BsFileEarmarkText size={20}></BsFileEarmarkText>,
    title: "Downloadable PDF Report",
    desc: "Detailed strengths, weaknesses and improvement insights",
  },
  {
    image: analyticsImg,
    icon: <BsBarChart size={20}></BsBarChart>,
    title: "History and Analytics",
    desc: "Track progress with performance graphs and topic analysis.",
  },
];

export default skillsArray;
