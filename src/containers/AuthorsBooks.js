import { useEffect, useState } from "react";
import { fetchAuthor } from "../services/FetchData";
import Table from "../components/Table";
import Select from "../components/Select";

function AuthorsBooks(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [author, setAuthor] = useState(0);



    const handleAuthorChange = event => {
        setAuthor(event.target.value);
    }
    
    
    useEffect(() => {
            fetchAuthor("http://frodo.ess.hr/api/knjige-autor.php", author, setData, setError)
    }, [author]);

    if(error){
        return <div>{error}</div>;
    }

    if(!data){
        return <div>Loading data</div>;
    }

    return (<div className="sadrzaj">
        <h1>Pretraga knjiga po autoru</h1>
        <Select onAuthorChange={handleAuthorChange} />
        {data.length > 0 ? <Table podaci={data} /> : ""}
    </div>);
}

export default AuthorsBooks;