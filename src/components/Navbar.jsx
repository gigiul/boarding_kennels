import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";
import { navbar } from "../constants";
import Logo from "../assets//logo/logoPiccolo.png";

export default function MyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {
                navbar.map((item, i) => (
                    <Typography key={i}
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-semibold text-xl"
                    >
                        <a href={`#${item.id}`} className="flex items-center hover:underline" onClick={() => setOpenNav(false)}>
                            {item.title}
                        </a>
                    </Typography>
                ))
            }
        </ul>
    );

    return (
        <>
            <Navbar className="sm:px-16 px-6 py-4 max-w-full mx-auto sticky inset-0 z-10 h-max rounded-none lg:px-8 lg:py-4 shadow-none">
                <div className="max-w-7xl mx-auto flex items-center justify-between text-blue-gray-900">
                    <div className="flex gap-2 justify-center text-center mr-4 cursor-pointer" onClick={() => {
                        window.scrollTo(0, 0);
                    }}>
                        <img src={Logo} alt="logo" width={50} height={50} />
                        <Typography
                            as="a"
                            href="#"
                            className="text-2xl font-bold text-center m-auto sm:block hidden"
                        >
                            La casetta nel verde
                        </Typography>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <Button
                            variant="gradient"
                            size="sm"
                            className="hidden lg:inline-block"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href='#contact';
                                }}
                        >
                            <a href="#contact">Prenota</a>
                        </Button>
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
                <MobileNav open={openNav}>
                    {navList}
                    <Button variant="gradient" size="sm" fullWidth className="mb-2"                     onClick={(e) => {
                                e.preventDefault();
                                window.location.href='#contact';
                                }}>
                        <a onClick={() => setOpenNav(false)} href="#contact">Prenota</a>
                    </Button>
                </MobileNav>
            </Navbar>
        </>
    );
}