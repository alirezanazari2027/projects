import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fa from "./locale/fa.json";
import en from "./locale/en.json";

i18n.use(initReactI18next).init({
    lng: "en",
    resources: {
        en: {
            translation: en,
        },
        fa: {
            translation: fa,
        },
    },
});

export default i18n;