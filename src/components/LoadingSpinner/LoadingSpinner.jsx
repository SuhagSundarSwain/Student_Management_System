import styles from "./LoadingSpinner.module.css";
const LoadingSpinner = () => {
  return (
    <div>
      <div className={`spinner-grow ${styles.spinner}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
