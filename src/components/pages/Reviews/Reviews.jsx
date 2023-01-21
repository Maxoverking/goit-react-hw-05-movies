import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {RequestMovie_IdReviews } from '../../Servises/Servises';

const Reviews = () => {
    const {postId} = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const reviewsData = await RequestMovie_IdReviews(postId);
                setReviews(reviewsData);
            } catch (error) {
                console.log("🚀  error", error);
            }
        }
        fetch();
    }, [postId]);
    // console.log("🚀  reviews", reviews);
    return (
    <div>
        {reviews && reviews.results.length > 0 ? (
            <>
            <ul>
                {reviews.results.map(({id, author, content  }) => (
                    <li key={id}>
                        <h3>{author}</h3>
                        <p>{content}</p>
                    </li>
                ))}   
            </ul>
            </>
            ):(<span>We don't have reviews for this movie.</span>)}
    </div>
    )
};
export default Reviews;