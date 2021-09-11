export const template = `<some-element
	[ngClass]="['classA', { 'classB': expression }]"
>...</some-element>
<!-- ERROR Error: NgClass can only toggle CSS classes expressed as strings, got [object Object] -->`;

export default template;