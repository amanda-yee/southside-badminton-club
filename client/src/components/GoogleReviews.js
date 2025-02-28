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
                // console.log(data); 
                
                if (data.result.reviews) {
                  const filteredReviews = data.result.reviews
                  .filter(review => review.rating === 5) // 5 star reviews
                  .sort((a, b) => b.time - a.time) // sort reviews by newest first
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

    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className="relative w-full max-w-lg">
        {/* Reviews */}
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div
                key={review.time}
                className="w-full flex-shrink-0 p-4 border border-gray-300 rounded-lg shadow-md bg-white"
              >
                <strong>{review.author_name}</strong>
                <p>{'⭐'.repeat(Math.round(review.rating))}</p> <br></br>
                <p className="text-sm">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          onClick={prevSlide}
        >
          &#8592;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          onClick={nextSlide}
        >
          &#8594;
        </button>
      </div>
    );
  };

export default GoogleReviews;

        