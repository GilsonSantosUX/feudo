import { Text,Button,Input, Link, Loading} from '@nextui-org/react';
import { useCallback, useEffect,useState } from 'react';

// Styles page
import './styles.css';

// Components UI
import Characters from '../../components/Characters';
import Modal from '../../components/Modal';
import { getCharacters,searchCharacter,getCharacter } from '../../services/api';

function Home(){
    const [characters,setCharacters] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [isModal,setIsModal] = useState(false);
    const [modalData,setModalData] = useState(null);

    useEffect(()=>{
        getCharacters().then(data=>data.data).then(data=>{
            setCharacters(data.results);
        })
        .catch(err=>console.log(err))
        .finally(()=>{
            setIsLoading(false);
        });
    },[]);

    const handleMore = useCallback(async()=>{
        try{
            const offset = characters.length;
            let data = await getCharacters(offset).then(response=>response.data.results).catch(err=>console.log(err));
            setCharacters([...characters,...data]);
        }catch(err){console.log(err)}
    });

    const handleDetail = useCallback(async(ID)=>{
        const data = await getCharacter(ID).then(response=>response.data.results).catch(err=>console.log(err));
        setModalData(...data);
        setIsModal(true);
    });

    const closeModal = useCallback(()=>{
        console.log('Click');
        setIsModal(false);
    });

    const handleSearch = useCallback(async(e)=>{
        try{
            if (e.key === 'Enter') {
                const search = e.target.value;
                let data = await searchCharacter(search).then(response=>response.data.results).catch(err=>console.log(err));
                if(data.length != 0 || data != undefined){
                    setCharacters([...data,...characters]);
                }
            }
        }catch(err){
            console.log(err);
        }
    })
    return (
        <main>
            <section className="heading">
                <Text color="white" h1>MARVEL API</Text>
                <Text color="white" size="1.75em">Essa aplicação consome da API da Marvel, onde pode se encontrar os acesso para a mesma.</Text>
                <Link href="https://developer.marvel.com/" target="_blank" block color="primary">Acesse a documentação da API</Link>
                <Input
                    placeholder="Busque por um herói... Ex: Attuma"
                    labelLeft="Buscar"
                    onKeyDown={(e)=>handleSearch(e)}
                    aria-label="Search hero"
                    size="xl"
                    bordered
                />
            </section>
           
            <section className="list-characters">
                {
                    isLoading ? (<div className="loading"><Loading type="spinner" size="lg"/></div>):
                    characters.map(hero=>
                        <Characters 
                        key={hero.id}
                        id={hero.id}
                        url={hero.thumbnail.path+"."+hero.thumbnail.extension}
                        name={hero.name}
                        description={hero.description}
                        URI={hero.resourceURI}
                        onClick={()=>handleDetail(hero.id)}/>
                    )
                }
            </section>
            <section  className="pagination">
                <Button onClick={handleMore} css={{width:"100%"}} size="xl" color="secondary">Carregar mais</Button>
            </section>
            {
                isModal ? (
            <Modal
                key={modalData?.id}
                id={modalData?.id}
                date={modalData?.modified}
                name={modalData?.name}
                img={modalData?.thumbnail?.path+"."+modalData?.thumbnail?.extension}
                onClick={()=>closeModal()}
                description={modalData?.description}
                series={modalData?.series}
                storys={modalData?.storys}
                comics={modalData?.comics}
                events={modalData?.events}
            />
                ):null
            }
            
        </main>
    );
}

export default Home;