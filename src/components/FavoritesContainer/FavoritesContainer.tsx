import React from "react";
import Skeleton from "react-loading-skeleton";
import Thumbnail from "../Thumbnail/Thumbnail";

interface FavoritesContainerProps {
  favorites: any[];
  loading: boolean;
  error: string | null;
}

const FavoritesContainer: React.FC<FavoritesContainerProps> = ({
  favorites,
  loading,
  error,
}) => {
  if (loading) {
    return (
      <div className="flex gap-4 flex-wrap">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="shrink-0 w-[150px] h-[200px]">
            <Skeleton borderRadius={"12px"} className="h-full" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (favorites.length === 0) {
    return <p>No favorite movies added yet.</p>;
  }

  return (
    <div className="flex gap-4 flex-wrap">
      {favorites.map((favorite, index) => (
        <Thumbnail
          key={index}
          image={favorite.image}
          link={`/moviedetails/${favorite._id}`}
        />
      ))}
    </div>
  );
};

export default FavoritesContainer;
