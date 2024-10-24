import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import bgimg from '../../../images/logo/partners.svg';
import { NavLink } from 'react-router-dom';
import { TiArrowRightThick } from 'react-icons/ti';
import { FaPhoneVolume } from 'react-icons/fa6';

import content from '../../../localization/content';
import useLang from '../../../hooks/useLang';

function AllPartnersLandingPage() {
  const [selectedLand] = useLang();

  // FAANG companies with image URLs
  const partners = [
    {
      company_id: '1',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
      name: 'Facebook',
      idname: 'facebook',
    },
    {
      company_id: '2',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      name: 'Amazon',
      idname: 'amazon',
    },
    {
      company_id: '3',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      name: 'Apple',
      idname: 'apple',
    },
    {
      company_id: '4',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      name: 'Netflix',
      idname: 'netflix',
    },
    {
      company_id: '5',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      name: 'Google',
      idname: 'google',
    },
  ];

  return (
    <div>
      <header>
        <Header />
      </header>

      <main className="flex flex-col md:flex-row items-center py-10 md:py-0 w-full container bg-slate-100 justify-center mx-auto">
        <div className="z-10 px-4 md:px-0 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3/4 md:pr-8">
            <h1>{content[selectedLand as string].company.join}</h1>
            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
              {content[selectedLand as string].company.text}
            </p>
            <a
              href="https://t.me/behruzz_14"
              target="_blank"
              className="flex flex-row inline-block justify-center w-60 items-center bg-fuchsia-800 hover:scale-105 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-lg font-semibold shadow-md hover:bg-fuchsia-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-opacity-75"
            >
              <span className="me-2">
                <FaPhoneVolume />
              </span>
              {content[selectedLand as string].company.contact}
            </a>
          </div>
          <div className="md:w-2/3 mt-8 md:mt-0">
            <img src={bgimg} alt="Partners" className="w-full h-auto" />
          </div>
        </div>
      </main>

      <div className="bg-white py-10 px-7 ">
        <div className="text-black text-center text-lg md:text-2xl uppercase">
          {content[selectedLand as string].company.partner}
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.length > 0 ? (
              partners.map((partner) => (
                <div
                  className="flex flex-col md:flex-row mt-10 items-center bg-slate-100 p-4 md:p-10 rounded-xl hover:scale-105 transition-transform easy-2 "
                  key={partner.company_id}
                >
                  <div className="flex flex-col md:flex-row items-center">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-20 h-20 md:w-32 md:h-32 object-contain"
                    />
                    <div className="mt-4 md:mt-0 md:ms-10 ">
                      <h2 className="text-center text-black text-xl md:text-3xl font-medium">
                        {partner.name}
                      </h2>
                      <NavLink
                        to={`/partners/${partner.idname}`}
                        className="flex flex-row items-center mt-3 inline-block bg-slate-100 text-black hover:opacity-50"
                      >
                        {content[selectedLand as string].company.more}
                        <span className="ms-2">
                          <TiArrowRightThick />
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400">
                Don't have any companies
              </p>
            )}
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AllPartnersLandingPage;
