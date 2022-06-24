import React, {useState} from "react";
import mensajesIngles from "../languages/en-US.json";
import mensajesEspaniol from "../languages/es-COL.json";
import {IntlProvider} from "react-intl";

const langContext = React.createContext()


const LangProvider = ({children}) => {

    const [mensajes, establecerMensajes] = useState(mensajesIngles);
    const [locale, establecerLocale] = useState("en-US");

    const establecerLenguaje = (lenguaje) => {
        switch(lenguaje) {
            case "es-COL":
                establecerMensajes(mensajesEspaniol);
                establecerLocale("es-AR");
                break;
            case "en-US":
                establecerMensajes(mensajesIngles);
                establecerLocale("en-US");
                break;
            default:
                establecerMensajes(mensajesIngles);
                establecerLocale("en-US");
        }
    }

  return (

    <div>
        <langContext.Provider value={{establecerLenguaje : establecerLenguaje}}>
            <IntlProvider locale={locale} messages={mensajes}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    </div>

  )
}

export {LangProvider, langContext}