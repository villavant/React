import React, {
  useState,
  useEffect
} from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isloading, setIsLoading] = useState(false);
  const [isError,setError] = useState(false);
  const [user,setUser] = useState('default user');

useEffect(() =>{
  fetch(url)
  .then((res)=> res.json())
  .catch((error) => console.log(error));
},[]);

  if(isloading){
    return <h2>Loading....</h2>
  }
  if(isError){
return (<div><h1>Error...</h1></div>)
  }

  return <h2> {user}</h2>;

};

export default MultipleReturns;