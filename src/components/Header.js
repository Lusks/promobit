import Button from './Button'

export default function Header (props) {
    return (
        <section id="header">
            <div id="titleDiv">
                <h1 id="title">{props.title}</h1>
            </div>
            <p id="filterText">FILTRE POR:</p>
            <div id="filters">
                <row className="rowFilters">
                    <Button title="Ação" />
                    <Button title="Aventura" />
                    <Button title="Animação" />
                    <Button title="Comédia" />
                    <Button title="Crime" />
                    <Button title="Documentário" />
                    <Button title="Drama" />
                    <Button title="Família" />
                    <Button title="Fantasia" />
                    <Button title="História" />
                </row>
                <row className="rowFilters">
                    <Button title="Terror" />
                    <Button title="Música" />
                    <Button title="Mistério" />
                    <Button title="Romance" />
                    <Button title="Ficção Científica" />
                    <Button title="Cinema TV" />
                    <Button title="Thriller" />
                    <Button title="Guerra" />
                    <Button title="Faroeste" />
                </row>
            </div>
        </section>
    )
}