import { Fragment, useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { services } from '../constants'
import { clear } from "@testing-library/user-event/dist/clear";

 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
 
export default function Accordation() {
  const [open, setOpen] = useState(null);
 

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
        {
            services.map((service, i) => (
                <Accordion open={open === i} icon={<Icon id={i} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(i)} className='text-black'>
                        {service.title}
                    </AccordionHeader>
                    <AccordionBody className='text-xl text-start' >
                        {service.description}
                    </AccordionBody>
                </Accordion>
            ))
        }
    </Fragment>
  );
}