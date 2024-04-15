import React from 'react';
import { useAtom } from 'jotai';
import { searchHistoryAtom } from '../store';
import { useRouter } from 'next/router';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import {removeFromHistory} from "../lib/userData"

function History() {
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);
  const router = useRouter();
  if(!searchHistory) return null;

  const historyClicked = (e, index) => {
    router.push(`/artwork?${searchHistory[index]}`);
  };

  async function removeHistoryClicked(event, index) {
    event.stopPropagation(); // stop the event from trigging other events
    setSearchHistory(await removeFromHistory(searchHistory[index]));

}

  let parsedHistory = [];
  searchHistory.forEach((h) => {
    const params = new URLSearchParams(h);
    const entries = params.entries();
    parsedHistory.push(Object.fromEntries(entries));
  });

  return (
    <div>
      <Card className="mb-3">
        {parsedHistory.length === 0 ? (
          <Card.Body>Nothing Here. Try searching for some artwork.</Card.Body>
        ) : (
          <ListGroup>
            {parsedHistory.map((historyItem, index) => (
              <ListGroupItem
                key={index}
                action
                onClick={(e) => historyClicked(e, index)}
              >
                {Object.keys(historyItem).map((key) => (
                  <span key={key}>
                    {key}: <strong>{historyItem[key]}</strong>&nbsp;
                  </span>
                ))}
                <Button
                  className="float-end"
                  variant="danger"
                  size="sm"
                  onClick={(e) => removeHistoryClicked(e, index)}
                >
                  &times;
                </Button>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Card>
    </div>
  );
}

export default History;