import { Button, Text } from '@nextui-org/react';
import './styles.css'
import {AiOutlineEye} from 'react-icons/ai';

// Services
import { getCharacter } from "../../services/api"
import { useEffect } from 'react';

// const getURI = getCharacter(props.URI).then(data=>console.log(data)).catch(err=>console.log(err));

function Characters(props) {
    return (
        <>
            <div 
                className="card-character"
                id={props.id}
                key={props.id}
                onClick={props.onClick}
            >
                <div className="card-body">
                    <Text color="dark" h6>#{props.id}</Text>
                    <span className="title">
                        <Text color="dark" h3>{props.name}</Text>
                        <AiOutlineEye size={24} color='white'/>
                    </span>
                    
                    {/* <Text color="dark">{props.description}</Text> */}
                </div>
                <img src={props.url} alt={props.name} loading="lazy"/>
            </div>
        </>
    )

}

export default Characters;