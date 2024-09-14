// import React, { useState } from "react";
// import "../../assets/css/authStyles/register.css";
// import FormImput from "../../components/formInputs";

// import emailIcon from "../../assets/images/email-svgrepo-com.svg";
// import cancelIcon from "../../assets/images/circle-xmark-svgrepo-com.svg";
// import lock from "../../assets/images/lock-keyhole-svgrepo-com.svg";
// import eyeIcon from "../../assets/images/eye-svgrepo-com.svg";
// import rightImage from "../../assets/images/manreg.jpeg";
// import scribble from "../../assets/images/scribblecolor.svg";
// import userIcon from "../../assets/images/user-svgrepo-com (1).svg";
// import remote from "../../assets/images/remote-work-male.svg";
// import map from "../../assets/images/world-map-svgrepo-white.svg";

// import { Link } from "react-router-dom";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isTypePassword, setIsTypePassword] = useState(true);

//   return (
//     <div className="main">
//       <div className="form">
//         <div className="form__left">
//           <div className="header">
//             <img
//               src="src/assets/images/headphone-5-svgrepo-com.svg"
//               alt="logo"
//             />
//             <h1 className="font-black text-3xl">GlobalSpeak</h1>
//           </div>
//           <div className="container flex flex-col gap-[32px]">
//             <div className="top">
//               <h2>Get Started!</h2>
//               <img src={scribble} alt="" />
//               <p style={{ color: "rgba(185,185,185,1)" }}>
//                 We hire talented people around the globe who have skills in
//                 languages{" "}
//               </p>
//               <p style={{ color: "rgba(185,185,185,1)" }}>
//                 and technology to provide deep market insight for our services.
//               </p>
//             </div>

//             <div className="flex flex-col gap-[24px] w-full items-center">
//               <FormImput
//                 leftIcon={userIcon}
//                 label="Full name"
//                 placeholder="Lebron James"
//                 rightIcon={null}
//               />
//               <FormImput
//                 leftIcon={emailIcon}
//                 type="email"
//                 label="Email address"
//                 placeholder="Lebron_James@gmail.com"
//                 rightIcon={cancelIcon}
//                 onClick={() => setEmail("")}
//                 state={email}
//                 setState={setEmail}
//               />
//               <FormImput
//                 leftIcon={lock}
//                 label="Password"
//                 placeholder="..............."
//                 rightIcon={eyeIcon}
//                 type={isTypePassword ? "password" : "text"}
//                 onClick={() => {
//                   setIsTypePassword((isTypePassword) => !isTypePassword);
//                 }}
//                 state={password}
//                 setState={setPassword}
//               />
//             </div>

//             <div className="bottom">
//               <div className="terms">
//                 <input type="checkbox" name="" id="" /> &nbsp;
//                 <span>
//                   I agree to{" "}
//                   <a style={{ color: "rgba(239,146,115,1)" }} href="">
//                     Privacy Policy
//                   </a>{" "}
//                   and{" "}
//                   <a style={{ color: "rgba(239,146,115,1)" }} href="">
//                     Terms
//                   </a>
//                 </span>
//               </div>
//               <Link to="/">
//               <button
//                 className="bg-[rgba(239,146,115,1)]  text-[white]"
//                 onClick={() => {
//                   console.log("email: ", email);
//                   console.log("password:", password);
//                 }}
//               >
//                 Register
//               </button>
//               </Link>
//               {/* <p style={{ color: "rgba(185,185,185,1)" }}>forgot password?</p> */}
//               <div className="links">
//                 <span>Already having an account? </span> &nbsp;
//                 <Link
//                   style={{
//                     textDecoration: "none",
//                     color: "rgba(239,146,115,1)",
//                   }}
//                   to="/"
//                 >
//                   Login
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           className="form__right"
//           style={{
//             backgroundImage: `url(${rightImage})`,
//             backgroundSize: "cover",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//             height: "100%",
//           }}
//         >
//           <div className="father">
//             <div className="son1">
//               <span>
//                 " We have a broad variety of jobs specializing in <br />
//                 different areas, from hardware testing to data entry,
//                 <br /> localization to translation."
//               </span>
//             </div>
//             <div className="son2">
//               <div className="son11">
//                 <div className="son11-img">
//                   <img
//                     src={remote}
//                     alt=""
//                     style={{ width: "41px", height: "41px" }}
//                   />
//                 </div>
//                 <div className="son11-desc">
//                   <span>
//                     Over 4000+ careers of several categories available
//                   </span>
//                 </div>
//               </div>
//               <div className="son12">
//                 <div className="son12-img">
//                   <img
//                     src={map}
//                     alt=""
//                     style={{ width: "41px", height: "41px" }}
//                   />
//                 </div>
//                 <div className="son12-desc">
//                   <span>panning over 20+ countries worldwide</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;



// import React, { useState } from "react";
// import "../../assets/css/authStyles/register.css";
// import FormImput from "../../components/formInputs";

// import emailIcon from "../../assets/images/email-svgrepo-com.svg";
// import cancelIcon from "../../assets/images/circle-xmark-svgrepo-com.svg";
// import lock from "../../assets/images/lock-keyhole-svgrepo-com.svg";
// import eyeIcon from "../../assets/images/eye-svgrepo-com.svg";
// import rightImage from "../../assets/images/manreg.jpeg";
// import scribble from "../../assets/images/scribblecolor.svg";
// import userIcon from "../../assets/images/user-svgrepo-com (1).svg";
// import remote from "../../assets/images/remote-work-male.svg";
// import map from "../../assets/images/world-map-svgrepo-white.svg";

// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Register = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isTypePassword, setIsTypePassword] = useState(true);

//   const validateForm = () => {
//     if (!fullName) {
//       toast.error("Full name is required!");
//       return false;
//     }
//     if (!email) {
//       toast.error("Email is required!");
//       return false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       toast.error("Email is invalid!");
//       return false;
//     }
//     if (!password) {
//       toast.error("Password is required!");
//       return false;
//     } else if (password.length < 6) {
//       toast.error("Password must be at least 6 characters long!");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       toast.success("Registration successful!");
//       // Handle registration logic here (e.g., API call)
//       console.log("Full Name:", fullName);
//       console.log("Email:", email);
//       console.log("Password:", password);
//     }
//   };

//   return (
//     <div className="main">
//       <ToastContainer />
//       <div className="form">
//         <div className="form__left">
//           <div className="header">
//             <img
//               src="src/assets/images/headphone-5-svgrepo-com.svg"
//               alt="logo"
//             />
//             <h1 className="font-black text-3xl">GlobalSpeak</h1>
//           </div>
//           <div className="container flex flex-col gap-[32px]">
//             <div className="top">
//               <h2>Get Started!</h2>
//               <img src={scribble} alt="" />
//               <p style={{ color: "rgba(185,185,185,1)" }}>
//                 We hire talented people around the globe who have skills in
//                 languages{" "}
//               </p>
//               <p style={{ color: "rgba(185,185,185,1)" }}>
//                 and technology to provide deep market insight for our services.
//               </p>
//             </div>

//             <form className="flex flex-col gap-[24px] w-full items-center" onSubmit={handleSubmit}>
//               <FormImput
//                 leftIcon={userIcon}
//                 label="Full name"
//                 placeholder="Lebron James"
//                 rightIcon={null}
//                 state={fullName}
//                 setState={setFullName}
//               />
//               <FormImput
//                 leftIcon={emailIcon}
//                 type="email"
//                 label="Email address"
//                 placeholder="Lebron_James@gmail.com"
//                 rightIcon={cancelIcon}
//                 onClick={() => setEmail("")}
//                 state={email}
//                 setState={setEmail}
//               />
//               <FormImput
//                 leftIcon={lock}
//                 label="Password"
//                 placeholder="..............."
//                 rightIcon={eyeIcon}
//                 type={isTypePassword ? "password" : "text"}
//                 onClick={() => {
//                   setIsTypePassword((prev) => !prev);
//                 }}
//                 state={password}
//                 setState={setPassword}
//               />
//               <div className="terms">
//                 <input type="checkbox" id="terms" required /> &nbsp;
//                 <span>
//                   I agree to{" "}
//                   <a style={{ color: "rgba(239,146,115,1)" }} href="">
//                     Privacy Policy
//                   </a>{" "}
//                   and{" "}
//                   <a style={{ color: "rgba(239,146,115,1)" }} href="">
//                     Terms
//                   </a>
//                 </span>
//               </div>
//               <Link to="/">
//               <button
//                 type="submit"
//                 className="bg-[rgba(239,146,115,1)] text-[white]"
//               >
//                 Register
//               </button>
//               </Link>
//             </form>

//             <div className="links">
//               <span>Already having an account? </span> &nbsp;
//               <Link
//                 style={{
//                   textDecoration: "none",
//                   color: "rgba(239,146,115,1)",
//                 }}
//                 to="/"
//               >
//                 Login
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div
//           className="form__right"
//           style={{
//             backgroundImage: `url(${rightImage})`,
//             backgroundSize: "cover",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//             height: "100%",
//           }}
//         >
//           <div className="father">
//             <div className="son1">
//               <span>
//                 "We have a broad variety of jobs specializing in <br />
//                 different areas, from hardware testing to data entry,
//                 <br /> localization to translation."
//               </span>
//             </div>
//             <div className="son2">
//               <div className="son11">
//                 <div className="son11-img">
//                   <img
//                     src={remote}
//                     alt=""
//                     style={{ width: "41px", height: "41px" }}
//                   />
//                 </div>
//                 <div className="son11-desc">
//                   <span>
//                     Over 4000+ careers of several categories available
//                   </span>
//                 </div>
//               </div>
//               <div className="son12">
//                 <div className="son12-img">
//                   <img
//                     src={map}
//                     alt=""
//                     style={{ width: "41px", height: "41px" }}
//                   />
//                 </div>
//                 <div className="son12-desc">
//                   <span>Spanning over 20+ countries worldwide</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;





import React, { useState } from "react";
import "../../assets/css/authStyles/register.css";
import FormImput from "../../components/formInputs";

import emailIcon from "../../assets/images/email-svgrepo-com.svg";
import cancelIcon from "../../assets/images/circle-xmark-svgrepo-com.svg";
import lock from "../../assets/images/lock-keyhole-svgrepo-com.svg";
import eyeIcon from "../../assets/images/eye-svgrepo-com.svg";
import rightImage from "../../assets/images/manreg.jpeg";
import scribble from "../../assets/images/scribblecolor.svg";
import userIcon from "../../assets/images/user-svgrepo-com (1).svg";
import remote from "../../assets/images/remote-work-male.svg";
import map from "../../assets/images/world-map-svgrepo-white.svg";
import axios from 'axios';

import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isTypePassword, setIsTypePassword] = useState(true);
  const [errors, setErrors] = useState({ email: "", password: "", fullName: "" });
  const navigate = useNavigate();

  const handleRegister = () => {
    let valid = true;
    let errors = { email: "", password: "", fullName: "" };

    // Validate Full Name
    if (fullName.trim() === "") {
      errors.fullName = "Full name is required";
      valid = false;
    }

    // Validate Email
    if (email.trim() === "") {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
      valid = false;
    }

    // Validate Password
    if (password.trim() === "") {
      errors.password = "Password is required";
      valid = false;
    }

    setErrors(errors);

    if (valid) {
      axios.post("http://localhost:3000/auth/register", {
        fullName,
        email,
        password,
      })
      .then((response) => {
        console.log('res', response);
        
        Swal.fire({
          title: 'Registered Successfully!',
          text: 'You have been registered successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        console.log("Error registering user", error);
      });
      
      // Swal.fire({
      //   title: 'Registered Successfully!',
      //   text: 'You have been registered successfully',
      //   icon: 'success',
      //   confirmButtonText: 'OK'
      // }).then(() => {
      //   navigate("/");
      // });
    }
  };

  return (
    <div className="main">
      <div className="form">
        <div className="form__left">
          <div className="header">
            <img src="src/assets/images/headphone-5-svgrepo-com.svg" alt="logo" />
            <h1 className="font-black text-3xl">GlobalSpeak</h1>
          </div>
          <div className="container flex flex-col gap-[32px]">
            <div className="top">
              <h2>Get Started!</h2>
              <img src={scribble} alt="" />
              <p style={{ color: "rgba(185,185,185,1)" }}>
                We hire talented people around the globe who have skills in languages{" "}
              </p>
              <p style={{ color: "rgba(185,185,185,1)" }}>
                and technology to provide deep market insight for our services.
              </p>
            </div>

            <form className="flex flex-col gap-[24px] w-full items-center">
              <FormImput
                leftIcon={userIcon}
                label="Full name"
                placeholder="Lebron James"
                rightIcon={null}
                type="text"
                state={fullName}
                setState={setFullName}
              />
              {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
              <FormImput
                leftIcon={emailIcon}
                type="email"
                label="Email address"
                placeholder="Lebron_James@gmail.com"
                rightIcon={cancelIcon}
                onClick={() => setEmail("")}
                state={email}
                setState={setEmail}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
              <FormImput
                leftIcon={lock}
                label="Password"
                placeholder="..............."
                rightIcon={eyeIcon}
                type={isTypePassword ? "password" : "text"}
                onClick={() => {
                  setIsTypePassword(!isTypePassword);
                }}
                state={password}
                setState={setPassword}
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </form>

            <div className="bottom">
              <div className="terms">
                <input type="checkbox" name="" id="" /> &nbsp;
                <span>
                  I agree to{" "}
                  <a style={{ color: "rgba(239,146,115,1)" }} href="">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a style={{ color: "rgba(239,146,115,1)" }} href="">
                    Terms
                  </a>
                </span>
              </div>
              <button
                className="bg-[rgba(239,146,115,1)]  text-[white]"
                onClick={handleRegister}
              >
                Register
              </button>
              <div className="links">
                <span>Already having an account? </span> &nbsp;
                <Link
                  style={{
                    textDecoration: "none",
                    color: "rgba(239,146,115,1)",
                  }}
                  to="/"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="form__right"
          style={{
            backgroundImage: `url(${rightImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "100%",
          }}
        >
          <div className="father">
            <div className="son1">
              <span>
                " We have a broad variety of jobs specializing in <br />
                different areas, from hardware testing to data entry,
                <br /> localization to translation."
              </span>
            </div>
            <div className="son2">
              <div className="son11">
                <div className="son11-img">
                  <img
                    src={remote}
                    alt=""
                    style={{ width: "41px", height: "41px" }}
                  />
                </div>
                <div className="son11-desc">
                  <span>
                    Over 4000+ careers of several categories available
                  </span>
                </div>
              </div>
              <div className="son12">
                <div className="son12-img">
                  <img
                    src={map}
                    alt=""
                    style={{ width: "41px", height: "41px" }}
                  />
                </div>
                <div className="son12-desc">
                  <span>panning over 20+ countries worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
