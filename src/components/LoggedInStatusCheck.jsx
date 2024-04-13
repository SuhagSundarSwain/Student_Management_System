import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInfoActions } from "../store/userInfo";
import { useNavigate } from "react-router-dom";
import { fetchStatusActions } from "../store/fetchingSlice";
export default function LoggedInStatusCheck() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((store) => store.userInfo);

  useEffect(() => {
    dispatch(fetchStatusActions.setFetchStart());
    fetch("http://127.0.0.1:1412/loggedin", {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(userInfoActions.setLoggedInStatus(data));
        dispatch(fetchStatusActions.setFetchEnd());
        if (data.loggedInStatus === false) {
          navigate("/auth/login");
        }
      });
  }, [userInfo.user]);
}
