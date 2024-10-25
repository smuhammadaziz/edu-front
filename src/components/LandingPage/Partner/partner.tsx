import React from 'react';
import { NavLink } from 'react-router-dom';
import content from '../../../localization/content';
import useLang from '../../../hooks/useLang';

function OurPartnersLanding() {
  const [selectedLand] = useLang();

  const partners = [
    {
      company_id: '1',
      idname: 'facebook',
      name: 'Facebook',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    },
    {
      company_id: '2',
      idname: 'amazon',
      name: 'Amazon',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    },
    {
      company_id: '3',
      idname: 'apple',
      name: 'Apple',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    },
    {
      company_id: '4',
      idname: 'netflix',
      name: 'Netflix',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    },
    {
      company_id: '5',
      idname: 'google',
      name: 'Google',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    },
  ];

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 mt-2">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            {content[selectedLand as string].partner.part}
          </h2>
          <div className="flex justify-center flex-wrap gap-8 sm:gap-12">
            {partners.map((e) => (
              <div
                className="justify-center max-auto items-center"
                key={e.company_id}
              >
                <NavLink to={`/partners/${e.idname}`}>
                  <img
                    src={e.image}
                    alt={e.name}
                    className="w-24 h-16 object-contain" // Smaller width and height
                  />
                  <h2 className="text-center text-lg text-black mt-2">
                    {e.name}
                  </h2>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurPartnersLanding;
