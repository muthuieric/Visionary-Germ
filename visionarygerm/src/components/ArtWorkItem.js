import React from 'react';
import { Link } from 'react-router-dom';

const ArtWorkItem = ({ artwork }) => {
  return (
    <div key={artwork.id} className="mt-8 bg-white rounded h-100 w-80 m-2 border-2 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
      <Link to={`/art/${artwork.id}`}>
        {artwork.image_id && (
          <img
            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
            alt={artwork.title}
            className="rounded h-52 w-80 object-cover"
          />
        )}
        <div className="p-4 flex flex-col justify-between">
          <div>
            <p className="font-semibold">Title: {artwork.title}</p>
            <p className="italic">Artist: {artwork.artist_title}</p>
          </div>
          <div>
            <p className="">Origin: {artwork.place_of_origin}</p>
            <p className="">Year: {artwork.date_display}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArtWorkItem;
