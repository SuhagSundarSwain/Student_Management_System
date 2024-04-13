const ScoreRow = ({ sub }) => {
  return (
    <tr>
      <th scope="row">{sub.SUBJECT_CODE}</th>
      <td>{sub.SUBJECT}</td>
      <td>{sub.CREDIT}</td>
      <td>{sub.GRADE}</td>
    </tr>
  );
};

export default ScoreRow;
