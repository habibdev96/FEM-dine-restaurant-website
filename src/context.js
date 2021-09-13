import React, { useState, useContext } from "react";
import { highlightsData, featuresData } from "./data";
import { useForm } from "react-hook-form";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [highlights, setHighlights] = useState(highlightsData);
  const [features, setFeatures] = useState(featuresData);
  const [value, setValue] = useState(0);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <AppContext.Provider
      value={{
        highlights,
        features,
        value,
        setValue,
        handleSubmit,
        register,
        errors,
        onSubmit,
        scrollToTop,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
