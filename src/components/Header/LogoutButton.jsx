import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userInfoActions } from "../../store/userInfo";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const logout = () => {
    fetch(process.env.REACT_APP_BACKEND_SERVER+"/logout", {
      method: "POST",
      credentials: "include",
    }).then((res) => {
      dispatch(userInfoActions.logout());
    });
  };
  return (
    <Link to={"/"} type="button" className="btn btn-warning" onClick={logout}>
      Logout
    </Link>
  );
}
