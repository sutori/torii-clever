import Oauth2 from 'torii/providers/oauth2-code';
import { configurable } from 'torii/configuration';

/**
 * This class implements authentication against Clever Instant Login using the
 * OAuth2 authorization flow in a popup window.
 **/
export default Oauth2.extend({
  name: 'clever',

  init() {
    this._super(...arguments);

    this.setProperties({
      requiredUrlParams: ['client_id', 'redirect_uri', 'response_type'],
      optionalUrlParams: ['district_id'],
      responseParams: ['code']
    });
  },

  baseUrl: 'https://clever.com/oauth/authorize',
  districtId: configurable('districtId'),
  responseType: configurable('responseType', 'code')
});
