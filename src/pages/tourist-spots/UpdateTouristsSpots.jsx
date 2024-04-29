import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constent/constent";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const UpdateTouristsSpots = () => {
    const { id } = useParams();
    const { data } = useContext(AuthContext);
    const filterData = data?.find((e) => e._id === id);
    const { register, handleSubmit, } = useForm();

    const onSubmit = (data) => {
        // const { image, spot, country, location, cost, seasonality, time, visitors, description, email, name } = data;
        console.log(data);

        fetch(BASE_URL + `/tourists-spots/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <div className="border rounded-lg shadow p-10">
        <Helmet>
            <title>Trip Topia | Update Tourist Spot</title>
        </Helmet>
            <h1 className=" text-center mb-4 text-3xl dark:text-white">Update Tourists Spot</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text dark:text-white">Image Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" defaultValue={filterData?.image} placeholder="Image Url" {...register("image", { required: true })} className="input border border-gray-300 focus:outline-none focus:border-primary w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text dark:text-white">Tourists Spot Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="spot" defaultValue={filterData?.spot} placeholder="Tourists Spot Name" {...register("spot", { required: true })} className="input border border-gray-300 focus:outline-none focus:border-primary w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text dark:text-white">Country Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="country" defaultValue={filterData?.country} placeholder="Country Name" {...register("country", { required: true })} className="input border border-gray-300 focus:outline-none focus:border-primary w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text dark:text-white">Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="location" defaultValue={filterData?.location} placeholder="Location" {...register("location", { required: true })} className="input border border-gray-300 focus:outline-none focus:border-primary w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text dark:text-white">Average Cost</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="cost" defaultValue={filterData?.cost} placeholder="Average Cost" {...register("cost", { required: true })} className="input border border-gray-300 focus:outline-none focus:border-primary w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text dark:text-white">Seasonality</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seasonality" defaultValue={filterData?.seasonality} placeholder="Seasonality" {...register("seasonality", { required: true })} className="input border border-gray-300 focus:outline-none focus:border-primary w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text dark:text-white">Travel Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="time" defaultValue={filterData?.time} placeholder="Travel Time" {...register("time", { required: true })} className="input border border-gray-300 focus:outline-none focus:border-primary w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text dark:text-white">Total Visitors Per Year</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="visitors" defaultValue={filterData?.visitors} placeholder="Total Visitors Per Year" {...register("visitors", { required: true })} className="input border border-gray-300 focus:outline-none focus:border-primary w-full" />
                        </label>
                    </div>
                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="label-text dark:text-white">Short Description</span>
                        </label>
                        <div className="input-group">
                            <textarea name="description" defaultValue={filterData?.description} placeholder="Short Description" {...register("description", { required: true })} className="pt-3 h-20 input border border-gray-300 focus:outline-none focus:border-primary w-full"></textarea>
                        </div>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text dark:text-white">User Email</span>
                        </label>
                        <label className="input-group">
                            <input readOnly type="text" name="email" defaultValue={filterData?.email} placeholder="User Email" {...register("email", { required: true })} className="input border border-gray-300 focus:outline-none focus:border-primary w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text dark:text-white">User Name</span>
                        </label>
                        <label className="input-group">
                            <input readOnly type="text" name="name" defaultValue={filterData?.name} placeholder="User Name" {...register("name", { required: true })} className="input border border-gray-300 focus:outline-none focus:border-primary w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Tourist Spot" className="btn btn-block bg-primary hover:bg-transparent hover:outline hover:outline-1 hover:outline-primary hover:text-primary transition duration-300 ease-in-out text-white mt-10" />
            </form>
        </div>
    );
};

export default UpdateTouristsSpots;