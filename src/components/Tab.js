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

    const images1 = [
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

    const images2 = [
        {
            original: 'https://images.unsplash.com/photo-1527778676396-eceba283ddfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhbmklMjBhbGwnYXBlcnRvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            thumbnail: 'https://images.unsplash.com/photo-1527778676396-eceba283ddfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhbmklMjBhbGwnYXBlcnRvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
            original: 'https://media.istockphoto.com/id/1207992654/it/foto/concetto-di-stagione-primaverile-con-cane-che-tiene-il-guinzaglio-in-bocca-invitando-a-fare.jpg?b=1&s=170667a&w=0&k=20&c=BwLMhxp2QwwIx6Z4KNg6fmCg80ZlQf9i2vn5QwZMxyM=',
            thumbnail: 'https://media.istockphoto.com/id/1207992654/it/foto/concetto-di-stagione-primaverile-con-cane-che-tiene-il-guinzaglio-in-bocca-invitando-a-fare.jpg?b=1&s=170667a&w=0&k=20&c=BwLMhxp2QwwIx6Z4KNg6fmCg80ZlQf9i2vn5QwZMxyM=',
        },
        {
            original: 'https://media.istockphoto.com/id/1164917271/it/foto/cane-che-gioca-a-fetch.jpg?b=1&s=170667a&w=0&k=20&c=WBd5l81jlr2vyMAdx08b2eAs1ec_7JmMdtoNYKJ_dPo=',
            thumbnail: 'https://media.istockphoto.com/id/1164917271/it/foto/cane-che-gioca-a-fetch.jpg?b=1&s=170667a&w=0&k=20&c=WBd5l81jlr2vyMAdx08b2eAs1ec_7JmMdtoNYKJ_dPo=',
        },
    ];

    const images3 = [
        {
            original: 'maps.png',
            thumbnail: 'maps.png',
        },
        {
            original: 'streetview.png',
            thumbnail: 'streetview.png',
        },
    ];



    const data = [
        {
            label: "Interni",
            value: "interni",
            icon: HomeIcon,
            desc: `Ogni cane ha la sua cuccia privata e può stare tranquillo e in sicurezza durante la notte.`,
            images: images1,
        },
        {
            label: "Esterni",
            value: "esterni",
            icon: SunIcon,
            desc: `Gli spazi esterni sono sicuri e permettono ai cani di socializzare tra di loro.`,
      images: images2,
        },
        {
            label: "Mappa",
            value: "map",
            icon: MapIcon,
            desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
        images: images3,
    },

    ];

    return (
        <Tabs value="interni">
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
            <TabsBody
            animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}>
                {data.map(({ value, desc, images }) => (
                    <>
                        <TabPanel key={value} value={value} className="text-xl font-semibold">
                            {desc}
                            <div className="lg:w-[50%] lg:m-auto pt-4">
                                {
                                    images ? (<ImageGallery items={images ? images : []} /* autoPlay={true} */ />) : (null)
                                }
                            </div>
                        </TabPanel>
                    </>
                ))}
            </TabsBody>
        </Tabs>
    );
}