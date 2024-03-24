import LeftLoginFlex from "./LeftLoginFlex/LeftLoginFlex";
import styles from "./LoginContainer.module.css";
import RightLoginFlex from "./RightLoginFlex/RightLoginFlex";

function LoginContainer() {
  return (
    <div className={styles.login_container}>
      <LeftLoginFlex />
      <RightLoginFlex />
    </div>
  );
}
export default LoginContainer;
