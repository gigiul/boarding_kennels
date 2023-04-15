import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Textarea,
} from "@material-tailwind/react";

export default function Example() {
    return (
        <Card color="#F8FAFC" variant="gradient" className="max-w-[24rem] p-8 shadow-2xl">
            <Typography variant="h4" color="black">
                Contattaci
            </Typography>
            <Typography color="black" className="mt-1 font-normal">
                Compila i campi, verrai ricontattato al più presto.
            </Typography>
            <form className="mt-8 mb-2">
                <div className="mb-4 flex flex-col gap-6">
                    <Input className="bg-white" size="lg" label="Nome e Cognome" required />
                    <Input className="bg-white" size="lg" label="Email" />
                    <Input className="bg-white" size="lg" label="Cellulare" required />
                    <div className="">
                        <Textarea label="Lascia qua il tuo messaggio" />
                    </div>
                </div>
                <Checkbox
                    label={
                        (
                            <Typography
                                variant="small"
                                color="black"
                                className="flex items-center text-sm"
                            >
                                Ho letto la &nbsp;
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-blue-500 underline"
                                >
                                   Privacy Policy
                                </a>
                            </Typography>
                        )
                    }
                    containerProps={{ className: "-ml-2.5" }}
                />
                <Button
                    size="lg"
                    color="blue"
                    className="text-white hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                    ripple={false}
                    fullWidth={true}
                >
                    Invia
                </Button>
            </form>
        </Card>
    );
}