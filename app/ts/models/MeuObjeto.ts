import {Comparavel, Imprimivel  } from "./index";

export interface MeuObjeto<T> extends Imprimivel, Comparavel<T> {

}