import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "./provider/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { userLogin, googleSignIn, githubSignIn } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const [showPass, setShowPass] = useState(false);

    const onSubmit = (data) => {
        const { email, password } = data;

        userLogin(email, password)
            .then(result => {
                console.log(result);
                toast.success('Successfully Logged In');
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
                toast.success('Successfully Logged In');
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                console.log(result);
                toast.success('Successfully Logged In');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="md:w-[600px] mx-auto lg:mt-10">
            <form onSubmit={handleSubmit(onSubmit)} className=" space-y-6">
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
                <div>
                    <p className=" text-end text-gray-500">Forgot password?</p>
                </div>
                <div className="form-control mt-6">
                    <button className="btn text-white bg-primary hover:bg-transparent hover:border hover:border-primary hover:text-primary transition duration-300 ease-in-out">Login</button>
                </div>
            </form>
            <div className=" m-6 space-y-4">
                <p className=" text-center">Or Sign In Using</p>
                <span className="flex justify-center items-center gap-2">
                    <button onClick={handleGoogleSignIn}><FcGoogle size={45} /></button>
                    <button onClick={handleGithubSignIn}><FaGithub size={40} /></button>
                </span>
            </div>
            <p className=" mt-3 text-center">Do Not Have An Account ? <Link className=" text-red-500" to={'/register'}>Register</Link></p>

        </div>
    );
};

export default Login;