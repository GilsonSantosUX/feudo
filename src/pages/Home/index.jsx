import { Text,Button,Input} from '@nextui-org/react';
import { useCallback, useEffect,useState } from 'react';

// Styles page
import './styles.css';

// Components UI
import Characters from '../../components/Characters';
import Pagination from '../../components/Pagination';
import { getCharacters,getCharactersParams } from '../../services/api';

function Home(){
    const [characters,setCharacters] = useState([]);

    useEffect(()=>{
        getCharacters().then(data=>data.data).then(data=>{
            setCharacters(data.results);
        }).catch(err=>console.log(err));
    },[]);

    const handleMore = useCallback(async()=>{
        try{
            const offset = characters.length;
            let data = await getCharactersParams(offset).then(response=>response.data.results).catch(err=>console.log(err));
            setCharacters([...characters,...data]);
            console.log(offset);
        }catch(err){console.log(err)}
    })
    return (
        <main>
            
            <section className="heading">
                <Text color="white" h1>Heróis</Text>
                <Text color="white">Heróis da Marvel, é possivel visualizar os personagens da marvel.</Text>
            </section>
           
            <section className="list-characters">
                {characters.map(hero=>
                    <Characters 
                    key={hero.id}
                    id={hero.id}
                    url={hero.thumbnail.path+"."+hero.thumbnail.extension}
                    name={hero.name}
                    description={hero.description}
                    URI={hero.resourceURI}
                    onClick={handleMore}/>
                )}
            </section>

            <section  className="pagination">
                <Button onClick={handleMore} css={{width:"100%"}} siz="lx" color="secondary">Carregar mais</Button>
            </section>
        </main>
    );
}

export default Home;