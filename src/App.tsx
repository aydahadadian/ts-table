import { useQuery } from '@tanstack/react-query'
import React,{useEffect,useState} from "react";
import axios from "axios"
import DataTable from './components/TablePaginationActions';



interface Data{
  id:string;
  name:string
}


const App : React.FC =()=> {


  const [list, setList] = useState<Data[]>([])
  

  const { isLoading, error, data } = useQuery(['repoData'], () =>
  axios.get('https://631c39784fa7d3264ca96658.mockapi.io/test')
)

  useEffect(() => {
   setList(data?.data)
  }, [isLoading])
  
  console.log(list)
   
  return (
   <>
   <DataTable data={list} />
   </>
  );
}


export default App

