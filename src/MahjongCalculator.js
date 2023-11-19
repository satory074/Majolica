import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function MahjongCalculator() {
    const [score, setScore] = useState("");
    const [result, setResult] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // ここに計算ロジックを追加
        setResult(`Calculated score: ${score}`);
    };

    return (
        <Container className="p-3">
            <h1>Mahjong Score Calculator</h1>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Enter Score</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter score"
                                value={score}
                                onChange={(e) => setScore(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Calculate
                </Button>
            </Form>
            <div className="mt-3">
                <strong>Result:</strong> {result}
            </div>
        </Container>
    );
}

export default MahjongCalculator;
