function Select(props){
    return (<div className="razmak">
        <label htmlFor="listaautora">Autor knjige:</label>
        <select id="listaautora" onChange={props.onAuthorChange}>
            <option value="0">Odaberite autora</option>
            <option value="1">Ivana Brlić-Mažuranić</option>
            <option value="2">August Šenoa</option>
            <option value="3">Miroslav Krleža</option>
            <option value="4">Miro Gavran</option>
            <option value="5">Mato Lovrak</option>
            <option value="6">Vladimir Nazor</option>
        </select>
    </div>);
}

export default Select;