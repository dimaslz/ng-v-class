export const code = `// in your code
import { fixClass } from '@dimaslz/ng-v-class';

@Component({
  selector: 'your-component',
  templateUrl: './your-component.html',
  styleUrls: ['./your-component.scss'],
})
export class YourComponent implements OnInit {
	public classValue: string = fixClass([
		'classA classB',
		{'first': true, 'second': false},
		['class1', 'class2'],
		someExpressionTrue ? 'classC' : 'classD',
		[
			someExpressionTrue ? 'classE' : 'classF', 'classG', ['other']
		],
	]);
}`;

export const html = `<!-- in your template -->
<some-element [ngClass]="classValue">...</some-element>`;