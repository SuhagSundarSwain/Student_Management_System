// import styles from "./App.module.css";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LoggedInStatusCheck from "../components/LoggedInStatusCheck";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

function App() {
  const userInfo = useSelector((store) => store.userInfo);
  const { fetching } = useSelector((store) => store.fetchStatus);

  return (
    <>
      {!userInfo.loggedInStatus && <LoggedInStatusCheck />}
      <Header />
      {fetching ? <LoadingSpinner /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
