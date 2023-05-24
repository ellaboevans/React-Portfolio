import React from 'react'
import { Helmet } from 'react-helmet';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Team() {
  return (
    <div className="dark:bg-slate-800 duration-100 h-screen w-full overflow-x-hidden scrollbar-thin scrollbar-thumb-sky-600 dark:scrollbar-track-slate-700 scrollbar-track-gray-200 scrollbar-rounded-md">
      <Helmet>
        <title>codeConcept - Team</title>
        <link rel="canonical" href="/team" />
      </Helmet>
      <NavBar />
      <div className="font-bold text-[60px] dark:text-white text-center mt-32">
        Team page is under construction
      </div>
      <Footer />
    </div>
  );
}

export default Team