// curl -X GET "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJEZDrEkMDkWsR1Nzkn-88Wmw&fields=name,rating,reviews&key=AIzaSyBVAY4IkVjYuquaoaPR8hELq0iHjniYbJM"

import React, { useEffect, useState } from "react";
import { StarIcon } from "./Icons";

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true); // track data loading state
  const placeId = 'ChIJEZDrEkMDkWsR1Nzkn-88Wmw'
  const serverUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:5000' 
    : 'https://southside-badminton-club.onrender.com';

  useEffect(() => {
    const fetchReviews = async () => {
        try {
            const response = await fetch(`${serverUrl}/api/google-reviews?placeId=${placeId}`);
            
            if (response.ok) {
                const data = await response.json(); // Parse JSON data from the response
                // console.log(data); 
                
                if (data.result.reviews) {
                  const filteredReviews = data.result.reviews
                  .filter(review => review.rating === 5) // 5 star reviews
                  // .sort((a, b) => b.time - a.time) // sort reviews by newest first
                  setReviews(filteredReviews);
                } else {
                  console.error('No reviews found in response');
                }
              } else {
                console.error('Failed to fetch reviews. Status:', response.status);
              }
        } catch (error) {
            console.error('Error fetching reviews front end:', error);
        } finally {
          setLoading(false); // set 'loading' to false after data has been fetched
        }
    };

    fetchReviews();
  }, [serverUrl]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  if (loading) {
    return <div className="text-center text-gray-500">Loading reviews...</div>;
  }

  if (reviews.length === 0) {
    return <div className="text-center text-gray-500">No reviews found.</div>;
  }
  
  return (
    <div className="relative w-full max-w-xs ds-custom:max-w-lg ft-custom:max-w-xl mx-auto"
      >
      {/* Reviews */}
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div
              key={review.time}
              className="w-full flex-shrink-0 text-center text-xs ds-custom:text-sm items-center gap-4 p-4
              border border-gray-300 rounded-lg shadow-md flex flex-col"
            >
              {/* Stars */}
              <div className="flex">
                {Array.from({ length: Math.round(review.rating) }, (_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>

              <div>{review.text}</div> 

              <div className="review flex items-center gap-2">
                 <img
                  src={review.profile_photo_url} // Dynamic URL from review object
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <strong>{review.author_name}</strong>
                </div>
              </div> 
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white w-8 h-8 rounded-full hover:bg-opacity-75"
        onClick={prevSlide}
      >
        &#8592;
      </button>
      <button
        className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white w-8 h-8 rounded-full hover:bg-opacity-75"
        onClick={nextSlide}
      >
        &#8594;
      </button>
    </div>
  );
};

export default GoogleReviews;

        