import { useEffect, useState } from "react";
import { fetchAll } from "../services/FetchData";
import Table from "../components/Table";

function AllBooks(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAll("http://frodo.ess.hr/api/sve-knjige.php", setData, setError)
    }, []);

    if(error){
        return <div>{error}</div>
    }

    if(!data){
        return <div>Loading data</div>
    }

    return (<div className="sadrzaj">
        <h1>Sve knjige</h1>
        <Table podaci={data} />        
    </div>);
}

export default AllBooks;