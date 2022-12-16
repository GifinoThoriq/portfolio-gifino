import IconSocial from "../components/ui/IconSocial"
import {socialmedia} from '../constant/SocialMedia';

export default function LinkSocialMedia({name, link, style}){

    return(
        <a 
            href={link}
            target={"_blank"}
            rel="noreferrer"
        >
            {
                socialmedia
                    .filter(items => items.name === name)
                    .map(itemMap => {
                        return(
                            <IconSocial key={itemMap.id} image={itemMap.image} style={style}/>
                        )
                    })
            }
            
        </a>
    )
}