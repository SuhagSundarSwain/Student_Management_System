import { useDispatch } from "react-redux";
import { sideBarTabActions } from "../../store/sideBarTabSlice";
import ResultHeader from "./ResultHeader/ResultHeader";
import ResultBody from "./ResultBody/ResultBody";
import { useEffect } from "react";

const ResultPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sideBarTabActions.setTabToResult());
  }, [dispatch]);
  return (
    <center style={{ width: "100%" }}>
      <div className="card text-center">
        <ResultHeader />
        <ResultBody />
      </div>
    </center>
  );
};

export default ResultPage;
