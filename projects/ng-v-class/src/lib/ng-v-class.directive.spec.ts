import { Component, Input} from '@angular/core';
import { render, RenderResult, screen } from '@testing-library/angular';
import { NgVClassDirective } from './ng-v-class.directive';

@Component({
	selector: 'mock-app',
	template: '<div [ngVClass]="ngVClass" data-testid="element">content</div>'
})
class AppComponent {
  @Input() ngVClass = '';
}

const setup = async ({ ngVClass = '' }: any = {}) => {
	return await render(AppComponent, {
		declarations: [NgVClassDirective],
		componentProperties: {
			ngVClass,
		},
	})
};

describe('AppComponent', () => {
  let componentRender: RenderResult<AppComponent>;

	it('should create the app', async () => {
		const app = (await setup()).fixture.componentInstance;

    expect(app).toBeTruthy();
  });

	it('String class', async() => {
		const app = (await setup({ ngVClass: "classA" }));

		const element = screen.getByTestId('element');
    expect(element.className).toBe("classA");
  });

	it('Object class', async() => {
		const app = (await setup({ ngVClass: { "classA": true } }));

		const element = screen.getByTestId('element');
    expect(element.className).toBe("classA");
  });

	it('Array class', async() => {
		const app = (await setup({ ngVClass: ['classA'] }));

		const element = screen.getByTestId('element');
    expect(element.className).toBe("classA");
  });

	it('Object with Strings and array class', async() => {
		const app = (await setup({
			ngVClass: [
				true ? 'classA' : 'classB',
				['classC'],
				{ 'classD': true },
				['classE', ['classF', 'classG']],
				{ 'classH': false },
				{ ['classI']: false },
			]
		}));

		const element = screen.getByTestId('element');
    expect(element.className).toBe("classA classC classD classE classF classG");
  });
});
