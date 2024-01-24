import { useEffect, useState } from "react";
import StickyNavbar from "../../components/Shared/StickyNavbar/StickyNavbar";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";


const Home = () => {
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
    console.log(allHouses);

    return (
        <div>
            <StickyNavbar></StickyNavbar>
            <h1 className="text-3xl text-center pt-16 font-bold">All Houses</h1>
            {/* Home page main content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-10 py-10">
                {
                    allHouses && allHouses.map(singleHouse => <Card key={singleHouse?._id} className="w-full max-w-[48rem] flex-row bg-teal-50 rounded-lg">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="m-0 w-2/5 shrink-0 rounded-r-none"
                    >
                      <img
                        src={singleHouse?.hPicture}
                        alt="card-image"
                        className="h-full w-full object-cover rounded-l-lg"
                      />
                    </CardHeader>
                    <CardBody className="p-5">
                      <Typography variant="h4" color="gray" className="mb-4 uppercase">
                        House Name: {singleHouse?.hName}
                      </Typography>
                      <Typography variant="h6" color="blue-gray" className="mb-2">
                      House Address: {singleHouse?.hAddress} <br />
                      Rent: {singleHouse?.hRent} <br />
                      Bedrooms: {singleHouse?.hBedrooms} <br />
                      Bathrooms: {singleHouse?.hBathrooms}
                      </Typography>
                      <Typography color="gray" className="mb-8 font-normal">
                        {singleHouse?.hDescription}
                      </Typography>
                    </CardBody>
                  </Card>)
                }
            </div>
        </div>
    );
};

export default Home;