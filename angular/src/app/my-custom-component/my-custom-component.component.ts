import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { logger } from './sdk';
import { Desktop } from '@wxcc-desktop/sdk';
// This serves as example as to how to import a specific webcomponent from the momentum web component library
import '@momentum-ui/web-components/dist/comp/md-badge.js';

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
