import Item from './Item';

function List() {
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Golf" ano_lancamento={1964}/>
                <Item marca="Honda"/>
                <Item marca="Honda"/>  
                <Item marca="Mustang"/>  
                <Item marca="Saveiro"/>  
            </ul>
        </>
    )
}


export default List;