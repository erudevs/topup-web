import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export default function Profile() {
  const [user, setUser] = useState({
    avatar: "",
    name: "",
    email: "",
  });
  useEffect(() => {
    const token = Cookies.get("tkn");
    if (token) {
      const decodedToken = Buffer.from(token, "base64").toString("ascii");
      const dataFromPayload = jwtDecode(decodedToken);
      const img = process.env.NEXT_PUBLIC_IMAGE;
      dataFromPayload.avatar = `${dataFromPayload.avatar === "null" ? "/img/profile-placeholder.jpg" : `${img}/${dataFromPayload.avatar}`}`;
      setUser(dataFromPayload);
    }
  }, []);

  return (
    <div className="user text-center pb-50 pe-30">
      <img style={{ borderRadius: "50%", background: "#ffffff", objectFit: "cover" }} src={user.avatar} width={90} height={90} className="img-fluid mb-20" alt="User Profile" />
      <h2 className="fw-bold text-xl color-palette-1 m-0 text-capitalize">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
