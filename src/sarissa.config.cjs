export default {
  siteTitle: "İsmail Özçelik",
  siteDescription: "Biraz yazınca blog olacak",
  favicon: "/favicon.ico",
  siteImagePath: "/images/avatar.png",
  footer: "© 2020 - 2022 İsmail Özçelik",
  dateFormat: "dd.MM.yyyy",
  socialMedia: {
    facebook: "ozcelikismail",
    twitter: "ismailozcelik",
    linkedin: "ismail-özçelik",
    github: "iozcelik",
  },
  pageSize: 5,
  categorySettings: {
    order: "name", // name | count
    layout: "button", //button | card
    image: "",
    color: "btn-primary",
    countVisibility: true,
  },
  searchOptions: {
    includeScore: true,
    includeMatches: true,
    keys: [
      { name: "title", weight: 3 },
      { name: "description", weight: 2 },
    ],
  },
  menu: {
    home: "Anasayfa",
    about: "Hakkımda",
    categories: "Kategoriler",
    search: "Arama",
    archive: "Arşiv",
  },
  i18n: {
    search: {
      placeholder: "Başlıkta veya içerikte arama yapın...",
    },
    archive: {
      select: "Yıl Seçiniz",
    },
    page: "Sayfa",
    resultFound: " adet kayıt bulundu",
  },
};
