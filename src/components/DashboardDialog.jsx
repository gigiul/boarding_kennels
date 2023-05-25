import { Fragment, useEffect, useRef, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

import {
    Card,
    Input,
    Checkbox,
    Typography,
} from "@material-tailwind/react";

export default function DashboardDialog({ sendJsonMessage }) {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    const handleOpen = () => {setOpen(!open); (clearState())};

    function clearState() {
        setTitle("");
        setDescription("");
        setDate("");
    }

    const handleConfirm = () => {
        handleOpen();
        sendJsonMessage({
            type: "ADD",
            payload: {
                title: title,
                description: description,
                date: date,
            },
        });
        clearState();
    };

    return (
        <Fragment>
            <Button onClick={handleOpen} variant="gradient">
                Nuova
            </Button>
            <Dialog open={open} handler={handleOpen} style={{ 'min-width': '90%' }}>
                <DialogHeader>Nuova News</DialogHeader>
                <DialogBody divider>
                    <InputNews
                        title={title}
                        setTitle={setTitle}
                        description={description}
                        setDescription={setDescription}
                        date={date}
                        setDate={setDate}
                        handleCreate={handleConfirm}
                    />
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleConfirm}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </Fragment>
    );
}

function InputNews({
    title,
    setTitle,
    description,
    setDescription,
    date,
    setDate,
    handleCreate,
}) {
    function handleChange(e, field) {
        switch (field) {
            case "title":
                setTitle(e.target.value);
                break;
            case "description":
                setDescription(e.target.value);
                break;
            case "date":
                setDate(e.target.value);
                break;
            default:
                break;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleCreate(title, description, date);
    }

    return (
        <Card color="transparent" shadow={false}>
            <form
                className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                onSubmit={handleSubmit}
            >
                <div className="mb-4 flex flex-col gap-6">
                    <Input
                        size="lg"
                        label="Titolo"
                        required
                        value={title}
                        onChange={(e) => handleChange(e, "title")}
                    />
                    <Input
                        size="lg"
                        label="Descrizione"
                        required
                        value={description}
                        onChange={(e) => handleChange(e, "description")}
                    />
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => handleChange(e, "date")}
                    />
                </div>
            </form>
        </Card>
    );
}

