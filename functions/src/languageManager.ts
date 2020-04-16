import * as cookieParser from 'cookie-parser';
import * as express from 'express';

// tslint:disable-next-line: typedef
export function languageManagerApp() {
  const app = express();
  const supportedLangs = ['en', 'es'];
  const defaultLang = 'en';

  app.use(cookieParser());

  app.get(/\/((?!es|en).)*/, (req, res) => {
    res.header('Content-Type', 'text/plain');
    const userLang = req.acceptsLanguages();
    const requestedLang = userLang ? userLang[0].substr(0, 2) : 'NA';
    const storedLang = req.cookies.lang ? req.cookies.lang : 'NA';
    const isRequestedLangSupported = supportedLangs.includes(requestedLang);
    const isStoredLangSupported = supportedLangs.includes(storedLang);
    const requestedUrl = req.url.length > 1 ? req.url : '/about';
    if (isStoredLangSupported) {
      res.redirect(`/${storedLang}${requestedUrl}`);
      res.end();
      return;
    }
    if (isRequestedLangSupported) {
      res.redirect(`/${requestedLang}${requestedUrl}`);
      res.end();
      return;
    }
    res.redirect(`/${defaultLang}${requestedUrl}`);
    res.end();
    return;
  });

  return app;
}
