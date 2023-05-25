import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export default function RulesDialog({data}) {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <Fragment>
      <Button onClick={handleOpen} variant="gradient" className="px-2">
        Leggi di più
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }} style={{ "min-width": "80%"}}
      >
        <DialogHeader>{data.title}</DialogHeader>
        <DialogBody divider>
          {data.longDescription}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Chiudi</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}