import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (e) => {
    console.log(e);

    const formData = new FormData();
    formData.append("image", e.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          const imgURL = data.data.display_url;
          const {
            className,
            instructorName,
            instructorEmail,
            availableSeat,
            price,
            details,
          } = e;
          const newItem = {
            className,
            instructorName,
            instructorEmail,
            classImg: imgURL,
            price: parseFloat(price),
            availableSeat: parseFloat(availableSeat),
            details,
          };
          console.log(newItem);
          axiosSecure.post("/addClass", newItem).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <>
      <div className="bg-[#F4F3F0] py-2">
        <h1 className="text-center font-bold text-4xl py-10">ADD Classes</h1>
        <div className="px-24">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    {...register("className", {
                      required: true,
                      maxLength: 120,
                    })}
                    placeholder="Class Name"
                    className="input input-bordered w-full"
                    required
                  />
                </label>
              </div>
            </div>

            <div className="lg:flex mb-8">
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text">Instructor Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="instructorName"
                    {...register("instructorName", { required: true })}
                    placeholder="Instructor Name"
                    defaultValue={user?.displayName}
                    className="input input-bordered w-full"
                    readOnly
                  />
                </label>
              </div>
              <div className="form-control lg:w-1/2 lg:ml-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <label className="input-group">
                  <input
                    type="email"
                    {...register("instructorEmail", { required: true })}
                    placeholder="Instructor Email"
                    defaultValue={user?.email}
                    className="input input-bordered w-full"
                    readOnly
                  />
                </label>
              </div>
            </div>

            <div className="lg:flex mb-8">
              <div className="form-control lg:w-1/2 lg:ml-4">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <label className="input-group">
                  <input
                    type="file"
                    {...register("image", { required: true })}
                    className="file-input file-input-bordered w-full max-w-xs"
                  />
                </label>
              </div>
              <div className="form-control lg:w-1/2 lg:ml-4">
                <label className="label">
                  <span className="label-text">Available Seat</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    {...register("availableSeat", { required: true })}
                    placeholder="availableSeat"
                    className="input input-bordered w-full"
                    required
                  />
                </label>
              </div>
            </div>
            <div className=" mb-8">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <label className="input-group relative">
                  <span className="input-group-addon">$</span>
                  <input
                    type="number"
                    {...register("price", { required: true })}
                    placeholder="$00"
                    className="input input-bordered w-full"
                    required
                  />
                </label>
              </div>
            </div>

            <div className="mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <label className="input-group">
                  <textarea
                    className="input input-bordered w-full"
                    required
                    {...register("details", { required: true })}
                    placeholder="Enter description"
                  ></textarea>
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Add Class"
              className="border hover:bg-violet-600 duration-300  w-full p-5 rounded-xl text-white text-center bg-slate-600 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddToys;
