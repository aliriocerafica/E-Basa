"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "../../../css/testscores.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import Link from "next/link";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

interface User {
  // Add properties based on your actual user data structure
  name?: string;
  email?: string;
  // ... other properties
}

export default function Barchart() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const userId = searchParams.get("user_id");

  useEffect(() => {
    const fetchData = async () => {
      setError(null);

      try {
        if (!userId) {
          throw new Error("Missing user ID in search parameters");
        }

        const response = await fetch(`http://localhost:8000/users/${userId}`);

        if (!response.ok) {
          throw new Error(await response.text());
        }

        const data = await response.json();
        setUser(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false); // Set loading to false once data fetching is done
      }
    };

    fetchData();
  }, [userId]);

  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string[];
    }[];
  }>({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});
  const [verdict, setVerdict] = useState("");
  const [totalGrade, setTotalGrade] = useState(0);

  useEffect(() => {
    // Make sure user data is available before processing
    if (!user) return;

    const categoryScores = {
      Hugis: 0,
      Kulay: 0,
      Numero: 0,
      Ponolohiya: 0,
      Talasalitaan: 0,
      WG: 0,
      PN: 0,
      PB: 0,
    };

    user.pretest_results.forEach((result) => {
      if (categoryScores.hasOwnProperty(result.exam_name)) {
        categoryScores[result.exam_name] = result.score * 10;
      }
    });

    // Calculate average of 8 categories
    const average =
      Object.values(categoryScores).reduce((acc, score) => acc + score, 0) / 8;

    // Function to categorize grades and assign colors
    const categorizeGrade = (grade: number) => {
      if (grade >= 0 && grade <= 19) return "#FF0000";
      else if (grade >= 20 && grade <= 39) return "#0FEAFF";
      else if (grade >= 40 && grade <= 59) return "#BDBD00";
      else if (grade >= 60 && grade <= 79) return "#20683C";
      else return "#00689C";
    };

    // Determine verdict based on average
    if (average >= 41 && average <= 74) {
      setVerdict("Need Improvement");
    } else if (average >= 75 && average <= 100) {
      setVerdict("Pass");
    } else {
      setVerdict("Failed");
    }

    setTotalGrade(average);

    const grades = Object.values(categoryScores);

    setChartData({
      labels: [
        "Hugis",
        "Kulay",
        "Numero",
        "Ponolohiya",
        "Talasalitaan",
        "Wika at Gramatika",
        "Pagkaunasa sa Napakinggan",
        "Pagunawa sa Binasa",
      ],
      datasets: [
        {
          label: "Grades",
          data: [...grades, average],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: grades.map((grade) =>
            categorizeGrade(grade)
          ) as string[],
        },
      ],
    });

    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Test-Summary",
        },
      },
      scales: {
        y: {
          suggestedMin: 0,
          suggestedMax: 100,
          stepSize: 20,
        },
      },
      maintainAspectRatio: false,
      responsive: true,
      elements: {
        bar: {
          borderRadius: {
            topLeft: 15, // Set top-left border radius
            topRight: 15, // Set top-right border radius
          },
        },
      },
    });
  }, [user]);

  // Conditionally render based on loading, error, and user existence
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  // Render the rest of the component
  return (
    <>
      <div className="">
        <title>Test Summary</title>
        <div className="student-test">
          <h1 className="studenthead">Student Grade</h1>
          <br />
          <div className="rounded-lg bg-white p-4">
            <div className="relative custom-font">
              <div className="responsive info">
                <div>
                  <a style={{ fontSize: "26px" }}>
                    <b>Pangalan:</b> {user.firstname} {user.lastname}
                  </a>
                  <a style={{ marginLeft: "45px", fontSize: "26px" }}>
                    <b>Edad:</b> {user.age}
                  </a>
                </div>
                <a style={{ fontSize: "26px" }}>
                  <b>Baitang:</b> 1
                </a>
                <h2 className="text-left mt-4" style={{ fontSize: "45px" }}>
                  Pre Test Summary
                </h2>
              </div>

              <div
                className="verdict"
                style={{ position: "absolute", top: "20px", right: "20px" }}
              >
                <p
                  style={{
                    fontSize: "70px",
                    color:
                      verdict === "Need Improvement"
                        ? "yellow"
                        : verdict === "Pass"
                        ? "green"
                        : "red",
                  }}
                >
                  {verdict} {totalGrade}%
                </p>
              </div>

              <div className="w-[80] md:col-span-1 lg:h-[40vh] h-[20vh]  p-2 ">
                <Bar data={chartData} options={chartOptions} />
              </div>
              <br />
              <div className=" flex justify-center bottom-0 w-full pb-4 ">
                <div className="text-center mr-4">
                  <div className="box bg-red-500 rounded-lg p-2"></div>
                  <span>Beginning</span>
                </div>
                <div className="text-center mr-4">
                  <div className="box bg-blue-500 rounded-lg p-2"></div>
                  <span>Developing</span>
                </div>
                <div className="text-center mr-4">
                  <div className="box bg-yellow-500 rounded-lg p-2"></div>
                  <span>Approaching</span>
                </div>
                <div className="text-center mr-4">
                  <div className="box bg-green-500 rounded-lg p-2"></div>
                  <span>Proficient</span>
                </div>
                <div className="text-center">
                  <div className="box bg-purple-500 rounded-lg p-2"></div>
                  <span>Advanced</span>
                </div>
              </div>
              <br />
              <div style={{ textAlign: "center", marginBottom: "25px" }}>
                <Link href="" className="dlbutton">
                  Download Summary
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
