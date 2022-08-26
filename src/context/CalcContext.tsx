import { createContext, useState } from "react";
interface ContextState {
    sign: any;
    num:any;
    res:any;
    
  }
export const CalcContext  = createContext({} as ContextState)

