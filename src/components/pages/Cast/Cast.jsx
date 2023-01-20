import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CastLi, CastUl } from './Cast.styled'
import defaultImg from '../../image/def.jpeg'
import { RequestMovie_IdCredits } from '../../Servises/Servises';

const Cast = () => {
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
    const postId = useParams();
    const [casts, setCast] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const castData = await RequestMovie_IdCredits(postId.id);
                setCast(castData);
            } catch (error) {
                console.log("🚀  error", error);
            }
        }
        fetch();
    }, [postId.id]);
    // console.log("🚀  cast", casts);
    return (
    <div>
        {casts && (
            <>
            <CastUl>
                {casts.cast.map(({id, profile_path, name, character }) => (
                    <CastLi key={id}>
                        <div>
                            <img src={profile_path ? `${imgBaseUrl}${profile_path}` : defaultImg}
                                alt={name} width={80} />
                        </div>    
                            <p>{name}</p>
                            <span>Character : {character }</span>
                    </CastLi>
                ))}   
            </CastUl>
            </>
            )}
    </div>
    )
};
export default Cast