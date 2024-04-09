import { useSelector } from "react-redux";

const ResultBodyData = () => {
  const semester = useSelector((store) => store.semester);
  return (
    <div>
      <u>
        <p className="card-text">Semester {semester.currentSelectedSemester}</p>
      </u>
      <div>
        <table class="table">
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
              <tr>
                <th scope="row">{sub.SUBJECT_CODE}</th>
                <td>{sub.SUBJECT}</td>
                <td>{sub.CREDIT}</td>
                <td>{sub.GRADE}</td>
              </tr>
            ))}

            <tr>
              <th scope="row"></th>
              <td colspan="2">SGPA : </td>
              <td>CGPA : </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultBodyData;
