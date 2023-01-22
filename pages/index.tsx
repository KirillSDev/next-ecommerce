import { Layout } from '../layout/Layout';
import { MainPage } from '../layout/Home/Home';

export default function Home(): JSX.Element {
	return (
		<Layout
			title='Sushi shop'
			description='Delicious and inexpensive rolls. Cooking quality is guaranteed.'
		>
			<MainPage />
		</Layout>
	);
}
