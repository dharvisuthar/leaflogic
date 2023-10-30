import React, { useState, useCallback } from "react";

export const NotificationContext = React.createContext({
  message: undefined,
  addMessage: () => { },
  removeMessage: () => { },
});

export const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState(undefined);

  const removeMessage = () => setMessage(undefined);

  const addMessage = (messageObj) => setMessage(messageObj);

  const contextValue = {
    message,
    addMessage: useCallback((messageData) => addMessage(messageData), []),
    removeMessage: useCallback(() => removeMessage(), []),
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
};
