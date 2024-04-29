import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { AuthContext } from "../provider/AuthProvider";
import { BASE_URL } from "../../constent/constent";
import { Helmet } from "react-helmet-async";


const AddTouristSpot = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        // const { image, spot, country, location, cost, seasonality, time, visitors, description, email, name } = data;
        console.log(data);

        fetch(BASE_URL + '/tourists-spots', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <div className=" border rounded-lg shadow p-10">
            <Helmet>
                <title>Trip Topia | Add Spot</title>
            </Helmet>
            <h1 className=" text-center mb-4 text-3xl dark:text-white">Add Tourists Spot</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Image Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image Url" {...register("image", { required: true })} className="input border border-gray-300 focus:outline-none focus:border-primary w-full" />
                        </label>
                        {errors.image && <span className=" text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text dark:text-white">Tourists Spot Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="spot" placeholder="Tourists Spot Name" {...register("spot", { required: true })} className="input border border-gray-300 focus:outline-none focus:border-primary w-full" />
                        </label>
                        {errors.spot && <span className=" text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text dark:text-white">Country Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="country" placeholder="Country Name" {...register("country", { required: true })} className="input border border-gray-300 focus:outline-none focus:border-primary w-full" />
                        </label>
                        {errors.country && <span className=" text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text dark:text-white">Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="location" placeholder="Location" {...register("location", { required: true })} className="input border border-gray-300 focus:outline-none focus:border-primary w-full" />
                        </label>
                        {errors.location && <span className=" text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text dark:text-white">Average Cost</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="cost" placeholder="Average Cost" {...register("cost", { required: true })} className="input border border-gray-300 focus:outline-none focus:border-primary w-full" />
                        </label>
                        {errors.cost && <span className=" text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text dark:text-white">Seasonality</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seasonality" placeholder="Seasonality" {...register("seasonality", { required: true })} className="input border border-gray-300 focus:outline-none focus:border-primary w-full" />
                        </label>
                        {errors.seasonality && <span className=" text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text dark:text-white">Travel Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="time" placeholder="Travel Time" {...register("time", { required: true })} className="input border border-gray-300 focus:outline-none focus:border-primary w-full" />
                        </label>
                        {errors.time && <span className=" text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text dark:text-white">Total Visitors Per Year</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="visitors" placeholder="Total Visitors Per Year" {...register("visitors", { required: true })} className="input border border-gray-300 focus:outline-none focus:border-primary w-full" />
                        </label>
                        {errors.visitors && <span className=" text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="label-text dark:text-white">Short Description</span>
                        </label>
                        <div className="input-group">
                            <textarea name="description" placeholder="Short Description" {...register("description", { required: true })} className="pt-3 h-20 input border border-gray-300 focus:outline-none focus:border-primary w-full"></textarea>
                        </div>
                        {errors.description && <span className=" text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text dark:text-white">User Email</span>
                        </label>
                        <label className="input-group">
                            <input readOnly type="text" name="email" defaultValue={user ? user.email : ''} placeholder="User Email" {...register("email", { required: true })} className="input border border-gray-300 focus:outline-none focus:border-primary w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text dark:text-white">User Name</span>
                        </label>
                        <label className="input-group">
                            <input readOnly type="text" name="name" defaultValue={user ? user.displayName : ''} placeholder="User Name" {...register("name", { required: true })} className="input border border-gray-300 focus:outline-none focus:border-primary w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Tourist Spot" className="btn btn-block bg-primary hover:bg-transparent hover:outline hover:outline-1 hover:outline-primary hover:text-primary transition duration-300 ease-in-out text-white mt-10" />
            </form>
        </div>
    );
};

export default AddTouristSpot;