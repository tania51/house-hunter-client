import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://house-hunter-server-gamma-topaz.vercel.app'
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;