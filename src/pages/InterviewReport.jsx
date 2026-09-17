import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Step3Report from "../components/Step3Report";

const InterviewReport = () => {
  const { id } = useParams();

  const [report, setReport] = useState(null);

  useEffect(() => {
    async function fetchReportData() {
      try {
        const response = await fetch(
          "http://localhost:8000/api/interview/report/" + id,
          {
            credentials: "include",
          },
        );

        if (response.ok) {
          const data = await response.json();
          setReport(data);
        }
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchReportData();
  }, []);

  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading Report...</p>
      </div>
    );
  }

  return <Step3Report report={report} />;
};

export default InterviewReport;
