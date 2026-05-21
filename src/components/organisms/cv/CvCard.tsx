'use client';

import * as React from 'react';

const CvCard = () => {
  return (
    <a href='/contact' className='w-full flex justify-center'>
      <div className='flex justify-center p-3 mt-6 rounded-md bg-blue-700 hover:bg-blue-600 transition-colors duration-200 text-white w-fit'>
        Get in touch to request my latest CV
        {/*<a href='/downloads/cv.pdf' target='_blank' rel='noopener noreferrer'>*/}
        {/*  <Button color='dark'>*/}
        {/*    <FaDownload className='me-2' />*/}
        {/*    {t('cv.download')}*/}
        {/*  </Button>*/}
        {/*</a>*/}
      </div>
    </a>
  );
};

export default CvCard;
