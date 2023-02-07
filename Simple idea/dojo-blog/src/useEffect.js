import { useEffect , useState} from "react";

const useFetch = (url) =>
{
    const [data, setdata] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {

        fetch(url)
          .then((res) => {
  
            if (!res.ok) {
              throw Error("could not fetch the data for the resourses");
            }
            return res.json();
  
          })
  
          .then((data) => {
  
            setdata(data);
            setPending(false);
            setError(null);
  
          })
          .catch((error) => {
  
            setPending(false);
            setError(error.message);
  
          });
  
    }, [url] );


    return {data , isPending , error } 
}

export default useFetch