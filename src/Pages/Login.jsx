import React, { useState } from 'react';
import { useUserContext } from '../context/userContext';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";

const Login = () => {

    const { signIn } = useUserContext();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


    const handleLogin = (e) => {
        e.preventDefault();
        signIn(email, password);
    }

  return (
    <div className='border-2 p-4 rounded-md mt-4'>
      <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Log In
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Esegui il login per accedere alla dashboad.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input  type="email" size="lg" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='email' />
          <Input type="password" size="lg" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='current-password' />
        </div>
        <Button className="mt-6" fullWidth onClick={handleLogin}>
          Accedi
        </Button>
      </form>
    </Card>
    </div>
  );
};

export default Login;