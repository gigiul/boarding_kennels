import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Textarea,
    Select,
    Option,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';

export default function Example() {

    const webUrl = "https://web.whatsapp.com/send?phone=+393513274898&text="
    const mobileUrl = "https://api.whatsapp.com/send?phone=+393513274898&text="
    const [name, setName] = useState("");
    const [message, setMessage] = useState("NOME CANE E GENERE M/F ● NOME PROPRIETARIO/RI (che lo porteranno e ritireranno) E NUMERI DI TELEFONO ● RAZZA ● COSA MANGIA E QUANDO ? (istruzioni) ● CURE MEDICHE O ALLERGIE (se sì specificare e istruzioni) E SE HA UN VETERINARIO DI FIDUCIA ALLEGARE NUMERI ● BREVE DESCRIZIONE CANE : 1. è attivo, pigro 2. cosa gli piace fare, con cosa ama giocare 3. ha qualche paura, se sì di cosa 4. ha qualche rituale/routine specifica (es biscottino prima di dormire) 5. altre info utili….");
    const [service, setService] = useState("");

    const contactWhatsapp = (e) => {
        e.preventDefault();
        window.open((isMobile ? mobileUrl : webUrl) + "Servizio richiesto: " + service  + "%0A%0A" + message + "%0A%0A" + name, "_blank")
    }

    useEffect(() => {
        console.log("service", service)
    }, [service])


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
                <Select label="Servizio" required >
                    <Option onClick={() => setService('Asilo')} >
                        ASILO (SOLO GIORNATA)
                    </Option>
                    <Option onClick={() => setService('Pensione')}  >
                        PENSIONE (GIORNATA + NOTTE)
                    </Option>
                </Select>
                    <div className="">
                        <Textarea label="Lascia qua il tuo messaggio" required onChange={(e) => setMessage(e.target.value)} />
                    </div>
                </div>
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