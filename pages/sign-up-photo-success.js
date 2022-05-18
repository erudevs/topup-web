export default function SignUpPhotoSuccess() {
  return (
    <section className="sign-up-photo-success mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <form action="">
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="file-input">
                    <img
                      src="/img/avatar-1.png"
                      width="120"
                      height="120"
                      className="rounded-circle"
                      alt=""
                    />
                  </label>
                  <input id="file-input" type="file" />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">Shayna Anne</h2>
              <p className="text-lg text-center color-palette-1 m-0">shayna@anne.com</p>
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
                >
                  <option defaultValue="Select Category" disabled>
                    Select Category
                  </option>
                  <option value="fps">First Person Shoter</option>
                  <option value="rpg">Role Playing Game</option>
                  <option value="arcade">Arcade</option>
                  <option value="sport">Sport</option>
                </select>
              </div>
            </div>
            <div className="button-group d-flex flex-column mx-auto">
              <a
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                href="./sign-up-success.html"
                role="button"
              >
                Create My Account
              </a>
              {/* <button type="submit"
              className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
              role="button">Create My Account</button> */}
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
