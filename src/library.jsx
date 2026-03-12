
export default function Library({ books }) {
    return (
        <div>
            <h2>My National Central Library</h2>
            <p>Address: 123 Main Street, City, Dhaka</p>
            <div>
                <ul>
                    {books.map(book => (
                        <li key={book.id}>
                            <h3>{book.title}</h3>
                            <p>Author: {book.author}</p>
                            <p>Price: ${book.price.toFixed(2)}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}