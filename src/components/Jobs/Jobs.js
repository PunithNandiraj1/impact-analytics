import React , {useEffect, useState} from 'react';
import Job from '../Job/Job';
import './Jobs.css';




const Jobs = ({ jobs }) => {
  const [search,setSearch] = useState('')
  const [filteredJobs,setFilteredJobs] = useState([]);


  

  useEffect(() => {
    setFilteredJobs(jobs.filter(job => {
      return  job.name.toLowerCase().includes(search.toLowerCase())
     }))
  }, [search,jobs])
  
  return (
    <div>
      <div className="title">
        <h2> Job Portal </h2>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" onChange={e => setSearch(e.target.value)}/>

      </div>
      <div className="job-display">
        {filteredJobs.map((job) => {
          return <Job key={job.id} {...job} />;
        })}
      </div>
    </div>
  );
};

export default Jobs;
