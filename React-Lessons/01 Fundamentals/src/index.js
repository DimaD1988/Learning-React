import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from './db';
import { Book } from './book';

function BookList() {
	return (
		<section className="booklist">
			{books.map((book) => {
				const { id } = book;
				return <Book book={book} key={id} />;
			})}
		</section>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
