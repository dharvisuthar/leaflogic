import { useContext } from "react";
import { AllContext } from "../contexts";

export const useAllApi = () => useContext(AllContext);
