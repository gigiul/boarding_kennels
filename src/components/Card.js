import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
} from "@material-tailwind/react";

import { CheckIcon } from "@heroicons/react/24/outline";

export default function Example({ data }) {

    return (
        <Card color="blue" variant="gradient" className="w-full max-w-[24rem] lg:h-[40rem] p-8 shadow-2x" >
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
            >
                <Typography
                    variant="small"
                    color="white"
                    className="font-semibold uppercase"
                >
                    {data.title}
                </Typography>
                <Typography
                    variant="h1"
                    color="white"
                    className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                >
                    {
                        data?.price?.value === 'personalizzato' ? (
                            <>
                                <Tooltip
                                    content="Il prezzo è personalizzato in base alle esigenze specifiche del cane."
                                    animate={{
                                        mount: { scale: 1, y: 0 },
                                        unmount: { scale: 0, y: 25 },
                                    }}
                                >
                                                                            <div>
                                            <span className="mt-2 text-sm"></span>
                                            <p>Custom</p>
                                        </div>
                                </Tooltip>

                            </>
                        ) :
                            (<><span className="mt-2 text-4xl">€</span><p>{data?.price?.value}</p><span className="self-end mb-1 text-4xl">/gg</span>
                            </>)
                    }
                </Typography>
            </CardHeader>
            <CardBody className="p-0 flex-1">
                <ul className="flex flex-col gap-4">
                    {Object.keys(data?.services).map((keyName, i) => (
                        <li key={keyName} className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon strokeWidth={2} className="h-3 w-3" />
                            </span>
                            <Typography className={`font-normal ${keyName > 5 ? 'underline font-bold' : ''}`}>{data?.services[keyName]}</Typography>
                        </li>
                    ))}
                </ul>

            </CardBody>
            <CardFooter className="mt-12 p-0">
                <Button
                    size="lg"
                    color="white"
                    className="text-blue-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                    ripple={false}
                    fullWidth={true}
                >
                    Prenota
                </Button>
            </CardFooter>
        </Card>
    );
}