import React from "react";
import useSWR from 'swr';
import Card from 'react-bootstrap/Card'
import { Button, CardBody } from "react-bootstrap";
import Link from "next/link";
const fetcher = (url) => fetch(url).then((res) => res.json()); 

export default function ArtworkCard({objectID}){
    const { data, error } = useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`, fetcher);
    if (error) {
        return <Error statusCode={404} />;
      }
    return (
        <>
            <Card>
                {data?.primaryImageSmall ? (
                <Card.Img variant="top" src={data.primaryImageSmall} />
                ) : (
                <Card.Img variant="top" src="https://via.placeholder.com/375x375.png?text=[+Not+Available+]" />
                )}
                <CardBody>
                    <Card.Title>{data?.title || 'N/A'}</Card.Title>
                    <Card.Text>
                        <strong>Object Date: </strong>{data?.objectDate || 'N/A'} <br/>
                        <strong>Classification: </strong>{data?.classification || 'N/A'}<br/>
                        <strong>Medium: </strong>{data?.medium || 'N/A'}   
                    </Card.Text>
                    <Link href={`/artwork/${objectID}`} passHref>
                        <Button variant="primary">View Artwork (ID: {objectID})</Button>
                    </Link>

                </CardBody>
            </Card>
        </>
    )
}