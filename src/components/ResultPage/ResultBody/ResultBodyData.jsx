import { useSelector } from "react-redux";
import ScoreRow from "./ScoreRow";

const ResultBodyData = () => {
  const semester = useSelector((store) => store.semester);
  return (
    <div>
      <u>
        <p className="card-text">Semester {semester.currentSelectedSemester}</p>
      </u>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">SUBJECT CODE</th>
              <th scope="col">SUBJECT</th>
              <th scope="col">CREDIT</th>
              <th scope="col">GRADE</th>
            </tr>
          </thead>
          <tbody>
            {semester.semesterDetails.map((sub) => (
              <ScoreRow key={sub.SUBJECT_CODE} sub={sub} />
            ))}

            <tr>
              <th scope="row"></th>
              <td colSpan="2">SGPA : </td>
              <td>CGPA : </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultBodyData;
