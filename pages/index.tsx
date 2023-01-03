import { useState } from 'react';
import { Htag, Button, Paragraph, Tag, Rating } from '../components';

export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);
	return (
		<>
			<Rating rating={rating} setRating={setRating} />
			<Htag tag="h1">Text</Htag>
			<Button apperance="primary" arrow="down">
				Log In
			</Button>
			<Button apperance="unprimary" arrow="right">
				Register
			</Button>
			<Paragraph size="small">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, illo
				dolor eos possimus consequatur similique, corrupti earum ea autem
				totam magnam natus, quisquam architecto maiores saepe doloremque
				maxime dicta exercitationem!
			</Paragraph>
			<Tag size="small" color="green">
				Hello Guys
			</Tag>
			<Tag size="small" color="red" link="#">
				Photoshop
			</Tag>
			<Tag>Web Design</Tag>
			<Tag color="green">Web Design</Tag>
			<Tag color="gray">Web Design</Tag>
		</>
	);
}
