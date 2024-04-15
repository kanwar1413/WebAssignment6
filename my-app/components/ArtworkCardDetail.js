import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import useSWR from "swr";
import { useAtom } from 'jotai';
import { favouritesAtom } from '../store';
import { useEffect } from 'react';
import { addToFavourites, removeFromFavourites } from "@/lib/userData";

export default function ArtworkCardDetail({ objectID }) {
    const [favouritesList, setFavourites] = useAtom(favouritesAtom);
    const [showAdded, setShowAdded] = useState(false);

    useEffect(() => {
        setShowAdded(favouritesList?.includes(objectID));
    }, [favouritesList]);

    async function favouritesClicked(){
        if (showAdded) {
            setFavourites(await removeFromFavourites(objectID));
            setShowAdded(false);
        } else {
            setFavourites(await addToFavourites(objectID));
            setShowAdded(true);
        }
    };

    const { data, error } = useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`);

    if (error) {
        return null;
    }

    return (
        <>
            <Card>
                {data?.primaryImage ? (
                    <Card.Img variant="top" src={data.primaryImageSmall} />
                ) : (<br />)}
                <br />
                <Card.Body>
                    <Card.Text>
                        <strong>Date: </strong>{data?.objectDate || 'N/A'} <br />
                        <strong>Classification: </strong>{data?.classification || 'N/A'}<br />
                        <strong>Medium: </strong>{data?.medium || 'N/A'} <br /> <br />

                        <strong>Artist: </strong>{data?.artistDisplayName || 'N/A'}<br />

                        <strong>CreditLine: </strong>{data?.creditLine || 'N/A'}<br />
                        <strong>Dimensions: </strong>{data?.dimensions || 'N/A'} <br />
                    </Card.Text>
                    <Button variant={showAdded ? "primary" : "outline-primary"} onClick={favouritesClicked}>
                        {showAdded ? "+ Favourite (added)" : "+ Favourite"}
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
}
