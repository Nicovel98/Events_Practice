
export const SecondComponent = () => {

    const books = [
        "Harry Potter y la piedra filosofal",
        "Harry Potter y la cámara secreta",
        "Harry Potter y el prisionero de Azkaban",
        "Harry Potter y el cáliz de fuego",
        "Harry Potter y la Orden del Fénix",
        "Harry Potter y el misterio del príncipe",
        "Harry Potter y las Reliquias de la Muerte"
    ];

    return (
        <div>
            <h4>Listado de Libros</h4>
            <ul>
                {books.map((book, index) => <li key={index}>{book}</li>)}
            </ul>
        </div>

    )
}
