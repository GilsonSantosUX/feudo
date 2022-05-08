import { Link,useTheme } from "@nextui-org/react";
import { AiFillHome,AiFillGithub,AiFillFire } from "react-icons/ai";
import './styles.css';

function Navigation(props){
    const { theme } = useTheme();
    return (
        <nav {...props}>
            <Link href='/'><AiFillHome size={24} color={theme.colors.secondary}/></Link>
            <Link href='https://github.com/GilsonSantosUX/feudo' target="_blank"><AiFillGithub size={24} color={theme.colors.secondary}/></Link>
            {/* <Link href='#'><AiFillFire size={24} color={theme.colors.error}/></Link> */}
            {props.children}
        </nav>
    )
}

export default Navigation;