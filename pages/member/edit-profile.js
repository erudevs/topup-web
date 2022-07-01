import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Sidebar from "../../components/organisms/Sidebar";
import { updateProfile } from "../../services/memberService";

export default function EditProfile() {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState(null);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    avatar: "",
  });

  useEffect(() => {
    const token = Cookies.get("tkn");
    if (token) {
      const decodedToken = Buffer.from(token, "base64").toString("ascii");
      const dataFromPayload = jwtDecode(decodedToken);
      const IMG = process.env.NEXT_PUBLIC_IMAGE;
      dataFromPayload.avatar = `${dataFromPayload.avatar === "null" ? "/img/profile-placeholder.jpg" : `${IMG}/${dataFromPayload.avatar}`}`;
      setUser(dataFromPayload);
    }
  }, []);

  const onSubmit = async () => {
    const data = new FormData();
    data.append("name", user.name);
    data.append("phoneNumber", user.phoneNumber);
    data.append("avatar", user.avatar);
    const response = await updateProfile(data);
    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success("Update profil berhasil. Silakan login kembali.");
      Cookies.remove("tkn");
      router.push("/sign-in");
    }
  };

  const numbers = /^[0-9]+$/;

  return (
    <section className="edit-profile overflow-auto">
      <Sidebar />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="image-upload">
                  <label htmlFor="avatar" className="position-relative">
                    {imagePreview ? (
                      <>
                        <img src={imagePreview} alt="Icon Upload" width={90} height={90} style={{ borderRadius: "50%", objectFit: "cover" }} />
                        <img src="/icon/upload.svg" width="30" height="30" alt="Icon Upload" className="upload-icon" />
                      </>
                    ) : (
                      <>
                        <img src={user.avatar} alt="Icon Upload" width={90} height={90} style={{ borderRadius: "50%", objectFit: "cover" }} />
                        <img src="/icon/upload.svg" width="30" height="30" alt="Icon Upload" className="upload-icon" />
                      </>
                    )}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      const img = e.target.files[0];
                      setUser({ ...user, avatar: img });
                      setImagePreview(URL.createObjectURL(img));
                    }}
                  />
                </div>
              </div>
              <div className="pt-30">
                <label htmlFor="name" className="form-label text-lg fw-medium color-palette-1 mb-10">
                  Full Name
                </label>
                <input
                  id="name"
                  className="form-control rounded-pill text-lg"
                  type="text"
                  placeholder="Enter your name ..."
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </div>
              <div className="pt-30">
                <label htmlFor="email" className="form-label text-lg fw-medium color-palette-1 mb-10">
                  Email Adress
                </label>
                <input
                  id="email"
                  className="form-control rounded-pill text-lg"
                  type="email"
                  placeholder="Enter your email ..."
                  disabled
                  value={user.email}
                />
              </div>
              <div className="pt-30">
                <label htmlFor="phone" className="form-label text-lg fw-medium color-palette-1 mb-10">
                  Phone Number
                </label>
                <input
                  id="phone"
                  className="form-control rounded-pill text-lg"
                  type="text"
                  placeholder="Enter your number ..."
                  value={user.phoneNumber}
                  onChange={(e) => {
                    if (!e.target.value.match(numbers)) {
                      return toast.error("Hanya menerima nomor");
                    }
                    return setUser({ ...user, phoneNumber: e.target.value });
                  }}
                />
              </div>
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="button"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  onClick={onSubmit}
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}
