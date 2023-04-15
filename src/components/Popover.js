import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
  } from "@material-tailwind/react";
   
  export default function Example({open}) {
    return (
      <Popover>
        <PopoverHandler>
          <Button variant="gradient">Show Popover</Button>
        </PopoverHandler>
        <PopoverContent>
          This is a very beautiful popover, show some love.
        </PopoverContent>
      </Popover>
    );
  }