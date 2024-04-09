import { useSelector } from "react-redux";

const ResultBodyData = () => {
  const semester = useSelector((store) => store.semester);
  return (
    <div>
      <u>
        <p className="card-text">Semester {semester.currentSelectedSemester}</p>
      </u>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  );
};

export default ResultBodyData;
