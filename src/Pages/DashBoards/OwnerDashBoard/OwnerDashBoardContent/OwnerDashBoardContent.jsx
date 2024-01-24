import { Card, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";



const OwnerDashBoardContent = () => {
    const [allHouses, setAllHouses] = useState([])
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/all-house')
            .then(res => {
                setAllHouses(res.data)
            })
            .then(err => {
                console.log(err.message);
            })
    }, [axiosPublic])


    // delete user
    const deleteHandeler = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/delete-house/${id}`)
                    .then(res => {
                        console.log('deleted house', res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Pet has been deleted.",
                                icon: "success"
                            });
                        }
                        const filteredHouse = allHouses.filter(aHouse => aHouse._id !== id)
                        setAllHouses(filteredHouse)
                    })
                


            }
        });
    }

    const makeEditUser = singleHouse => {
        console.log(singleHouse);
        const houseInfo = {
            hName: singleHouse.hName,
            hAddress: singleHouse.hAddress,
            hCity: singleHouse.hCity
        }
        console.log(houseInfo);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.patch(`/single-house/${singleHouse._id}`, houseInfo)
                .then(res => {
                    console.log(res.data);
                    if(res.data.modifiedCount > 0) {
                        Swal.fire({
                            title: "Updated!",
                            text: `${singleHouse?.hName} Updated Successfully`,
                            icon: "success"
                          });
                    }
                })

              
            }
          });
    }


    

    return (
        <div className="mt-20">
            <h2 className="text-5xl text-teal-900 text-bold">Welcome to DashBoard!!</h2>

            <div className="mt-14">
                {
                    allHouses.length === 0 ? <p className="text-2xl text-red-900 h-[70vh] flex items-center justify-center w-full">There is No Pet. Please Add First!!</p>
                        :
                        <>
                            <div className="-mt-10 mb-4">
                                <div></div>
                            </div>
                            <div>
                                <Card className="h-full w-full overflow-scroll">
                                    <table className="w-full min-w-max table-auto text-left">
                                        <thead>
                                            <tr>

                                                {/* House name */}
                                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal leading-none opacity-70"
                                                    >
                                                        House Name
                                                    </Typography>
                                                </th>

                                                {/* House Address */}
                                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal leading-none opacity-70"
                                                    >
                                                        House Address
                                                    </Typography>
                                                </th>

                                                {/* City */}
                                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal leading-none opacity-70"
                                                    >
                                                        City
                                                    </Typography>
                                                </th>

                                                {/* Bedrooms */}
                                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal leading-none opacity-70"
                                                    >
                                                        Bedrooms
                                                    </Typography>
                                                </th>

                                                {/* Bathrooms */}
                                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal leading-none opacity-70"
                                                    >
                                                        Bathrooms
                                                    </Typography>
                                                </th>

                                                {/* Room Size */}
                                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal leading-none opacity-70"
                                                    >
                                                        Room Size
                                                    </Typography>
                                                </th>

                                                {/* Picture */}
                                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal leading-none opacity-70"
                                                    >
                                                        Picture
                                                    </Typography>
                                                </th>

                                                {/* Availability Date */}
                                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal leading-none opacity-70"
                                                    >
                                                        Availability Date
                                                    </Typography>
                                                </th>

                                                {/* Rent Per Month */}
                                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal leading-none opacity-70"
                                                    >
                                                        Rent Per Month
                                                    </Typography>
                                                </th>

                                                {/* Phone Number */}
                                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal leading-none opacity-70"
                                                    >
                                                        Phone Number
                                                    </Typography>
                                                </th>

                                                {/* Description */}
                                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal leading-none opacity-70"
                                                    >
                                                        Description
                                                    </Typography>
                                                </th>


                                                {/* Action Btn */}
                                                {/* Delete */}
                                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal leading-none opacity-70"
                                                    >
                                                        Delete
                                                    </Typography>
                                                </th>

                                                {/* Edit */}
                                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal leading-none opacity-70"
                                                    >
                                                        Edit
                                                    </Typography>
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* aPet */}
                                            {/* {
                                allPet.map(aPet => {

                                })
                            } */}
                                            {allHouses && allHouses.map(aHouse => <tr key={aHouse._id} className="even:bg-blue-gray-50/50">
                                                {/* home name */}
                                                <td className="p-4">
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {aHouse.hName}
                                                    </Typography>
                                                </td>

                                                {/* address */}
                                                <td className="p-4">
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {aHouse.hAddress}
                                                    </Typography>
                                                </td>

                                                {/* city */}
                                                <td className="p-4">
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {aHouse.hCity}
                                                    </Typography>
                                                </td>

                                                {/* home Bedrooms */}
                                                <td className="p-4">
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {aHouse.hBedrooms}
                                                    </Typography>
                                                </td>

                                                {/* Bathrooms */}
                                                <td className="p-4">
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {aHouse.hBathrooms}
                                                    </Typography>
                                                </td>

                                                {/* Room Size */}
                                                <td className="p-4">
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {aHouse.hRmSize}
                                                    </Typography>
                                                </td>

                                                {/* Picture */}
                                                <td className="p-4">
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        <img className="w-20" src={aHouse.hPicture} alt={aHouse.hName} />

                                                    </Typography>
                                                </td>

                                                {/* Availablity Date */}
                                                <td className="p-4">
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {aHouse.hAvailablityDate}
                                                    </Typography>
                                                </td>

                                                {/* Rent Per Month */}
                                                <td className="p-4">
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {aHouse.hRent}
                                                    </Typography>
                                                </td>

                                                {/* Phone Number */}
                                                <td className="p-4">
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {aHouse.hPhone}
                                                    </Typography>
                                                </td>

                                                {/* Description */}
                                                <td className="p-4">
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {aHouse.hDescription}
                                                    </Typography>
                                                </td>


                                                {/* delete btn */}
                                                <td className="p-4">
                                                    <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                                        <button onClick={() => deleteHandeler(aHouse._id)} className="flex items-center gap-2 bg-teal-900 px-3 py-2 rounded text-white">Delete</button>
                                                    </Typography>
                                                </td>

                                                {/* update btn */}
                                                <td className="p-4">
                                                    <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">

                                                        <button onClick={() => makeEditUser(aHouse)} className="bg-teal-500 text-white px-3 py-2 rounded">Edit
                                                        </button>

                                                        {/* <button className="flex items-center gap-2 bg-teal-900 px-3 py-2 rounded text-white">Update</button> */}
                                                    </Typography>
                                                </td>
                                            </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </Card>
                            </div>
                        </>
                }

            </div>
        </div>
    );
};

export default OwnerDashBoardContent;