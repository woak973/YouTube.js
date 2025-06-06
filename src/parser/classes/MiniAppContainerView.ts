import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import MiniAppTopBarView from './MiniAppTopBarView.js';
import MiniAppSplashScreenView from './MiniAppSplashScreenView.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class MiniAppContainerView extends YTNode {
  static type = 'MiniAppContainerView';

  url: {
    private_do_not_access_or_else_trusted_resource_url_wrapped_value: string
  };
  top_bar: MiniAppTopBarView | null;
  playable_id: string;
  source: string;
  is_embedded_in_webview: boolean;
  endpoint: NavigationEndpoint;
  local_release_id: number;
  derived_device_interface: string;
  splash_screen: MiniAppSplashScreenView | null;
  is_supported_country: boolean;
  on_mini_app_open_yt_content_requested: {
    innertube_command: NavigationEndpoint
  };
  layout: string;
  is_livestream: boolean;
  disable_video_capture: boolean;
  logging_directives: {
    tracking_params: string,
    visibility: {
      types: string
    }
  };

  constructor(data: RawNode) {
    super();
    this.url = {
      private_do_not_access_or_else_trusted_resource_url_wrapped_value: data.url.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue
    };
    this.top_bar = Parser.parseItem(data.topBar, MiniAppTopBarView);
    this.playable_id = data.playableId;
    this.source = data.source;
    this.is_embedded_in_webview = data.isEmbeddedInWebview;
    this.endpoint = new NavigationEndpoint(data.showLoadingErrorDialogCommand);
    this.local_release_id = data.localReleaseId;
    this.derived_device_interface = data.derivedDeviceInterface;
    this.splash_screen = Parser.parseItem(data.splashScreen, MiniAppSplashScreenView);
    this.is_supported_country = data.isSupportedCountry;
    this.on_mini_app_open_yt_content_requested = {
      innertube_command: new NavigationEndpoint(data.onMiniAppOpenYtContentRequested.innertubeCommand)
    };
    this.layout = data.layout;
    this.is_livestream = data.isLivestream;
    this.disable_video_capture = data.disableVideoCapture;
    this.logging_directives = {
      tracking_params: data.loggingDirectives.trackingParams,
      visibility: {
        types: data.loggingDirectives.visibility.types
      }
    };
  }
}