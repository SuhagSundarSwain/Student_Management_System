import Chart from "./Chart";

const Card = ({ cardTitle, cardSubtitle, data, total }) => {
  return (
    <div className="card" style={{ width: "20rem", margin: "40px" }}>
      <div className="card-body">
        <h5 className="card-title left_text_align">{cardTitle}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary left_text_align">
          {cardSubtitle}
        </h6>
        <Chart data={data} />
        Total : {total}
      </div>
    </div>
  );
};

export default Card;
