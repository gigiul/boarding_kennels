import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import {
    HomeIcon,
    MapIcon,
    SunIcon,
} from "@heroicons/react/24/solid";

import { Gallery } from "react-grid-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';



export default function Example() {

    const images = [
        {
          original: 'https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsZSUyMGRvbWVzdGljb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          thumbnail: 'https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsZSUyMGRvbWVzdGljb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
          original: 'https://images.unsplash.com/photo-1516222338250-863216ce01ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGFuaW1hbGUlMjBkb21lc3RpY298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          thumbnail: 'https://images.unsplash.com/photo-1516222338250-863216ce01ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGFuaW1hbGUlMjBkb21lc3RpY298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          original: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHxhbmltYWxlJTIwZG9tZXN0aWNvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          thumbnail: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHxhbmltYWxlJTIwZG9tZXN0aWNvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        },
      ];

    const data = [
        {
            label: "Interni",
            value: "interni",
            icon: HomeIcon,
            desc: `lorem20 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.`,
        },
        {
            label: "Esterni",
            value: "esterni",
            icon: SunIcon,
            desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Mappa",
            value: "map",
            icon: MapIcon,
            desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
        },
    ];

    return (
        <Tabs value="dashboard">
            <TabsHeader>
                {data.map(({ label, value, icon }) => (
                    <Tab key={value} value={value}>
                        <div className="flex items-center gap-2">
                            {React.createElement(icon, { className: "w-5 h-5" })}
                            {label}
                        </div>
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({ value, desc }) => (
                    <>
                        <TabPanel key={value} value={value}>
                            {desc}
                            <div className="lg:w-[50%] lg:m-auto">
                                <ImageGallery items={images} autoPlay={true} />
                            </div>
                        </TabPanel>
                    </>
                ))}
            </TabsBody>
        </Tabs>
    );
}