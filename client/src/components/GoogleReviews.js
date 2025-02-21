import React, { useEffect, useState } from "react";


const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const placeId = 'ChIJEZDrEkMDkWsR1Nzkn-88Wmw'

  useEffect(() => {
    const fetchReviews = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/google-reviews?placeId=${placeId}`);
            
            if (response.ok) { // Check if response is OK (status code 200)
                const data = await response.json(); // Parse JSON data from the response
                console.log(data); // Log the full data to ensure it contains 'result.reviews'
                
                if (data.result && data.result.reviews) {
                  setReviews(data.result.reviews); // Assuming response has 'result.reviews'
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
      <h2>Google Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <strong>{review.author_name}</strong> - ⭐ {review.rating}
              <p>{review.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default GoogleReviews;

// curl -X GET "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJEZDrEkMDkWsR1Nzkn-88Wmw&fields=name,rating,reviews&key=AIzaSyBVAY4IkVjYuquaoaPR8hELq0iHjniYbJM"
