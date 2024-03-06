import RightSideLogInPage from "./RiightSideLogInPage";
import styles from "./LogInPage.module.css";

function LogInPage() {
  return (
    <div className={styles.outer_most_container}>
      <div className={styles.login_container}>
        <div>
          <img
            className={styles.left_container}
            src="https://cdn.dribbble.com/users/916023/screenshots/11474693/media/1d5d0b4a85720b6db79d6c6230e9df67.png?resize=1000x750&vertical=center"
          ></img>
        </div>
        <div className={styles.right_contianer}>
          <RightSideLogInPage />
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
