import { Component, Input} from '@angular/core';
import { fireEvent, render, RenderResult, screen } from '@testing-library/angular';
import * as copyToClipboardUtil from '../utils/copy-to-clipboard.utils';
import { AppComponent } from './app.component';

@Component({ selector: 'icons', template: '' })
class IconsComponent {
  @Input() color = 'white';
}

@Component({
  selector: 'app-icon',
  template: '.'
})
class IconComponent {
  @Input() size = 24;
}

@Component({
  selector: 'darkmode-toggle',
  template: '.'
})
class DarkModeComponent {}

@Component({
  selector: 'code-presentation',
  template: '.'
})
class CodePresentationComponent {
  @Input() snippets: any;
}

describe('AppComponent', () => {
  let componentRender: RenderResult<AppComponent>;
  beforeEach(async () => {
    componentRender = await render(AppComponent, {
      declarations: [DarkModeComponent, IconComponent, CodePresentationComponent],
    });
  });

  it('should create the app', () => {
    const app = componentRender.fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('on click in command', () => {
    jest.useFakeTimers();
    const delay = 1000;
    const copyToClipboard = jest.fn();

    beforeAll(() => {
      const mock = jest.spyOn(copyToClipboardUtil, 'default');
      mock.mockImplementation(copyToClipboard);
    });

    it('should be copied the code', () => {
      const componentInstance = componentRender.fixture.componentInstance;
      expect(componentInstance.copied).toBe(false);

      fireEvent.click(screen.getByText('$ yarn add @dimaslz/ng-v-class'));
      expect(componentInstance.copied).toBe(true);
      expect(copyToClipboard).toBeCalled();

      jest.advanceTimersByTime(delay);
      expect(componentInstance.copied).toBe(false);
    });
  });
});
