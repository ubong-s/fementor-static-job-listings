import React from 'react';

const FilterContainer = ({ filteredTags, clearFilters, deleteTag }) => {
   return (
      <>
         <div
            className={
               filteredTags.length > 0
                  ? 'filter-container show'
                  : 'filter-container'
            }
         >
            <div className='filter-inner'>
               {filteredTags.map((tag, index) => {
                  return (
                     <button
                        className='filter-select'
                        key={index}
                        onClick={() => deleteTag(tag)}
                     >
                        {tag}
                        <img
                           src='./images/icon-remove.svg'
                           alt=''
                           className='delete-filter'
                        />
                     </button>
                  );
               })}
            </div>
            <span className='clear-btn' onClick={() => clearFilters()}>
               Clear
            </span>
         </div>
      </>
   );
};

export default FilterContainer;
