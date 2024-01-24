import React from "react";
import {
    Navbar,
    MobileNav,
    IconButton,
    Button,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import {
    Typography,
} from "@material-tailwind/react";





function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);
    // const [mood, setMood] = useState(true);
    const user = true;

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);


    // dark mood functionality


    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 space-x-4 flex items-center text-teal-700 font-semibold capitalize"
            >
                <NavLink className="mr-3" to="/">Home</NavLink>
                <NavLink className="mr-3" to="/owner-dashboard">Owner DashBoard</NavLink>
                <Link to="/login">
                    <Button
                        variant="text"
                        size="sm"
                        className="flex items-center gap-x-1 lg:inline-block text-lg capitalize bg-teal-800 text-white"
                    >
                        <span>Login</span>
                    </Button>
                </Link>

            </Typography>
        </ul>
    );

    return (
        <div className="-mt-6 -mb-6 pet-navbar max-h-[768px] bg-white lg:pt-4">
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-around text-blue-gray-900">
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <div className="flex items-center gap-x-1">
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>

                {/* mobile device */}
                <MobileNav open={openNav}>
                    {navList}
                    {/* <div className="flex items-center gap-x-1">
            <Link to="/login">
              <Button fullWidth variant="text" size="sm" className="">
                <span>Log In</span>
              </Button>
            </Link>
          </div> */}
                </MobileNav>
            </Navbar>
        </div>
    );
}

export default StickyNavbar;