torii-clever
==============================================================================

This is a [Clever Instant Login](https://dev.clever.com/docs/identity-api) provider for [Torii](https://github.com/Vestorly/torii).

Installation
------------------------------------------------------------------------------

```
ember install torii
ember install torii-clever
```


Usage
------------------------------------------------------------------------------

Edit `/config/environment.js` and add your Torii provider configuration:

```javascript
module.exports = function(environment) {
  // ...

  ENV['torii'] = {
    providers: {
      'clever': {
        clientId: 'Clever client ID',
        redirectUri: 'http://localhost:4200/torii/redirect.html',
        districtId: 'Clever district ID'
      }
    }
  };

  // ...
};
```

Options that can be configured:

| Option | Required | Description |
|--------|----------|-------------|
| clientId | x | Client ID of your app |
| redirectUri | x | Redirect URI of the app for the authentication response |
| districtId | | District ID |


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd torii-clever`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

----

Created and maintained by [Yoran Brondsema](https://github.com/YoranBrondsema) from [Sutori](https://www.sutori.com).
