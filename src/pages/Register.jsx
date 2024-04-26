import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "./provider/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { userRegistration } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const [showPass, setShowPass] = useState(false);

    const onSubmit = (data) => {
        const { name, photoUrl, email, password } = data;

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long");
        }
        else if (!password.match(/[a-z]/)) {
            toast.error("Password must contain at least one lowercase letter");
        }
        else if (!password.match(/[A-Z]/)) {
            toast.error("Password must contain at least one uppercase letter");
        }
        else {
            userRegistration(email, password)
                .then(result => {
                    console.log(result);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    return (
        <div className="lg:w-[600px] mx-auto lg:mt-10">
            <form onSubmit={handleSubmit(onSubmit)} className=" space-y-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Your name</span>
                    </label>
                    <input name="name" type="text" placeholder="Enter your name" className="input rounded-none border-b-2 border-b-gray-300 focus:outline-none focus:border-0 focus:border-b-2 focus:border-b-primary" {...register("name", { required: true })} />
                    {errors.name && <span className=" text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Photo URL</span>
                    </label>
                    <input name="photoUrl" type="text" placeholder="Enter your photo url" className="input rounded-none border-b-2 border-b-gray-300 focus:outline-none focus:border-0 focus:border-b-2 focus:border-b-primary" {...register("photoUrl", { required: true })} />
                    {errors.photoUrl && <span className=" text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Email address</span>
                    </label>
                    <input name="email" type="email" placeholder="Enter your email address" className="input rounded-none border-b-2 border-b-gray-300 focus:outline-none focus:border-0 focus:border-b-2 focus:border-b-primary" {...register("email", { required: true })} />
                    {errors.email && <span className=" text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Password</span>
                    </label>
                    <span className=" flex relative">
                        <input name="password" type={showPass ? 'text' : 'password'} placeholder="Enter your password" className=" w-full input rounded-none border-b-2 border-b-gray-300 focus:outline-none focus:border-0 focus:border-b-2 focus:border-b-primary" {...register("password", { required: true })} />
                        <span className=" absolute top-1/3 right-3" onClick={() => setShowPass(!showPass)}>
                            {
                                showPass ? <IoEyeOffOutline /> : <IoEyeOutline />
                            }
                        </span>
                    </span>
                    {errors.password && <span className=" text-red-500">This field is required</span>}
                </div>
                <div className="form-control flex flex-row items-center">
                    <input name="checkbox" type="checkbox" id="termsAndConditions" className="mr-2" {...register("checkbox", { required: true })} />
                    <label htmlFor="termsAndConditions" className="cursor-pointer">
                        Accept Term & Conditions
                    </label>
                </div>
                {errors.checkbox && <span className=" text-red-500">Accept our term & conditions to proceed</span>}
                <div className="form-control mt-6">
                    <button className="btn text-white bg-primary hover:bg-primary transition duration-300 ease-in-out">Register</button>
                </div>
                <p className=" mt-3 text-center">Already Have An Account ? <Link className=" text-red-500" to={'/login'}>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;