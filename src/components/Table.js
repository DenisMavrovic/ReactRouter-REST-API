function Table(props){
    var zbroj = 0;

    return (<div>
        <table border="1">
            <thead>
                <tr><th>Naslov knjige</th><th>Godina izdanja</th><th>Cijena</th></tr>
            </thead>
            <tbody>
                {props.podaci.map(({knjigaId, naslovKnjige, godinaIzdanja, cijena}) => {
                    zbroj = zbroj + parseFloat(cijena);
                    return <tr key={knjigaId}><td>{naslovKnjige}</td><td>{godinaIzdanja}</td><td className="posljednjistupac">{cijena}</td></tr>
                })}
            </tbody>
            <tfoot>
                <tr className="posljednjired"><td colSpan="2">Ukupno:</td><td>{zbroj.toFixed(2)}</td></tr>
            </tfoot>
        </table>
    </div>)
}

export default Table;