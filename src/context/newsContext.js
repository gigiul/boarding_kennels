import React, { createContext, useContext, useState } from 'react';

// Crea il Context
const MessageContext = createContext();

// Crea il Provider personalizzato
const MessageProvider = ({ children, value }) => {
  return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>;
};

// Hook per accedere al contesto del messaggio
const useMessageContext = () => useContext(MessageContext);

export { MessageProvider, useMessageContext };