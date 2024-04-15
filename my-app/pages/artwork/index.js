import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Row, Col, Card, Pagination } from 'react-bootstrap';
import Error from 'next/error';
import { useState, useEffect } from 'react';
import ArtworkCard from '@/components/ArtworkCard';

const PER_PAGE = 12;
const fetcher = (url) => fetch(url).then((res) => res.json()); 

const Artwork = () => {
  const router = useRouter();
  const finalQuery = router.asPath.split('?')[1];

  const { data, error } = useSWR(
    `https://collectionapi.metmuseum.org/public/collection/v1/search?${finalQuery}`,
    fetcher
  );

   
  const [artworkList, setArtworkList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (data?.objectIDs) {
      const results = [];
      for (let i = 0; i < data?.objectIDs?.length; i += PER_PAGE) {
        const chunk = data?.objectIDs.slice(i, i + PER_PAGE);
        results.push(chunk);
      }
      setArtworkList(results);
      setPage(1);
    }
  }, [data]);

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < artworkList.length) {
      setPage(page + 1);
    }
  };

  return (
    <>
     {artworkList.length > 0 && (
        <Row className="gy-4">
          {artworkList[page - 1].map((objectID) => (
            <Col lg={3} key={objectID}>
              <ArtworkCard objectID={objectID} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Artwork;