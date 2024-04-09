import { useSelector } from "react-redux";
import ResultHeaderTab from "./ResultHeaderTab";

const ResultHeader = () => {
  const semester = useSelector((store) => store.semester);

  return (
    <div className="card-header result_card_heder">
      <ul className="nav nav-tabs card-header-tabs">
        {semester.semesterList.map((semNo) => (
          <ResultHeaderTab key={semNo} tabName={semNo} />
        ))}
      </ul>
    </div>
  );
};

export default ResultHeader;
