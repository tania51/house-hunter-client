import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import loginImg from "./../../assets/login.jpg";
import {
    Card,
    Input,
    Typography,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
// import { Select, Option } from "@material-tailwind/react";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

const Register = () => {
    // const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const [selectedValue, setSelectedValue] = useState('');
    const [userInformation, setUserInformation] = useState([])

    axiosPublic.get('/all-user')
        .then(res => {
            setUserInformation(res.data)
        })

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const pass = e.target.password.value;
        const userData = {
            userName: name,
            userPhone: phone,
            userEmail: email,
            userPass: pass,
            role: selectedValue
        }

        // checking user info already exists or not

        const filterUserInfo = userInformation && userInformation.find(aUserInfo => aUserInfo.userEmail === email)

        if (!filterUserInfo) {
            axiosPublic.post('/users', userData)
                .then(res => {
                    console.log(res.data.insertedId);
                    if (res.data.insertedId) {
                        // const userEmail = {
                        //     email: email
                        // }
                        // axiosPublic.post('/jwt', userEmail)
                        //     .then(res => {
                        //         if (res.data.token) {
                        //             localStorage.setItem('access-token', res.data.token)
                        //             Swal.fire({
                        //                 icon: "success",
                        //                 title: "User Created Successfully!!",
                        //                 showConfirmButton: false,
                        //                 timer: 1500
                        //             });
                        //             navigate('/login')
                        //         }
                        //     })
                    } else {
                        localStorage.removeItem('access-token')
                    }

                    // if(res.data.insertedId) {
                    //     Swal.fire({
                    //         icon: "success",
                    //         title: "User Created Successfully!!",
                    //         showConfirmButton: false,
                    //         timer: 1500
                    //       });
                    // }
                })
                .catch(err => {
                    console.log(err);
                })

        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "User Already Exists! Try again with another Email Address."
            });
        }

        e.target.name.value = '';
        e.target.phone.value = '';
        e.target.email.value = '';
        e.target.password.value = '';


    }

    return (
        <div className="flex gap-8 px-20 items-center justify-center">
            <div>
                <img src={loginImg} alt="" />
            </div>
            <div>
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" className="text-4xl">
                        Sign Up
                    </Typography>

                    <form onSubmit={onSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 text-lg">
                        <div className="mb-1 flex flex-col gap-6">

                            {/* name field */}
                            <Typography variant="h6" className="-mb-3">
                                Your Name
                            </Typography>
                            <Input name="name"
                                size="lg"
                                placeholder="Your Name"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 p-2"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />

                            {/* role field */}
                            <div className="w-full">
                                <Typography variant="h6" className="-mb-3">
                                    Your Role
                                </Typography> <br />
                                <select
                                    name="category"
                                    onChange={handleSelectChange}
                                    label="Select Version" className="w-full py-2 px-2 border border-blue-gray-200 rounded-lg p-2"
                                >
                                    <option>Select One</option>
                                    <option value="owner">House Owner</option>
                                    <option value="renter">House Renter</option>
                                </select>
                            </div>

                            {/* Phone field */}
                            <Typography variant="h6" className="-mb-3">
                                Your Phone Number
                            </Typography>
                            <Input name="phone"
                                size="lg"
                                placeholder="Your Phone Number"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 p-2"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />

                            {/* email field */}
                            <Typography variant="h6" className="-mb-3">
                                Your Email
                            </Typography>
                            <Input name="email"
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 p-2"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" className="-mb-3">
                                Password
                            </Typography>
                            <Input name="password"
                                type="password"
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 p-2"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <br />
                        {/* <Input
                            type="submit" value="Sign In" 
                        /> */}
                        <input type="submit" value="Sign In" className="font-medium bg-amber-800 w-full py-2 rounded-lg cursor-pointer block text-center text-white mt-4" />

                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Already have an account?{" "}

                            <a href="/login" className="text-blue-700 font-semibold hover:underline">
                                Sign In
                            </a>
                        </Typography>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Register;