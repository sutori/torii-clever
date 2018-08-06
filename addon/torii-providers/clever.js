import Oauth2 from 'torii/providers/oauth2-code';
import { configurable } from 'torii/configuration';
import { computed } from '@ember/object';

/**
 * This class implements authentication against Clever Instant Login using the
 * OAuth2 authorization flow in a popup window.
 **/
export default Oauth2.extend({
  name: 'clever',

  baseUrl: 'https://clever.com/oauth/authorize'
});
