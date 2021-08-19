import React, { useState, useEffect } from 'react';
import Job from './Job';

const Jobs = ({ jobItems, filteredTags, addFilteredTags }) => {
   const [filteredData, setFilteredData] = useState([]);

   const editedData = () => {
      if (filteredTags) {
         const newData = jobItems.filter((el) => {
            return filteredTags.every((tag) => {
               console.log(tag);
               return (
                  el.role === tag ||
                  el.level === tag ||
                  el.languages.includes(tag) ||
                  el.tools.includes(tag)
               );
            });
         });
         setFilteredData(newData);
      } else {
         setFilteredData(jobItems);
      }
   };

   useEffect(() => {
      editedData();
   }, [filteredTags]);

   return (
      <div className='jobs-container'>
         {filteredData.map((job) => {
            return (
               <Job key={job.id} job={job} addFilteredTags={addFilteredTags} />
            );
         })}
      </div>
   );
};

export default Jobs;
