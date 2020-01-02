import React, { useState, useEffect } from "react";
import { Utils } from "../utils";

interface LSProps {
  setLang: React.Dispatch<React.SetStateAction<string>>;
}

export const LanguageSelector: React.FC<LSProps> = ({ setLang }) => {
  return (
    <div>
      <select name="langs" id="langs" onChange={e => setLang(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Espanol</option>
      </select>
    </div>
  );
};
