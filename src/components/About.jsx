import React from 'react';
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';
import AboutCard from './AboutCard';

const About = () => {
  return (
    <div className='absolute w-full bg-black text-white text-center'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 '>
        <div>
          <h1 className='py-4'>A Decentralized Fundraising Platform</h1>
          <p className='py-4 text-xl'>
           A Crowdfunding platform where you cn donate money in the form of Digital tokens or Cryptocurrencies such as Ethereum to projects and Needful people.
          </p>

          {/* Card Container */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>

            {/* Card */}
            <AboutCard icon={<SiHiveBlockchain size={40} />} heading='Engagement through tokenization of philanthropic assets' text='Instead of just helping an organization financially, donors will be able to decide on the projects they would like to be involved in and send their funds directly to the people' />

            <AboutCard icon={<SiFsecure size={40} />} heading='Removing the middlemen from charitable systems' text='Manage their funds more closely and serve as a marketing strategy, removing the need for these middlemen.' />
            <AboutCard icon={<SiStrapi size={40} />} heading='Global contribution' text='Anyone in the world can contribute to the campaign and transactions are quick and easy.' />
            <AboutCard icon={<VscServerProcess size={40} />} heading='Transparency and anti-fraud measures' text='Contributors can follow and monitor where, when, and to whom charity donations were disbursed.' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
