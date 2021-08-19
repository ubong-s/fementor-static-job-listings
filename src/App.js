import React, { useState } from 'react';
import TopSection from './components/TopSection';
import jobs from './data/data';
import Jobs from './components/Jobs';
import FilterContainer from './components/FilterContainer';

function App() {
   const [filteredTags, setFilteredTags] = useState([]);

   const addFilteredTags = (data) => {
      if (!filteredTags.includes(data)) {
         setFilteredTags([...filteredTags, data]);
      }
   };

   const deleteTag = (data) => {
      const newTags = filteredTags.filter((tag) => tag !== data);
      setFilteredTags(newTags);
   };

   const clearFilters = () => {
      setFilteredTags([]);
   };

   return (
      <>
         <TopSection />
         <div className='container'>
            <FilterContainer
               filteredTags={filteredTags}
               deleteTag={deleteTag}
               clearFilters={clearFilters}
            />
            <Jobs
               jobItems={jobs}
               filteredTags={filteredTags}
               addFilteredTags={addFilteredTags}
            />
         </div>
      </>
   );
}

export default App;

//  const [jobs, setJobs] = useState(jobItems);
//    const [filterList, setFilterList] = useState([]);
//    const [sorted, setSorted] = useState([]);

//    // Grouping all Tools
//    let tools = [];
//    for (let i = 0; i < jobItems.length; i++) {
//       tools.push(...jobItems[i].tools);
//    }
//    tools = [...new Set(tools)];

//    // Grouping all languagess
//    let langs = [];
//    for (let i = 0; i < jobItems.length; i++) {
//       langs.push(...jobItems[i].languages);
//    }
//    langs = [...new Set(langs)];

//    const filterJobs = (e) => {
//       let value = e.target.textContent;
//       setFilterList([...new Set([...filterList, value])]);

//       if (value === 'new') {
//          const filterNew = jobItems.filter((el) => el.new === true);
//          setJobs([...sorted, ...filterNew]);
//       }

//       if (value === 'Featured') {
//          const filterFeatured = jobItems.filter((el) => el.featured === true);
//          setJobs([...sorted, ...filterFeatured]);
//       }

//       if (tools.find((e) => e === value) === value) {
//          const filterTools = jobItems.filter(
//             (el) => el.tools.find((e) => e === value) === value
//          );
//          setJobs([...sorted, ...filterTools]);
//       }

//       if (langs.find((e) => e === value) === value) {
//          const filterLangs = jobItems.filter(
//             (el) => el.languages.find((e) => e === value) === value
//          );
//          setJobs([...sorted, ...filterLangs]);
//       }

//       if (value='Junior' || ) {
//          const filterLangs = jobItems.filter(
//             (el) => el.languages.find((e) => e === value) === value
//          );
//          setJobs([...sorted, ...filterLangs]);
//       }
//    };
//    console.log(jobs);

//    const clearFilters = () => {
//       setFilterList([]);
//       setJobs(jobItems);
//    };

//    const removeFilter = (e) => {
//       let value = e.target.textContent;
//       let value2 = e.target.dataset.value;
//       setFilterList(filterList.filter((el) => el !== value2));
//    };

// useEffect(() => {
//    setJobs(jobItems);
// }, []);
