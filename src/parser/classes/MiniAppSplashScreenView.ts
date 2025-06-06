import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';

export default class MiniAppSplashScreenView extends YTNode {
  static type = 'MiniAppSplashScreenView';

  background_image: {
    sources: {
      url: string,
      width: number,
      height: number
    }[]
  };
  title: string;
  time_out_messages: {
    delay_ms: number,
    text: string
  }[];
  logging_directives: {
    tracking_params: string,
    visibility: {
      types: string
    }
  };

  constructor(data: RawNode) {
    super();
    this.background_image = {
      sources: data.backgroundImage.sources.map((item: any) => ({
        url: item.url,
        width: item.width,
        height: item.height
      }))
    };
    this.title = data.title;
    this.time_out_messages = data.timeOutMessages.map((item: any) => ({
      delay_ms: item.delayMs,
      text: item.text
    }));
    this.logging_directives = {
      tracking_params: data.loggingDirectives.trackingParams,
      visibility: {
        types: data.loggingDirectives.visibility.types
      }
    };
  }
}