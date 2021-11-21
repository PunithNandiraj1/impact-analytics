import React,{useState , useEffect} from 'react'
import './App.css';
import Jobs from './components/Jobs/Jobs';
import Loading from './components/Loading/Loading';


const url = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json'

function App() {
  
  const [loading,setLoading]= useState(true);
  const [jobs,setJobs] = useState([]);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const jobs = await response.json();
      setLoading(false);
      setJobs(jobs)
      
    } catch (error) {
      setLoading(false)
      console.log(error);
      
    }
    
    
  };
  useEffect(()=> {
    fetchJobs();
  },[]);
  
  if(loading){
    return(
      <div>
        <Loading/>
      </div>
    );
  }
  return (
    <div className="App">
      <Jobs jobs={jobs}/>
     
    </div>
  );
}

export default App;
