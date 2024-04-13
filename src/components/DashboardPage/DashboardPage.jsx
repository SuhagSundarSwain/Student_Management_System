import { useDispatch } from "react-redux";
import { sideBarTabActions } from "../../store/sideBarTabSlice";
import styles from "./DashboardPage.module.css";
import Card from "../Card/Card";
import { useEffect } from "react";

const DashboardPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sideBarTabActions.setTabToDashboard());
  }, [dispatch]);

  const attendaceData = [
    { label: "present", value: 92 },
    { label: "not marked", value: 2 },
    { label: "absent", value: 6 },
  ];
  const assignmentData = [
    { label: "competed", value: 92 },
    { label: "pending", value: 2 },
    { label: "not complete", value: 6 },
  ];
  const cgpaData = [
    { label: "cgpa", value: 9.2 },
    { label: "difference", value: 0.8 },
  ];
  return (
    <center className={styles.homepage}>
      <u>
        <h1 className={styles.heading}>Dashboard</h1>
      </u>
      <hr />
      <div className={styles.card_section}>
        <Card
          cardTitle={"Attendance"}
          cardSubtitle={"6th semester"}
          data={attendaceData}
          total={"100%"}
        />
        <Card
          cardTitle={"Assignment Completion"}
          cardSubtitle={"6th Semester"}
          data={assignmentData}
          total={"100%"}
        />
        <Card
          cardTitle={"CGPA Report"}
          cardSubtitle={"6th Semester CGPA"}
          data={cgpaData}
          total={10}
        />
      </div>
    </center>
  );
};

export default DashboardPage;
