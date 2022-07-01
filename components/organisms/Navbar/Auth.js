import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export default function Auth() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
  });

  useEffect(() => {
    const token = Cookies.get("tkn");
    if (token) {
      const decodedToken = Buffer.from(token, "base64").toString("ascii");
      const dataFromPayload = jwtDecode(decodedToken);
      const IMG = process.env.NEXT_PUBLIC_IMAGE;
      dataFromPayload.avatar = `${dataFromPayload.avatar === "null" ? "/img/profile-placeholder.jpg" : `${IMG}/${dataFromPayload.avatar}`}`;
      setIsLogin(true);
      setUser(dataFromPayload);
    }
  }, []);

  const onLogoutHandler = () => {
    Cookies.remove("tkn");
    setIsLogin(false);
    router.push("/");
  };

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <Link href="#">
            <a
              className="dropdown-toggle ms-lg-40 avatar"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={user.avatar}
                className="rounded-circle"
                width="40"
                height="40"
                alt=""
              />
            </a>
          </Link>

          <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
            <li>
              <Link href="/member">
                <a className="dropdown-item text-lg color-palette-2">My Profile</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="dropdown-item text-lg color-palette-2">Wallet</a>
              </Link>
            </li>
            <li>
              <Link href="/member/edit-profile">
                <a className="dropdown-item text-lg color-palette-2">Account Settings</a>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="dropdown-item text-lg color-palette-2"
                onClick={onLogoutHandler}
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in">
        <a
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          role="button"
        >
          Sign In
        </a>
      </Link>
    </li>
  );
}
