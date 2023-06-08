import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1686201731~exp=1686202331~hmac=8937a2325aac090b2661192d01fb2b7ecb098db6b76a0922851ab53ec5ecc4ef"
            className="h-[440px] rounded-2xl"
            alt=""
          />

          <div className="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="font-bold text-xl">Login Now</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("mail", {
                      required: "Email Address is required",
                    })}
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>

               
                 <input
                    {...register("password", { required: true })}
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered relative"
                   
                  />
                  <div  onClick={togglePasswordVisibility} className="absolute pb-5 top-1/2  right-14 transform -translate-y-1/2">
                  {showPassword ? (
                    <>
                      <FaEyeSlash></FaEyeSlash>
                    </>
                  ) : (
                    <>
                      <FaEye></FaEye>
                    </>
                  )}
                  </div>
                 
       

                  <label className="label">
                    <Link to='/register' className="label-text-alt link link-hover">
                     Create a Account
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="px-8 py-3  bg-[#1f7a98] text-white rounded-md">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="divider mb-10">
              <button className="border px-4 py-2 btn-primary rounded-full flex items-center gap-2">
                {" "}
                <FaGoogle></FaGoogle> Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;