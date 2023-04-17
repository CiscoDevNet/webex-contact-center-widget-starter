import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

  private initializeDesktop = async () => {
    await Desktop.config.init();
    logger.info('desktop initialized');
  };
}
