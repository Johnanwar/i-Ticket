/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, Provider } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HttpHelpers from './iticket-sdk/services/helpers';
import store from './iticket-sdk/redux/storeConfig';
import localStorageProvider from './localStorageProvider';
import Home from './views/home';
import About from './views/about';
import PublicLayout from './layouts/public-latout';
import NsavLayout from './layouts/nav-latout';
// import ScrollToTop from './routes/scroll-to-top';

HttpHelpers.setBaseUrl(process.env.REACT_APP_API_URL);

function App() {
  const { i18n } = useTranslation();
  document.querySelector('html').dir = i18n.dir();

  useEffect(() => {
    localStorageProvider.get('locale').then((lng) => {
      let locale;
      if (!lng) {
        locale = 'en';
      } else {
        locale = lng;
      }

      if (!lng) localStorageProvider.set('locale', locale);
      i18n.changeLanguage(locale);
      document.querySelector('html').dir = i18n.dir();
      document.querySelector('html').lang = locale;

      // document.querySelector('#bootstrap-ltr').disabled = locale === 'ar';
      // document.querySelector('#bootstrap-rtl').disabled = locale === 'en';
    });
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <ScrollToTop> */}
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<NsavLayout />}>
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
        {/* </ScrollToTop> */}
      </BrowserRouter>

    </Provider>
  );
}

export default App;
