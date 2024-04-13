import { Link } from "react-router-dom";

export default function LoginButton() {
  return (
    <Link to={"auth/login"} className="btn btn-outline-light me-2">
      Login
    </Link>
  );
}
