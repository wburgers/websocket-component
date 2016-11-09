# websocket-component [![Build Status](https://travis-ci.org/wburgers/websocket-component.svg?branch=master)](https://travis-ci.org/wburgers/websocket-component) [![Build Status](https://saucelabs.com/open_sauce/build_status/wburgers.svg)](https://saucelabs.com/beta/builds/deb1c7b01e754f54b5e11100a74a1eb4) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://beta.webcomponents.org/element/wburgers/websocket-component)

A Polymer wrapper for the Websocket API with support for subprotocols.

[![Build Status](https://saucelabs.com/open_sauce/build_matrix/wburgers.svg)](https://saucelabs.com/beta/builds/deb1c7b01e754f54b5e11100a74a1eb4)

```html
<websocket-component  url="{{wsURL}}"
                      protocols="{{wsProtocols}}"
                      status="{{wsStatus}}"
                      auto>
</websocket-component>
```

As the example above shows, it is possible to data-bind to some of the websocket values.
- The URL of the websocket server.
- The array of protocols to use.
- The status of the connection can only be read, not set. Use it with [status-dot] (https://github.com/wburgers/OZWSS-Polymer-status-dot) for UI visibility of the connection status.
- The auto propery tells the websocket to automatically connect on page load or url change. If auto is used, remember to data-bind the protocols before the url.
- The handle-visibility property tells the websocket to close the connection when the browser tab/page is out of focus and reopen when the tab is focussed.

The following events are thrown:
- "websocket-open": tells you the connection is opened.
- "websocket-error": tells you there was an error. `event.detail.data` contains more info about the error.
- "websocket-message": tells you a new message was received. `event.detail.data` contains the message.
- "websocket-close": tells you the connection was closed. `event.detail.code` contains the closing code. `event.detail.reason` contains the reason code.

### Install
You can install this element with bower:
```bash
bower i websocket-component -S
```

More api documentation, a demo and the tests can be found [here] (http://wburgers.github.io/websocket-component).
(To see the tests, add `/test/` to the url after it resolves).
