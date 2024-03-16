import LoginForm from "./LoginForm/LoginForm";
import styles from "./RightLoginFlex.module.css";
function RightLoginFlex() {
  return (
    <div className={styles.right_login_flex}>
      <h1>Hello There!</h1>
      <p>Welcome to the login page :)</p>
      <LoginForm />
    </div>
  );
}
export default RightLoginFlex;
