import React from 'react';

const Languages = ({ lang, filterJobs }) => {
   return (
      <button
         type='button'
         className='btn filter-btn'
         data-languages={lang}
         onClick={filterJobs}
      >
         {lang}
      </button>
   );
};

export default Languages;
