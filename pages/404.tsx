import Link from 'next/link';
import { FC } from 'react';

const NotFoundPage: FC = (): JSX.Element => {
	return (
		<div className='not-found-page'>
			<div>
				<h1>404</h1>
				<h3>Page not found</h3>
				<Link href='/'>Go to Home</Link>
			</div>
		</div>
	);
};
export default NotFoundPage;
