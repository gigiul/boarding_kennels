import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";
  import { RulesDialog } from "./";
   
  export default function RulesCard({data}) {
    return (
      <Card className="mt-6 md:w-96 border-2 shadow-md max-w-88">
        <CardBody className="h-40">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {data.title}
          </Typography>
          <Typography>
            {data.description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <RulesDialog data={data} />
        </CardFooter>
      </Card>
    );
  }