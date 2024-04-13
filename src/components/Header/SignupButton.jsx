import { Link } from "react-router-dom";

export default function SignupButton() {
  return (
    <Link to={"auth/signup"} type="button" className="btn btn-warning">
      Sign-up
    </Link>
  );
}
