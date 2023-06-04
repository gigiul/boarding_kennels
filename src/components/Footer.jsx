import { Typography } from "@material-tailwind/react";
import { navbar } from "../constants";

export default function SimpleFooter() {
  return (
    <footer className="mt-4 flex md:w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <div className="md:text-start text-center ml-4">
        <Typography color="blue-gray" className="font-normal lg:ml-8">
          &copy; 2023 La casetta nel verde
        </Typography>
        <div>
        <Typography color="blue-gray" className="font-normal lg:ml-8">
        <img src="/phoneIcon.png" className="w-6 h-6 inline-block" />
           +39 3513274898
        </Typography>
        <Typography color="blue-gray" className="font-normal lg:ml-8 italic">
          <a href="https://www.instagram.com/lacasettanelverde2023/" target="_blank">
            <img src="/instragram.png" className="w-6 h-6 inline-block" />
             @lacasettanelverde2023
          </a>
        </Typography>
        <Typography color="blue-gray" className="font-normal lg:ml-8 italic">
          <a href="mailto:lacasettanelverde2023@gmail.com">lacasettanelverde2023@gmail.com</a>
        </Typography>
        </div>
      </div>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 justify-center mx-8 lg:mr-8">
        {
          navbar.map((item, i) => (
            <li key={i}>
              <Typography
                as="a"
                href={`#${item.id}`}
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                {item.title}
              </Typography>
            </li>
          ))
        }
      </ul>
    </footer>
  );
}