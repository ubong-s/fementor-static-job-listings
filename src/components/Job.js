import React from 'react';

const Job = (props) => {
   const {
      company,
      logo,
      new: neww,
      featured,
      position,
      role,
      level,
      postedAt,
      contract,
      location,
      languages,
      tools,
   } = props.job;

   let filteredTags = [role, level, ...languages, ...tools];

   return (
      <article className={`${featured ? 'job-item job-light' : 'job-item'}`}>
         <img src={logo} alt={company} className='c-logo' />
         <div className='job-info'>
            <div className='comp-header'>
               <h4 className='company'>{company}</h4>
               {neww && (
                  <button type='button' className='new-b top-btn filter-btn'>
                     new
                  </button>
               )}
               {featured && (
                  <button type='button' className='feat-b top-btn filter-btn'>
                     Featured
                  </button>
               )}
            </div>
            <p className='position'>{position}</p>
            <div className='job-meta'>
               <ul>
                  <li>{postedAt}</li>
                  <li>{contract}</li>
                  <li>{location}</li>
               </ul>
            </div>
         </div>
         <div className='btn-container'>
            {filteredTags.map((tag, index) => {
               return (
                  <button
                     type='button'
                     className='btn filter-btn'
                     key={index}
                     onClick={() => props.addFilteredTags(tag)}
                  >
                     {tag}
                  </button>
               );
            })}
         </div>
      </article>
   );
};

export default Job;
