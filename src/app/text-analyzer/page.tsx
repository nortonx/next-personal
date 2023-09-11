'use client'

import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Counter } from "./Counter";
import { Textarea } from "@/components/Textarea";


const TextAnalyzer = () => {
    const [content, setContent] = useState("")

    function handleOnChangeText(content: string) {
        setContent(content)
    }

    function wordCounter(content: string) {
        if (content) {
            const words = content.trim().split(" ")
            return words?.length
        }
        return 0
    }

    function characterCounter(content: string) {
        const characters = content.split("")
        return characters?.length ?? 0
    }

    function sentencesCounter(content: string) {
        const sentences = content.match(/[^\.!\?]+[\.!\?]+/g);
        return sentences?.length ?? 0
    }

    function paragraphsCounter(content: string) {
        if (content) {
            const paragraphs = content.split(/\r?\n/)
            return paragraphs?.length
        }
        return 0
    }

    return(
        <main data-testid="text-analyzer">
            <Container fluid data-testid="analyzer">
                <Row xs={1} md={4}>
                    <Counter 
                        label="Words"
                        counter={wordCounter(content)}
                    />
                    <Counter
                        label="Characters"
                        counter={characterCounter(content)}
                    />
                    <Counter
                        label="Sentences"
                        counter={sentencesCounter(content)}
                    />
                    <Counter
                        label="Paragraphs"
                        counter={paragraphsCounter(content)}
                    />
                </Row>
                <Row>
                    <Textarea 
                      label="Type in your text"
                      id="text-analyzer"
                      onChangeText={handleOnChangeText}
                    />
                </Row>
            </Container>
        </main>
    )
}

export default TextAnalyzer;