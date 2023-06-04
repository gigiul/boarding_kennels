import { useState, Fragment, useEffect } from "react";
import { Alert, Button, Typography } from "@material-tailwind/react";

export default function Example() {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        console.log(open)
    }, [open])

    return (
        <Fragment>
            <Alert className={`${open ? 'block' : 'hidden' } fixed top-20 right-0 z-10 w-64 bg-gray-800/70`} open={open} onClose={() => setOpen(false)}>
                <button className={`${open ? 'block' : 'hidden' }  absolute top-4 right-4`} onClick={() => setOpen(false)}>X</button>
                <Typography className="font-medium">Offerta PENSIONE: </Typography>
                <ul class="mt-2 ml-2 list-disc list-inside">
                    <li><span className="font-semibold">Sconto del 20 % </span>se porti in PENSIONE due cani intestati a te</li>
                    <li><span className="font-bold">Sconto del 30 %</span> se porti in PENSIONE tre cani intestati a te</li>
                </ul>
            </Alert>
        </Fragment>
    );
}