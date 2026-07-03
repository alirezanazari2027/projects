import { useTranslation } from "react-i18next";
export default function App() {
  const { t, i18n } = useTranslation();
  function changeLanguageToPersion() {
    i18n.changeLanguage("fa");
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "fa";
  }
  function changeLanguageToEnglish() {
    i18n.changeLanguage("en");
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
  }
  return (
    <div className="w-full  min-h-screen ">
      <nav className="w-full py-3 max-w-6xl mx-auto px-3 flex justify-between items-center">
        <h1 className="bg-blue-700 dark:bg-green-700 text-white py-3 px-5">
          {t("home.logo")}
        </h1>
        <div className="flex gap-3.5">
          <button
            // onClick={() => setTheme("light")}
            className="py-2 px-4 bg-indigo-700 text-white"
          >
            {t("home.light")}
          </button>
          <button
            // onClick={() => setTheme("dark")}
            className="py-2 px-4 bg-indigo-700 text-white"
          >
            {t("home.dark")}
          </button>
          <button
            // onClick={() => setTheme("system")}
            className="py-2 px-4 bg-indigo-700 text-white"
          >
            {t("home.system")}
          </button>
          <button
            onClick={() => changeLanguageToEnglish()}
            className="py-2 px-4 bg-indigo-700 text-white"
          >
            English
          </button>
          <button
            onClick={() => changeLanguageToPersion()}
            className="py-2 px-4 bg-indigo-700 text-white"
          >
            فارسی
          </button>
        </div>
      </nav>
      <div className="flex justify-center w-full h-screen items-center">
        <div className="w-1/2 p-8 border rounded-md border-indigo-600 dark:border-green-500">
          <h1>{t("home.hero.title")}</h1>
          <p>{t("home.hero.desc")}</p>
        </div>
      </div>
    </div>
  );
}
