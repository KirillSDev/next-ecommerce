import { Htag, Button, Paragraph } from '../components';

export default function Home(): JSX.Element {
	return (
		<>
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
			<Paragraph size="medium">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, illo
				dolor eos possimus consequatur similique, corrupti earum ea autem
				totam magnam natus, quisquam architecto maiores saepe doloremque
				maxime dicta exercitationem!
			</Paragraph>
		</>
	);
}
