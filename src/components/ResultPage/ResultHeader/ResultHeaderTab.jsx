import { useSelector, useDispatch } from "react-redux";
import { semesterResultActions } from "../../../store/semesterResultSlice";

const ResultHeaderTab = ({ tabName }) => {
  const semester = useSelector((store) => store.semester);
  const dispatch = useDispatch();

  return (
    <>
      <li
        className="nav-item"
        onClick={() =>
          dispatch(
            semesterResultActions.setCurrentSelectedSemester({
              selectedSemester: tabName,
            })
          )
        }
      >
        <a
          className={
            tabName === semester.currentSelectedSemester
              ? "nav-link active"
              : "nav-link disabled"
          }
          style={{ width: "min-content" }}
          href="#"
        >
          semester {tabName}
        </a>
      </li>
    </>
  );
};

export default ResultHeaderTab;
