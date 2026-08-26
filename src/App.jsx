import { useEffect } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { setData } from "./store/userSlice";
import Home from "./pages/Home";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(
          "http://localhost:8000/api/user/getProfile",
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data.data);
          dispatch(setData(response.data));
        } else {
          throw new Error("Something went wrong while fetching the user data");
        }
      } catch (error) {
        console.log("Error : " + error.message);
      }
    }

    fetchUserData();
  }, []);
  return (
    <>
      <Home></Home>
    </>
  );
}

export default App;
