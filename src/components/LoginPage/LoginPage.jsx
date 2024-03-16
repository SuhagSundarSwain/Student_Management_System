import LoginContainer from "./LoginPageContainer/LoginContainer";
import styles from "./LoginPage.module.css";
function LoginPage() {
  return (
    <center className={styles.login_backgorund}>
      <LoginContainer />
    </center>
  );
}
export default LoginPage;
