import  {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export const useResults = () => {
  const [results, setResults] = useState([]);
   const [errMsg, setErrMsg] = useState('');
 
   const searchApi = async (searchTerm) => {
     try {
       setErrMsg('');
      const res = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm, 
          location: 'new york'
        }
      });
      setResults(res.data.businesses);
     } catch (error) {
       setErrMsg('Something went wrong');
       console.log(error);
     }
   
   }

   useEffect(() => {
    searchApi('pizza');
  }, [])
 
   return [searchApi, results, errMsg]
};