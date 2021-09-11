export const template = `<some-element
	[ngVClass]="[
		'classA classB',
		{'first': true, 'second': false},
		['class1', 'class2'],
		someExpressionTrue ? 'classC' : 'classD',
		[
			someExpressionTrue ? 'classE' : 'classF', 'classG', ['other']
		],
	]"
>...</some-element>
<!-- will do: class="classA classB first class1 class2 classC classE classG other" -->`;

export default template;