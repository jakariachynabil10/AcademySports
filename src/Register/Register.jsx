import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Register = () => {
    const [axiosSecure] = useAxiosSecure()
    const {createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    reset,
   formState : {errors},
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.ConfirmPassword)
    .then(result =>{
        const loggedUser = result.user
        console.log(loggedUser)
        updateUserProfile(data.name, data.photoUrl)
        .then(()=>{
            const savedUser = {name : data.name , email : data.email}
            axiosSecure.post('/users', savedUser)
            .then(data => {
                console.log(data)
                if(data.data.insertedId){
                    reset()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User created successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/')
                }
            })
        })

    })

  };
  return (
    <div className="hero min-h-screen bg-base-200 p-5">
      <div className="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="font-bold text-xl">Register Now</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: true,
                })}
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                placeholder="password"
                className="input input-bordered relative"
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Confirm Password</span>
              </label>

              <input
                {...register("ConfirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                type="password"
                placeholder="password"
                className="input input-bordered relative"
              />

              {errors.confirmPassword && (
                <span className="text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>

              <input
                {...register("photoUrl", {
                  required: true,
                })}
                type="url"
                placeholder="Photo URL"
                className="input input-bordered relative"
              />
            </div>
            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">
                Already Have a Account
              </Link>
            </label>
            <div className="form-control mt-6">
              <button className="px-8 py-3  bg-[#1f7a98] text-white rounded-md">
                Register
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
  );
};

export default Register;
