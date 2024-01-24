
import {
    Card,
    Input,
    Typography,
} from "@material-tailwind/react";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddHouse = () => {
    const axiosPublic = useAxiosPublic();


    const onSubmit = (e) => {

        e.preventDefault();
        const hName = e.target.hName.value;
        const hAddress = e.target.hAddress.value;
        const hCity = e.target.hCity.value;
        const hBedrooms = e.target.hBedrooms.value;
        const hBathrooms = e.target.hBathrooms.value;
        const hRmSize = e.target.hRmSize.value;
        const hPicture = e.target.hPicture.value;
        const hAvailablityDate = e.target.hAvailablityDate.value;
        const hRent = e.target.hRent.value;
        const hPhone = e.target.hPhone.value;
        const hDescription = e.target.hDescription.value;
        console.log(hName, hAddress, hCity, hBedrooms, hBathrooms, hRmSize, hPicture, hAvailablityDate, hRent, hPhone, hDescription);

        const addedHouseInfo = {
            hName: hName,
            hAddress: hAddress,
            hCity: hCity,
            hBedrooms: hBedrooms,
            hBathrooms: hBathrooms,
            hRmSize: hRmSize,
            hPicture: hPicture,
            hAvailablityDate: hAvailablityDate,
            hRent: hRent,
            hPhone: hPhone,
            hDescription: hDescription,
        }

        axiosPublic.post('/add-house', addedHouseInfo)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Login Successfully!!",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        .then(err => {
            console.log(err);
        })

        e.target.hName.value = '';
        e.target.hAddress.value = '';
        e.target.hCity.value = '';
        e.target.hBedrooms.value = '';
        e.target.hBathrooms.value = '';
        e.target.hRmSize.value = '';
        e.target.hPicture.value = '';
        e.target.hAvailablityDate.value = '';
        e.target.hRent.value = '';
        e.target.hPhone.value = '';
        e.target.hDescription.value = '';
    }

    return (
        <div className="flex gap-8 px-8 items-center justify-center">
            <div>
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" className="text-4xl">
                        Add House
                    </Typography>

                    <form onSubmit={onSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 text-lg">
                        <div className="mb-1 flex flex-col gap-6">

                            {/* name field */}
                            <Typography variant="h6" className="-mb-3">
                                House Name
                            </Typography>
                            <Input name="hName"
                                size="lg"
                                placeholder="House Name"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 p-2"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />

                            {/* Address field */}
                            <Typography variant="h6" className="-mb-3">
                                House Address
                            </Typography>
                            <Input name="hAddress"
                                size="lg"
                                placeholder="House Address"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 p-2"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />

                            {/* City field */}
                            <Typography variant="h6" className="-mb-3">
                                City
                            </Typography>
                            <Input name="hCity"
                                size="lg"
                                placeholder="city"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 p-2"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />

                            {/* Bedrooms field */}
                            <Typography variant="h6" className="-mb-3">
                            Bedrooms
                            </Typography>
                            <Input name="hBedrooms" type="number"
                                size="lg"
                                placeholder="Bedrooms"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 p-2"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />

                            {/* Bathrooms field */}
                            <Typography variant="h6" className="-mb-3">
                            Bathrooms
                            </Typography>
                            <Input name="hBathrooms" type="number"
                                size="lg"
                                placeholder="Bathrooms"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 p-2"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />

                            {/* room size field */}
                            <Typography variant="h6" className="-mb-3">
                            Room Size
                            </Typography>
                            <Input name="hRmSize"
                                size="lg"
                                placeholder="Room Size"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 p-2"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />

                            {/* Picture field */}
                            <Typography variant="h6" className="-mb-3">
                            Picture
                            </Typography>
                            <Input name="hPicture" type="text"
                                size="lg"
                                placeholder="https://images.png"
                                required
                            />

                            {/* Availability Date field */}
                            <Typography variant="h6" className="-mb-3">
                            Availability Date
                            </Typography>
                            <Input name="hAvailablityDate" type="date"
                                size="lg"
                                placeholder="Availability Date"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 p-2"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />

                            {/* Rent Per Month field */}
                            <Typography variant="h6" className="-mb-3">
                            Rent Per Month
                            </Typography>
                            <Input name="hRent" type="number"
                                size="lg"
                                placeholder="Rent Per Month"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 p-2"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />

                            {/* Phone Number field */}
                            <Typography variant="h6" className="-mb-3">
                            Phone Number
                            </Typography>
                            <Input name="hPhone" type="number"
                                size="lg"
                                placeholder="Phone Number"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 p-2"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />

                            {/* Description field */}
                            <Typography variant="h6" className="-mb-3">
                            Description
                            </Typography>
                            <Input name="hDescription" type="text"
                                size="lg"
                                placeholder="Description"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 p-2"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />

                        </div>
                        <br />
                        {/* <Input
                            type="submit" value="Sign In" 
                        /> */}
                        <input type="submit" value="Sign In" className="font-medium bg-amber-800 w-full py-2 rounded-lg cursor-pointer block text-center text-white mt-4" />

                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Already have an account?{" "}

                            <a href="/register" className="text-blue-700 font-semibold hover:underline">
                                Sign In
                            </a>
                        </Typography>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default AddHouse;