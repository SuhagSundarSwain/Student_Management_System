import { useDispatch } from "react-redux";
import { sideBarTabActions } from "../../store/sideBarTabSlice";
import ResultHeader from "./ResultHeader/ResultHeader";
import ResultBody from "./ResultBody/ResultBody";

const ResultPage = () => {
  const dispatch = useDispatch();
  dispatch(sideBarTabActions.setTabToResult());
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
