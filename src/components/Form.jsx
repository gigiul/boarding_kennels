import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Textarea,
} from "@material-tailwind/react";
import { useState } from "react";
import {isMobile} from 'react-device-detect';


export default function Example() {

    const webUrl = "https://web.whatsapp.com/send?phone=+393513274898&text="
    const mobileUrl = "https://api.whatsapp.com/send?phone=+393513274898&text="
    const [name, setName] = useState("");
    const [message, setMessage] = useState("NOME CANE E GENERE M/F ● NOME PROPRIETARIO/RI (che lo porteranno e ritireranno) E NUMERI DI TELEFONO ● RAZZA ● COSA MANGIA E QUANDO ? (istruzioni) ● CURE MEDICHE O ALLERGIE (se sì specificare e istruzioni) E SE HA UN VETERINARIO DI FIDUCIA ALLEGARE NUMERI ● BREVE DESCRIZIONE CANE : 1. è attivo, pigro 2. cosa gli piace fare, con cosa ama giocare 3. ha qualche paura, se sì di cosa 4. ha qualche rituale/routine specifica (es biscottino prima di dormire) 5. altre info utili….");

    const contactWhatsapp = (e) => {
        e.preventDefault();
        window.open((isMobile ? mobileUrl : webUrl) + message + "%0A" + name, "_blank")
        console.log((isMobile ? mobileUrl : webUrl) + message + name)
    }



    return (
        <Card color="#F8FAFC" variant="gradient" className="max-w-[24rem] p-8 ">
            {/*             <Typography variant="h4" color="black">
                Contattaci
            </Typography> */}
                <img src="/whatsapp.png" className="h-8 w-8" />
            <Typography color="black" className="mt-1 font-semibold">
                Compila i campi per inviare la tua richiesta direttamente su Whatsapp!
            </Typography>
            <form className="mt-8 mb-2" onSubmit={(e) => contactWhatsapp(e)}>
                <div className="mb-4 flex flex-col gap-6">
                    <Input className="bg-white" size="lg" label="Nome e Cognome" required onChange={(e) => setName(e.target.value)} />
                    <div className="">
                        <Textarea label="Lascia qua il tuo messaggio" required onChange={(e) => setMessage(e.target.value)}/>
                    </div>
                </div>
{/*                 <Checkbox
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
                /> */}
                <Button
                    size="lg"
                    color="blue"
                    className="text-white hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                    ripple={false}
                    fullWidth={true}
                    type="submit"
                >
                    Invia
                </Button>
            </form>
        </Card>
    );
}