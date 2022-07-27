import { forms } from '../data';
import { Form } from './Form';

export function Forms() {
	const formsDivs = forms.map((form) => <Form form={form} />);

	return (
		<div className='forms' id=''>
			{formsDivs}
		</div>
	);
}
