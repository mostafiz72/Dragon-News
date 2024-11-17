import React from "react";
import { AiOutlineEye } from "react-icons/ai"; // Eye icon for views
import { AiFillStar } from "react-icons/ai"; // Star icon for rating
import { Link } from "react-router-dom";

const NewsCard = ({ item }) => {
  const {
    _id,
    author,
    title,
    details,
    rating,
    total_view,
    image_url,
    thumbnail_url,
  } = item;

  return (
    <div className="card w-full bg-base-100 shadow-xl border border-gray-200 text-left my-3">
      {/* Card Image */}
      <figure>
        <img src={thumbnail_url} alt="News Thumbnail" className="w-full h-80 object-cover" />
      </figure>

      {/* Card Content */}
      <div className="card-body pt-8 p-0">
        {/* Author Section */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={author.img}
            alt="Author"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-md font-semibold">{author.name}</h3>
            <p className="text-sm text-gray-500">{author.published_date}</p>
          </div>
        </div>

        {/* News Title */}
        <h2 className="card-title text-lg font-bold">{title}</h2>

        {/* News Details */}
        <p className="text-sm text-gray-700 line-clamp-3">{details}</p>
        <Link to={`/news/${_id}`} className="text-blue-600 font-medium cursor-pointer text-left">
          Read More
        </Link>

        {/* Card Footer */}
        <div className="card-actions justify-between mt-4 items-center">
          {/* Ratings */}
          <div className="flex items-center gap-1 text-yellow-500">
            <AiFillStar size={20} />
            <span className="font-medium text-sm">{rating.number}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-500">
            <AiOutlineEye size={20} />
            <span className="text-sm">{total_view} Views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
