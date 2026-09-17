import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Timer({ timeLeft, totalTime }) {
  const totalSeconds = parseInt(totalTime, 10);

  if (
    !Number.isFinite(timeLeft) ||
    !Number.isFinite(totalSeconds) ||
    totalSeconds <= 0
  ) {
    return null;
  }

  const percentage = (timeLeft / totalSeconds) * 100;

  return (
    <div className="w-20 h-20">
      <CircularProgressbar
        value={percentage}
        text={`${timeLeft}s`}
        styles={buildStyles({
          textSize: "28px",
          pathColor: "#10b981",
          textColor: "#ef4444",
          trailColor: "#e5e7eb",
        })}
      />
    </div>
  );
}

export default Timer;
