import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';

export default class MiniAppScoreChallengeView extends YTNode {
  static type = 'MiniAppScoreChallengeView';

  score: string;
  prompt: string;
  title: string;
  subtitle: string;
  renderer_context: {
    logging_context: {
      logging_directives: {
        tracking_params: string
      }
    }
  };

  constructor(data: RawNode) {
    super();
    this.score = data.score;
    this.prompt = data.prompt;
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.renderer_context = {
      logging_context: {
        logging_directives: {
          tracking_params: data.rendererContext.loggingContext.loggingDirectives.trackingParams
        }
      }
    };
  }
}