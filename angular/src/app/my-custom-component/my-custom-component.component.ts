import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { logger } from './sdk';
import { Desktop } from '@wxcc-desktop/sdk';
import '@momentum-ui/web-components/dist/index.js';

@Component({
  selector: 'my-custom-component',
  templateUrl: './my-custom-component.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class MyCustomComponent implements OnInit {
  ngOnInit() {
    this.initializeDesktop();
  }

  // This input param is added to serve as an example as to how to pass in attributes or properties to the custom element
  @Input('theme') isDarkMode: boolean | undefined;

  private initializeDesktop = async () => {
    await Desktop.config.init();
    logger.info('desktop initialized');
  };
}
