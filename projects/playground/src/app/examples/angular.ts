export const template = `<some-element [ngClass]="'first second'">...</some-element>
<!-- will do: class="first second" -->

<some-element [ngClass]="['first', 'second']">...</some-element>
<!-- will do: class="first second" -->

<some-element
	[ngClass]="{'first': true, 'second': true, 'third': false}"
>...</some-element>
<!-- will do: class="first second" -->

<some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
<!-- will do: class="class1 class2 class3" -->`;

export default template;