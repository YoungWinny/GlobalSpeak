// import React, { useState } from "react";
// import "../../assets/css/authStyles/login.css";
// import { Link } from "react-router-dom";

// import FormImput from "../../components/formInputs";

// import emailIcon from "../../assets/images/email-svgrepo-com.svg";
// import cancelIcon from "../../assets/images/circle-xmark-svgrepo-com.svg";
// import lock from "../../assets/images/lock-keyhole-svgrepo-com.svg";
// import eyeIcon from "../../assets/images/eye-svgrepo-com.svg";
// import rightImage from "../../assets/images/girl-with-headphones-reading-book-with-book-front-her.jpeg";
// import scribble from "../../assets/images/scribblecolor.svg";
// import remote from "../../assets/images/remote-work-male.svg";
// import map from "../../assets/images/world-map-svgrepo-white.svg";



// const Login = () => {

//   const [email,setEmail] = useState('');
//   const [password,setPassword] = useState('');
//   const [isTypePassword, setIsTypePassword] = useState(true)

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
//           <div className="container flex flex-col gap-[28px]">
//             <div className="top">
//               <h2>Welcome back !</h2>
//               <img src={scribble} alt="" />
//               <p style={{ color: "rgba(185,185,185,1)" }}>
//                 We hire talented people around the globe who have skills in
//                 languages{" "}
//               </p>
//               <p style={{ color: "rgba(185,185,185,1)" }}>
//                 and technology to provide deep market insight for our services.
//               </p>
//             </div>
//             <div className="flex flex-col gap-[20px] w-full items-center">
//             <FormImput
//               leftIcon={emailIcon}
//               type="email"
//               label="Email address"
//               placeholder="Lebron_James@gmail.com"
//               rightIcon={cancelIcon}
//               onClick={()=> setEmail('')}
//               state={email}
//               setState={setEmail}
//             />

//             <FormImput
//               leftIcon={lock}
//               label="Password"
//               type={isTypePassword ? "password" : 'text'}
//               placeholder="..............."
//               rightIcon={eyeIcon}
//               onClick={()=> {
//                 setIsTypePassword((isTypePassword)=> !isTypePassword)
//               }}
//               state={password}
//               setState={setPassword}
//             />
//             </div>

           
//             <div className="btn">
//             <button className="bg-[rgba(239,146,115,1)] text-[white]" onClick={()=> {
//               console.log('email: ',email)
//               console.log('password: ',password)
//             }}>Login</button>
//             </div>
           
//             <div className="bottom">
//               <p style={{ color: "rgba(185,185,185,1)" }}>forgot password?</p>
//               <div className="links">
//                 <span>Not having an account? </span> &nbsp;
//                 <Link
//                   style={{
//                     textDecoration: "none",
//                     color: "rgba(239,146,115,1)",
//                   }}
//                   to="/register"
//                 > 
//                   Register
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="form__right"
//           style={{backgroundImage:`url(${rightImage})`,
//             backgroundSize: "cover",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//             height: "100%",
//           }}
//          >
    
//              <div className="father">
//                  <div className="son1">
//                     <span>
//                         " We have a broad variety of jobs specializing in <br />different areas, 
//                         from hardware testing to data entry, <br />localization to translation."
//                     </span>
//                  </div>
//                  <div className="son2">
//                     <div className="son11">
//                        <div className="son11-img">
//                          <img src={remote} alt="" style={{width:'41px', height:'41px'}}/>
//                        </div>
//                        <div className="son11-desc">
//                             <span>Over 4000+ careers of several
//                             categories available</span>
//                        </div>
//                     </div>
//                     <div className="son12">
//                         <div className="son12-img">
//                           <img src={map} alt="" style={{width:'41px', height:'41px'}}/>
//                         </div>
//                         <div className="son12-desc">
//                             <span>panning over 20+ countries
//                             worldwide</span>
//                         </div>
//                     </div>
//                  </div>
//              </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;











// import React, { useState } from "react";
// import "../../assets/css/authStyles/login.css";
// import { Link } from "react-router-dom";
// import FormImput from "../../components/formInputs";
// import emailIcon from "../../assets/images/email-svgrepo-com.svg";
// import cancelIcon from "../../assets/images/circle-xmark-svgrepo-com.svg";
// import lock from "../../assets/images/lock-keyhole-svgrepo-com.svg";
// import eyeIcon from "../../assets/images/eye-svgrepo-com.svg";
// import rightImage from "../../assets/images/girl-with-headphones-reading-book-with-book-front-her.jpeg";
// import scribble from "../../assets/images/scribblecolor.svg";
// import remote from "../../assets/images/remote-work-male.svg";
// import map from "../../assets/images/world-map-svgrepo-white.svg";
// import Swal from 'sweetalert2';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isTypePassword, setIsTypePassword] = useState(true);
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const validateForm = () => {
//     let isValid = true;

//     if (!email) {
//       setEmailError("Email is required!");
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       setEmailError("Email is invalid!");
//       isValid = false;
//     } else {
//       setEmailError('');
//     }

//     if (!password) {
//       setPasswordError("Password is required!");
//       isValid = false;
//     } else {
//       setPasswordError('');
//     }

//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       // Simulate login process
//       const isLoginSuccessful = (email === "!/\S+@\S+\.\S+/.test(email)" && password === "password123");

//       if (isLoginSuccessful) {
//         Swal.fire({
//           title: 'Success!',
//           text: 'Login successful!',
//           icon: 'success',
//           confirmButtonText: 'Okay'
//         });
//         console.log('email: ', email);
//         console.log('password: ', password);
//       } else {
//         Swal.fire({
//           title: 'Error!',
//           text: 'Email or password is incorrect!',
//           icon: 'error',
//           confirmButtonText: 'Try Again'
//         });
//       }
//     }
//   };

//   return (
//     <div className="main">
//       <div className="form">
//         <div className="form__left">
//           <div className="header">
//             <img src="src/assets/images/headphone-5-svgrepo-com.svg" alt="logo" />
//             <h1 className="font-black text-3xl">GlobalSpeak</h1>
//           </div>
//           <div className="container flex flex-col gap-[28px]">
//             <div className="top">
//               <h2>Welcome back!</h2>
//               <img src={scribble} alt="" />
//               <p style={{ color: "rgba(185,185,185,1)" }}>
//                 We hire talented people around the globe who have skills in languages{" "}
//               </p>
//               <p style={{ color: "rgba(185,185,185,1)" }}>
//                 and technology to provide deep market insight for our services.
//               </p>
//             </div>
//             <form className="flex flex-col gap-[20px] w-full items-center" onSubmit={handleSubmit}>
//               <FormImput
//                 leftIcon={emailIcon}
//                 type="email"
//                 label="Email address"
//                 placeholder="Lebron_James@gmail.com"
//                 rightIcon={cancelIcon}
//                 onClick={() => setEmail('')}
//                 state={email}
//                 setState={setEmail}
//               />
//               {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
//               <FormImput
//                 leftIcon={lock}
//                 label="Password"
//                 type={isTypePassword ? "password" : 'text'}
//                 placeholder="..............."
//                 rightIcon={eyeIcon}
//                 onClick={() => setIsTypePassword(prev => !prev)}
//                 state={password}
//                 setState={setPassword}
//               />
//               {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
//               <div className="btn">
//               <Link to="/dashboard">
//                 <button
//                   type="submit"
//                   className="bg-[rgba(239,146,115,1)] text-[white]"
//                 >
//                   Login
//                 </button>
//                 </Link>
//               </div>
//             </form>
//             <div className="bottom">
//               <p style={{ color: "rgba(185,185,185,1)" }}>Forgot password?</p>
//               <div className="links">
//                 <span>Not having an account? </span>
//                 <Link
//                   style={{
//                     textDecoration: "none",
//                     color: "rgba(239,146,115,1)",
//                   }}
//                   to="/register"
//                 >
//                   Register
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="form__right"
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
//                 "We have a broad variety of jobs specializing in <br />different areas,
//                 from hardware testing to data entry, <br />localization to translation."
//               </span>
//             </div>
//             <div className="son2">
//               <div className="son11">
//                 <div className="son11-img">
//                   <img src={remote} alt="" style={{ width: '41px', height: '41px' }} />
//                 </div>
//                 <div className="son11-desc">
//                   <span>Over 4000+ careers of several categories available</span>
//                 </div>
//               </div>
//               <div className="son12">
//                 <div className="son12-img">
//                   <img src={map} alt="" style={{ width: '41px', height: '41px' }} />
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


// export default Login;











import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/authStyles/login.css";
import { Link } from "react-router-dom";
import FormInput from "../../components/formInputs";
import emailIcon from "../../assets/images/email-svgrepo-com.svg";
import cancelIcon from "../../assets/images/circle-xmark-svgrepo-com.svg";
import lock from "../../assets/images/lock-keyhole-svgrepo-com.svg";
import eyeIcon from "../../assets/images/eye-svgrepo-com.svg";
import rightImage from "../../assets/images/girl-with-headphones-reading-book-with-book-front-her.jpeg";
import scribble from "../../assets/images/scribblecolor.svg";
import remote from "../../assets/images/remote-work-male.svg";
import map from "../../assets/images/world-map-svgrepo-white.svg";
import Swal from 'sweetalert2';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTypePassword, setIsTypePassword] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  // Form validation
  const validateForm = () => {
    let isValid = true;

    // Validate email
    if (!email) {
      setEmailError("Email is required!");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid!");
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required!");
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate login process
      const isLoginSuccessful = (email === "test@example.com" && password === "password123");

      if (isLoginSuccessful) {
        Swal.fire({
          title: 'Success!',
          text: 'Login successful!',
          icon: 'success',
          confirmButtonText: 'Okay'
        }).then(() => {
          navigate('/dashboard'); // Redirect to the dashboard after login
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Email or password is incorrect!',
          icon: 'error',
          confirmButtonText: 'Try Again'
        });
      }
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
          <div className="container flex flex-col gap-[28px]">
            <div className="top">
              <h2>Welcome back!</h2>
              <img src={scribble} alt="" />
              <p style={{ color: "rgba(185,185,185,1)" }}>
                We hire talented people around the globe who have skills in languages{" "}
              </p>
              <p style={{ color: "rgba(185,185,185,1)" }}>
                and technology to provide deep market insight for our services.
              </p>
            </div>
            <form className="flex flex-col gap-[20px] w-full items-center" onSubmit={handleSubmit}>
              <FormInput
                leftIcon={emailIcon}
                type="email"
                label="Email address"
                placeholder="Lebron_James@gmail.com"
                rightIcon={cancelIcon}
                onClick={() => setEmail('')}
                state={email}
                setState={setEmail}
              />
              {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
              
              <FormInput
                leftIcon={lock}
                label="Password"
                type={isTypePassword ? "password" : 'text'}
                placeholder="..............."
                rightIcon={eyeIcon}
                onClick={() => setIsTypePassword(prev => !prev)}
                state={password}
                setState={setPassword}
              />
              {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
              
              <div className="btn">
                <button
                  type="submit"
                  className="bg-[rgba(239,146,115,1)] text-[white]"
                >
                  Login
                </button> 
              </div>
            </form>
            <div className="bottom">
              <a style={{ color: "rgba(185,185,185,1)" }}>Forgot password?</a>
              <div className="links">
                <span>Not having an account? </span>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "rgba(239,146,115,1)",
                  }}
                  to="/register"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="form__right"
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
                "We have a broad variety of jobs specializing in <br />different areas,
                from hardware testing to data entry, <br />localization to translation."
              </span>
            </div>
            <div className="son2">
              <div className="son11">
                <div className="son11-img">
                  <img src={remote} alt="" style={{ width: '41px', height: '41px' }} />
                </div>
                <div className="son11-desc">
                  <span>Over 4000+ careers of several categories available</span>
                </div>
              </div>
              <div className="son12">
                <div className="son12-img">
                  <img src={map} alt="" style={{ width: '41px', height: '41px' }} />
                </div>
                <div className="son12-desc">
                  <span>Spanning over 20+ countries worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
