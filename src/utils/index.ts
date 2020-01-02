/// <reference types ="../types">
import * as STRINGS from "../constants/localization.json";
const localeStrings = STRINGS;

export class Utils {
  public static getCurrentLanguage(): string {
    return document.querySelector("html")?.getAttribute("lang") as string;
  }

  public static setLanguage(lang: string): void {
    document.querySelector("html")?.setAttribute("lang", lang);
  }

  public static getLocaleString(localeString: string): string {
    const currentLanguage = Utils.getCurrentLanguage();
    return eval(`localeStrings.default.${currentLanguage}.${localeString}`);
  }
}
