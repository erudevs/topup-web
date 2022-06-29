import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import cx from "classnames";

export default function SignUpForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const className = {
    label: cx("form-label text-lg fw-medium color-palette-1 mb-10"),
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || phoneNumber === "" || username === "" || email === "" || password === "") {
      toast.error("Harap untuk mengisi semua form!");
      return;
    }

    const userForm = {
      name,
      phoneNumber,
      username,
      email,
      password,
    };
    localStorage.setItem("user-form", JSON.stringify(userForm));
    router.push("/sign-up-photo");
  };

  return (
    <>
      <div className="pt-50">
        <label htmlFor="username" className={className.label}>
          Username
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="username"
          name="username"
          aria-describedby="username"
          placeholder="Masukkan username Anda..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="pt-30">
        <label htmlFor="name" className={className.label}>
          Nama Lengkap
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="name"
          name="name"
          aria-describedby="name"
          placeholder="Masukkan nama lengkap Anda..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="pt-30">
        <label htmlFor="number" className={className.label}>
          Nomor Telepon
        </label>
        <input
          type="number"
          className="form-control rounded-pill text-lg"
          id="number"
          name="phoneNumber"
          aria-describedby="number"
          placeholder="Masukkan nomor telepon Anda..."
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="pt-30">
        <label htmlFor="email" className={className.label}>
          Alamat Email
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          id="email"
          name="email"
          aria-describedby="email"
          placeholder="Masukkan alamat email Anda..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="pt-30">
        <label
          htmlFor="password"
          className={className.label}
        >
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          id="password"
          name="password"
          aria-describedby="password"
          placeholder="Masukkan kata sandi..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          type="button"
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          onClick={onSubmit}
        >
          Continue
        </button>
        <Link href="/sign-in">
          <a
            className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
            role="button"
          >
            Sign In
          </a>
        </Link>
      </div>
    </>
  );
}
