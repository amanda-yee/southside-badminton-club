// curl -X GET "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJEZDrEkMDkWsR1Nzkn-88Wmw&fields=name,rating,reviews&key=AIzaSyBVAY4IkVjYuquaoaPR8hELq0iHjniYbJM"

import React, { useEffect, useState } from "react";

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const placeId = 'ChIJEZDrEkMDkWsR1Nzkn-88Wmw'

  useEffect(() => {
    const fetchReviews = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/google-reviews?placeId=${placeId}`);
            
            if (response.ok) {
                const data = await response.json(); // Parse JSON data from the response
                console.log(data); 
                
                if (data.result.reviews) {
                  // Filter to 5 star reviews 
                  const filteredReviews = data.result.reviews.filter(
                    review => review.rating == 5
                  );  
                  setReviews(filteredReviews);
                } else {
                  console.error('No reviews found in response');
                }
              } else {
                console.error('Failed to fetch reviews. Status:', response.status);
              }
        } catch (error) {
            console.error('Error fetching reviews front end:', error);
        }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map((review) => (
            <div key={review.time} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <strong>{review.author_name}</strong>
            <p>{'⭐'.repeat(Math.round(review.rating))}</p>
            <p>{review.text}</p>
            </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default GoogleReviews;

        