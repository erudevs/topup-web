import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { getAPICategory } from "../services/playerService";
import { setSignUp } from "../services/authService";

export default function SignUpPhoto() {
  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState("");
  const [image, setImage] = useState("");
  const [localForm, setLocalForm] = useState({
    name: "",
    email: "",
  });
  const [imagePreview, setImagePreview] = useState("/icon/upload.svg");

  const getCategoryGame = useCallback(async () => {
    const data = await getAPICategory();

    const sortASCByName = data.sort((a, b) => {
      const na = a.name.toLowerCase();
      const nb = b.name.toLowerCase();
      if (na < nb) {
        return -1;
      }
      if (na < nb) {
        return -1;
      }
      return 0;
    });
    setCategories(sortASCByName);
    setFavorite(sortASCByName[0]._id);
  }, [getAPICategory]);

  useEffect(() => {
    const getLocalForm = localStorage.getItem("user-form");
    setLocalForm(JSON.parse(getLocalForm));
    getCategoryGame();
  }, []);

  const onSubmit = async () => {
    console.log("favorite: ", favorite);
    console.log("image: ", image);
    const getLocalForm = await localStorage.getItem("user-form");
    const userLocal = JSON.parse(getLocalForm);

    const data = new FormData();
    data.append("avatar", image);
    data.append("name", userLocal.name);
    data.append("phoneNumber", userLocal.phoneNumber);
    data.append("email", userLocal.email);
    data.append("username", userLocal.username);
    data.append("password", userLocal.password);
    data.append("role", "user");
    data.append("status", "Y");
    data.append("favorite", favorite);

    const result = await setSignUp(data);
    console.log(result);
  };

  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <form action="">
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="avatar" className="avatar">
                    <Image src={imagePreview} width={120} height={120} alt="Upload Icon" />
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={(e) => {
                      const img = e.target.files[0];
                      setImage(img);
                      setImagePreview(URL.createObjectURL(img));
                    }}
                  />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0 text-capitalize">{localForm.name}</h2>
              <p className="text-lg text-center color-palette-1 m-0">{localForm.email}</p>
              <div className="pt-50 pb-50">
                <label
                  htmlFor="category"
                  className="form-label text-lg fw-medium color-palette-1 mb-10"
                >
                  Favorite Game
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-select d-block w-100 rounded-pill text-lg"
                  aria-label="Favorite Game"
                  value={favorite}
                  onChange={(e) => setFavorite(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>{category.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="button-group d-flex flex-column mx-auto">
              <button
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                type="button"
                onClick={onSubmit}
              >
                Create My Account
              </button>
              <a
                className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                href="#"
                role="button"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
