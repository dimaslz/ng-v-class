import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import hljs from 'highlight.js'
import hljsHTML from 'highlight.js/lib/languages/xml'
import hljsTs from 'highlight.js/lib/languages/typescript'

import copyToClipboard from '../utils/copy-to-clipboard.utils';

import { code as programaticallyCodeExample, html as programaticallyCodeHtml } from './examples/programatically';
import vClassExample from './examples/v-class';
import angularExample from './examples/angular';
import angularLimitsExample from './examples/angular-limits';
import installExample from './examples/install';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  public copied = false;
  public date = new Date().getFullYear();
  public install = hljs.highlight(installExample, { language: 'typescript' }).value;

  public examples = {
    programaticallyCode: hljs.highlight(programaticallyCodeExample, { language: 'typescript' }).value,
    programaticallyHtml: hljs.highlight(programaticallyCodeHtml, { language: 'xml' }).value,
    angular: hljs.highlight(angularExample, { language: 'xml' }).value,
    angularLimits: hljs.highlight(angularLimitsExample, { language: 'xml' }).value,
    ngVClass: hljs.highlight(vClassExample, { language: 'xml' }).value
  };

  async ngOnInit(): Promise<void> {
    hljs.registerLanguage('xml', hljsHTML);
    hljs.registerLanguage('typescript', hljsTs);

    if (environment.production) {
      const node: HTMLScriptElement = document.createElement('script');
      node.src = 'https://plausible.io/js/plausible.js';
      node.type = 'text/javascript';
      node.async = true;
      node.defer = true;
      node.dataset.domain = 'ng-v-class.dimaslz.dev';

      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  onClickCommandExample($event: MouseEvent): void {
    this.copied = true;

    const target: EventTarget | null = $event.target;

    if (target instanceof Element) {
      const value = target?.textContent as string;
      copyToClipboard(value.replace('$ ', ''));
    }

    setTimeout(() => {
      this.copied = false;
    }, 1000);
  }
}
