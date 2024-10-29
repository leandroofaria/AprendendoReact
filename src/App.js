import React from "react";
import { Container, Head, Title, BemVindo } from "./styles";


export default function App() {
    return (
        <Container>
            <Head>
                <Title>Projeto Styled</Title>
            </Head>

            <BemVindo cor="#0FGH57" tamanho={40}>
                Bem vindo ao sistema
            </BemVindo>

        </Container>
    )
}

