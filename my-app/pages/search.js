import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Col, Form, Row, Button } from 'react-bootstrap';
import React from 'react';
import { useAtom } from 'jotai';
import { searchHistoryAtom } from '../store';
import { addToHistory } from '@/lib/userData';

export default function AdvancedSearch() {
    const router = useRouter();
    const { control, formState: { errors }, handleSubmit } = useForm();
    const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);

    async function submitForm(data){
        let queryString = "";
        queryString += `${data.searchBy}=true`;
        queryString += data.geoLocation && `&geoLocation=${encodeURIComponent(data.geoLocation)}`;
        queryString += data.medium && `&medium=${encodeURIComponent(data.medium)}`;
        queryString += `&isOnView=${encodeURIComponent(data.isOnView)}`;
        queryString += `&isHighlight=${encodeURIComponent(data.isHighlight)}`;
        queryString += `&q=${encodeURIComponent(data.q)}`;

        setSearchHistory(await addToHistory(queryString)); 
        router.push(`artwork?${queryString}`);
    };

    return (
        <Form onSubmit={handleSubmit(submitForm)}>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Search Query</Form.Label>
                        <Controller
                            name="q"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Form.Control {...field} type="text" placeholder="" className={`${errors.q ? 'is-invalid' : ''}`} />
                            )}
                        />
                        {errors.q && <p className="text-danger">Search query is required.</p>}
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Form.Label>Search By</Form.Label>
                    <Form.Select name="searchBy" className="mb-3">
                        <option value="title">Title</option>
                        <option value="tags">Tags</option>
                        <option value="artistOrCulture">Artist or Culture</option>
                    </Form.Select>
                </Col>
                <Col md={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Geo Location</Form.Label>
                        <Controller
                            name="geoLocation"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Form.Control {...field} type="text" placeholder="" />
                            )}
                        />
                        <Form.Text className="text-muted">
                            Case Sensitive String (ie "Europe", "France", "Paris", "China", "New York", etc.), with multiple values separated by the | operator
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Medium</Form.Label>
                        <Controller
                            name="medium"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Form.Control {...field} type="text" placeholder="" />
                            )}
                        />
                        <Form.Text className="text-muted">
                            Case Sensitive String (ie: "Ceramics", "Furniture", "Paintings", "Sculpture", "Textiles", etc.), with multiple values separated by the | operator
                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Check
                        type="checkbox"
                        label="Highlighted"
                        name="isHighlight"
                    />
                    <Form.Check
                        type="checkbox"
                        label="Currently on View"
                        name="isOnView"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <br />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}
