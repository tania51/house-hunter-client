
import {
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
} from "@material-tailwind/react";
import { Link, Outlet } from "react-router-dom";
import { FaBorderAll } from "react-icons/fa6";
import { MdAddHomeWork } from "react-icons/md";

const Sidebar = () => {


    return (
        <>
            <div className="flex gap-10 h-max custom">
                <div className="w-3/12 text-white flex-1 bg-teal-700 max-h-[700vh]">
                    <div className="mb-2 flex items-center justify-between p-4">
                        <Typography variant="h5" color="blue-gray">

                        </Typography>
                    </div>

                    {/* dashboard sidebar */}
                    <List className="text-3xl">

                        {/* Owners All House */}
                        <ListItem className="pb-5">
                            <ListItemPrefix>
                            <FaBorderAll />
                            </ListItemPrefix>
                            <Link to="/owner-dashboard/">All House</Link>
                            <ListItemSuffix>
                            </ListItemSuffix>
                        </ListItem>

                        {/* add a pet */}
                        <ListItem>
                            <ListItemPrefix>
                            <MdAddHomeWork />
                            </ListItemPrefix>
                            <Link to="/owner-dashboard/addHouse">Add House</Link>
                            <ListItemSuffix>
                            </ListItemSuffix>
                        </ListItem>

                    </List>

                </div>
                <div className="w-9/12">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Sidebar;