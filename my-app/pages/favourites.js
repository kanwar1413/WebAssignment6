import React from 'react';
import { useAtom } from 'jotai';
import { favouritesAtom } from '../store';
import ArtworkCard from '@/components/ArtworkCard';
import { useState , useEffect} from 'react';

const Favourites = () => {
  const [favourites, setFavorites] = useAtom(favouritesAtom);
  let [artWorkList, setArtWorkList] = useState([]);
    
  useEffect(() => {
      setArtWorkList(favourites);
  }, []);
    
    if(!favourites) return null;

  return (
    <>
    <div>
      <h1>Favourites</h1>
      {favourites?.length<0 ? (
        <p>Nothing Here. Try adding some new artwork to the list.</p>
      ) : (
        <div className="gy-4">
          {favourites.map((objectID) => (
            <ArtworkCard key={objectID} objectID={objectID} />
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Favourites;
