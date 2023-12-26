export function ListItem({ concept: { title, image, description } }) {
	return (
		<li className="concept">
			<img src={image} alt={title} />
			<h2>{title}</h2>
			<p>{description}</p>
		</li>
	);
}
