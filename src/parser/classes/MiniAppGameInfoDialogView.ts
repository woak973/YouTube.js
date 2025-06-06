import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import { Parser } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import ButtonView from './ButtonView.js';

export default class MiniAppGameInfoDialogView extends YTNode {
  static type = 'MiniAppGameInfoDialogView';

  dialog_title: string;
  close_button: ButtonView | null;
  image: {
    sources: {
      url: string,
      width: number,
      height: number
    }[]
  };
  title: string;
  primary_genre: string;
  description: string;
  logging_directives: {
    tracking_params: string,
    visibility: {
      types: string
    }
  };
  info_row: {
    label?: string,
    value?: string,
    attributed_label?: {
      content: string,
      command_runs: {
        start_index: number,
        length: number,
        on_tap: {
          innertube_command: NavigationEndpoint
        }
      }[],
      style_runs: {
        start_index: number,
        length: number,
        weight_label: string
      }[]
    }
  }[];

  constructor(data: RawNode) {
    super();
    this.dialog_title = data.dialogTitle;
    this.close_button = Parser.parseItem(data.closeButton, ButtonView);
    this.image = {
      sources: data.image.sources.map((item: any) => ({
        url: item.url,
        width: item.width,
        height: item.height
      }))
    };
    this.title = data.title;
    this.primary_genre = data.primaryGenre;
    this.description = data.description;
    this.logging_directives = {
      tracking_params: data.loggingDirectives.trackingParams,
      visibility: {
        types: data.loggingDirectives.visibility.types
      }
    };
    this.info_row = data.infoRow.map((item: any) => ({
      label: Reflect.has(item, 'label') ? item.label : undefined,
      value: Reflect.has(item, 'value') ? item.value : undefined,
      attributed_label: Reflect.has(item, 'attributedLabel') ? {
        content: item.attributedLabel.content,
        command_runs: item.attributedLabel.commandRuns.map((item: any) => ({
          start_index: item.startIndex,
          length: item.length,
          on_tap: {
            innertube_command: new NavigationEndpoint(item.onTap.innertubeCommand)
          }
        })),
        style_runs: item.attributedLabel.styleRuns.map((item: any) => ({
          start_index: item.startIndex,
          length: item.length,
          weight_label: item.weightLabel
        }))
      } : undefined
    }));
  }
}