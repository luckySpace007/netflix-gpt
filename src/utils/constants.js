export const LOGO = "https://img.hotimg.com/BrandAssets_Logos_01-Wordmark-removebg-preview.png"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer' + process.env.REACT_APP_TMDB_KEY,
    }
};

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_medium.jpg"

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";

export const SUPPORTED_LANGUAGES = [
    {identifier: "en", name: "English"},
    {identifier: "hindi", name: "HINDI"},
    {identifier: "spanish", name: "Spanish"}
  ];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
