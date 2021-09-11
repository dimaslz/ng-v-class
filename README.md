# v-class

Angular directive to have a flexible "ngClass" as Vue style but in Angular.

## Why?

Under my experience, as I have worked with Vue with dynamic classes has a better flexibility to work with directly in the template.

For example, in Angular, you can use Object, String or Array but just easy way...

```html
<!-- example of ngClass in Angular -->
<some-element [ngClass]="'first second'">...</some-element>

<some-element [ngClass]="['first', 'second']">...</some-element>

<some-element [ngClass]="{'first': true, 'second': true, 'third': false}"
  >...</some-element
>

<some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>

<some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
```

... for example, you can not combine different types in one expression

```html
<some-element [ngClass]="[activeClass ? 'class1' : 'class2', {'class5': true}]"
  >...</some-element
>

<!-- ERROR Error: NgClass can only toggle CSS classes expressed as strings, got [object Object] -->
```

...however in vue, you can do the same and also, combine both...

```html
<!-- example of :class in Vue -->
<some-element
  :class="[
    'first second',
    {'first': true, 'second': false},
    ['class1', 'class2', 'class3'],
    someValue ? 'classA' : 'classB',
    [
      someValue ? 'classA' : 'classB', 'class2', 'class3', ['other']
    ],
  ]"
  >...</some-element
>
```

... so, infinit combinations that sometimes could help us.

Then, with this package you can use the same syntax as in Vue with `:class`, now in Angular with `[vClass]`.

```html
<!-- example of vClass (this package) in Angular -->
<some-element
  [vClass]="[
    'first second',
    {'first': true, 'second': false},
    ['class1', 'class2', 'class3'],
    someValue ? 'classA' : 'classB',
    [
      someValue ? 'classA' : 'classB', 'class2', 'class3', ['other']
    ],
  ]"
  >...</some-element
>
```

## TODO (soon...)

- [ ] Add more examples
- [ ] Add tests
- [ ] Publish NPM package

## Feedback

Please, feel free to give feedback or just ping me (by twitter or linkedin) if you think if also it is a good idea and helpful for you. Stars this repo also helps to get motivation :).

## Author

```js
{
	name: "Dimas López",
	role: "FullStack Software development",
	alias: "dimaslz",
	twitter: "https://twitter.com/dimaslz",
	site: "https://dimaslz.dev",
	linkedin: "https://www.linkedin.com/in/dimaslopezzurita"
}
```
