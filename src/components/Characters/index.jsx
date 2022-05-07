import { Button, Text } from '@nextui-org/react';
import './styles.css'

// Services
import { getCharacter } from "../../services/api"
import { useEffect } from 'react';

// const getURI = getCharacter(props.URI).then(data=>console.log(data)).catch(err=>console.log(err));

function Characters(props) {
    useEffect(()=>{
        
    },[]);
    return (
        <>
            <div className="card-character" id={props.id} key={props.id}>
                <div className="card-heading">
                    <img src={props.url} alt={props.name} loading="lazy"/>
                </div>
                <div className="card-body">
                    <Text color="dark">{props.name}</Text>
                    <Text color="dark">{props.description}</Text>
                    {/* <Text color="dark">Powers</Text>
                    <ul className="list-powers">
                        <li>
                            <Text color="dark">Powers 1</Text>
                        </li>
                        <li>
                            <Text color="dark">Powers 2</Text>
                        </li>
                        <li>
                            <Text color="dark">Powers 3</Text>
                        </li>
                        <li>
                            <Text color="dark">Powers 4</Text>
                        </li>
                    </ul> */}
                </div>
                <div className="card-footer">
                    <Button onClick={()=>{
                        // window.location.href = props.URI
                        alert(props.URI);
                    }}>Ver detalhes</Button>
                </div>
                
            </div>
        </>
    )

}

export default Characters;