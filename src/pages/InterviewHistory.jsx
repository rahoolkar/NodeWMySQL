import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const InterviewHistory = () => {
  const [interview, setInterview] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchInterviewReport() {
      try {
        const response = await fetch(
          "http://www.localhost:8000/api/interview/history",
          { credentials: "include" },
        );

        if (response.ok) {
          const data = await response.json();
          setInterview(data);
        } else {
          throw new Error("Something went wrong while fetching response.");
        }
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchInterviewReport();
  }, []);
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-emerald-50 py-10">
      <div className="w-[90vw] lg:w-[70vw] max-w-[90%] mx-auto">
        <div className="mb-10 w-full flex items-start gap-4 flex-wrap">
          <button className="mt-1 p-3 rounded-full bg-white shadow hover:shadow-md transition">
            <FaArrowLeft
              className="text-gray-600"
              onClick={() => {
                navigate("/");
              }}
            ></FaArrowLeft>
          </button>
          <div className="">
            <h1 className="text-3xl font-bold flex-nowrap text-gray-800">
              Interview History
            </h1>
            <p className="text-gray-500 mt-2">
              Track your past interviews and past reports
            </p>
          </div>

          {interview.length === 0 ? (
            <div className="bg-white p-10 rounded-2xl shadow text-center">
              <p className="text-gray-500">
                No interviews found. Start your first interview.{" "}
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {interview.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transistion-all duration-300 cursor-pointer border border-gray-100"
                    onClick={() => {
                      navigate(`/report/${item._id}`);
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.role}
                        </h3>

                        <p className="text-gray-500 text-sm mt-1">
                          {item.experience} · {item.mode}
                        </p>

                        <p className="text-xs text-gray-400 mt-2">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </p>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="text-xl font-bold text-emerald-600">
                            {item.finalScore || 0}/10
                          </p>

                          <p className="text-xs text-gray-400">Overall Score</p>
                        </div>

                        <span
                          className={`px-4 py-1 rounded-full text-xs font-medium ${item.status == "completed" ? "bg-emerald-100 text-emerald-700" : "bg-yellow-100 text-yellow-700"}`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterviewHistory;
