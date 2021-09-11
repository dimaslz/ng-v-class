import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'code-presentation',
  templateUrl: './code-presentation.html'
})
export class CodePresentationComponent implements OnInit {
	@Input() title: string = "";
	@Input() description: string = "";
	@Input() snippets: any[] = [];

  ngOnInit(): void {
		this.snippets = this.snippets.map((snippet) => {
			if (snippet.type === 'html') {
				snippet.type = 'xml';
			}

			return snippet;
		});
  }
}
