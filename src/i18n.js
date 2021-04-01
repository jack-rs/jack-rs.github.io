import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  vi: {
    translation: {
      "name": "PHAN TRỌNG ĐẠI",
      "blockInfo" : "Thông tin",
      "date" : "Ngày sinh",
      "address" : "Địa chỉ",
      "phone" : "Điện thoại",
      "contact" : "Liên hệ với tôi",
    },
  },
  en: {
    translation: {
      "name": "PHAN TRONG DAI",
      "blockInfo" : "Information",
      "date" : "Date of birth",
      "address" : "Address",
      "phone" : "Phone",
      "contact" : "Connect with me",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
