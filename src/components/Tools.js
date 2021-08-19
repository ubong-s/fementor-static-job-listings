import React from 'react';

const Tools = ({ tool, filterJobs }) => {
   return (
      <button
         type='button'
         className='btn filter-btn'
         data-languages={tool}
         onClick={filterJobs}
      >
         {tool}
      </button>
   );
};

export default Tools;
