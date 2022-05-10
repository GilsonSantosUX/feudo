import {Text} from "@nextui-org/react";
import {AiOutlineClose} from "react-icons/ai";
import './styles.css';

function Modal(props){
    return (
    <div className="modal-overlay" onClick={props.onClick}>
        <div className="modal">
            <div className="modal-heading">
                <img src={props.img} alt={props.name} />
                <div className="details">
                    <span>
                        <Text h6>#{props.id}</Text>
                        <span className="badge">{props.date}/</span>
                    </span>
                    <Text h3>{props.name}</Text>
                    <Text size={20}>{props.description}</Text>
                </div>
                <span onClick={props.onClick}>
                    <AiOutlineClose size={24} color="white"/>
                </span>
            </div>
            <div className="modal-footer">
                <div className="category">
                    <Text h4>Series ({props.series?.available})</Text>
                    <ol>
                        {
                            props.series?.items.map((serie,index)=>{
                                if(index <= 2){
                                return(
                                <span className="badge" key={index}>{serie.name}</span>
                                )}
                            })
                        }
                    </ol>
                </div>
                <div className="category">
                    <Text h4>Storys ({props.storys?.available})</Text>
                    <ol>
                        {
                            props.storys?.items.map((story,index)=>{
                                if(index <= 2){
                                return(
                                <span className="badge" key={index}>{story.name}</span>
                                )}
                            })
                        }
                    </ol>
                </div>
                <div className="category">
                    <Text h4>Comics ({props.comics?.available})</Text>
                    <ol>
                        {
                            props.comics?.items.map((comic,index)=>{
                                if(index <= 2){
                                return(
                                <span className="badge" key={index}>{comic.name}</span>
                                )}
                            })
                        }
                    </ol>
                    
                </div>
                <div className="category">
                    <Text h4>Events ({props.events?.available})</Text>
                    <ol>
                        {
                            props.events?.items.map((event,index)=>{
                                if(index <= 2){
                                return(
                                <span className="badge" key={index}>{event.name}</span>
                                )}
                            })
                        }
                    </ol>
                    
                </div>
            </div>
        </div>
    </div>
    )
}

export default Modal;