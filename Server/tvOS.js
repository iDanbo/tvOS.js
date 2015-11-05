//                        #######    ######              ##   ######
//                       ##     ##  ##    ##             ##  ##    ##
//                       ##     ##  ##                   ##  ##
//  ########  ##     ##  ##     ##   ######              ##   ######
//     ##      ##   ##   ##     ##        ##       ##    ##        ##
//     ##       ## ##    ##     ##  ##    ##  ###  ##    ##  ##    ##
//     ##        ###      #######    ######   ###   ######    ######
//
//                                                              v0.0.1
//
// tvOS.js
// (c) Wesley de Groot
// Licence: CC BY 4.0
//
// Please see:
// - https://github.com/wesdegroot/tvOS.js
// - https://www.wdgwv.com

// * tvOS XMLHttpRequest Library
// *
// * If it is missing (es-lint)
// *
// * @var object XMLHttpRequest
if (typeof XMLHttpRequest === 'undefined') {
  var XMLHttpRequest = {abort: function () { }, open: function () { }, send: function () { }, timeout: null, XMLHttpRequest: function () { }, getAllResponseHeaders: function () { }, getResponseHeader: function () { }, setRequestHeader: function () { }, metrics: null, readyState: null, response: null, responseText: null, responseType: null, responseXML: null, status: null, statusText: null, onabort: function () { }, onerror: function () { }, onload: function () { }, onloadend: function () { }, onloadstart: function () { }, onreadystatechange: function () { }, ontimeout: function () { }, error: function () { }, load: function () { }, loadend: function () { }, loadstart: function () { }, readystatechange: function () { }}
}

// * tvOS Storage Library
// *
// * If it is missing (es-lint)
// *
// * @var object Storage
if (typeof Storage === 'undefined') {
  var Storage = {clear: function () { }, getItem: function () { }, key: function () { }, length: function () { }, removeItem: function () { }, setItem: function () { }}
}

// * tvOS MediaItem Library
// *
// * If it is missing (es-lint)
// *
// * @var object MediaItem
if (typeof MediaItem === 'undefined') {
  var MediaItem = {MediaItem: function () { }, contentRatingDomain: function () { }, contentRatingRanking: function () { }, isExplicit: function () { }, artworkImageURL: function () { }, description: function () { }, subtitle: function () { }, title: function () { }, type: function () { }, url: function () { }, highlightGroups: function () { }, interstitials: function () { }, resumeTime: function () { }, loadAssetID: function () { }, loadCertificate: function () { }, loadKey: function () { }}
}

// * tvOS Restrictions Library
// *
// * If it is missing (es-lint)
// *
// * @var object Restrictions
if (typeof Restrictions === 'undefined') {
  var Restrictions = {allowsExplicit: null, maxMovieRank: null, maxMovieRatingForCountry: null, maxTVShowRank: null, maxTVShowRatingForCountry: null}
}

// * tvOS Settings Library
// *
// * If it is missing (es-lint)
// *
// * @var object Settings
if (typeof Settings === 'undefined') {
  var Settings = {restrictions: null, language: null, onRestrictionsChange: null, storefrontCountryCode: null}
}

// * tvOS TVError Library
// *
// * If it is missing (es-lint)
// *
// * @var object TVError
if (typeof TVError === 'undefined') {
  var TVError = {code: null, description: null, domain: null, userInfo: null}
}

// * tvOS Player Library
// *
// * If it is missing (es-lint)
// *
// * @var object Player
if (typeof Player === 'undefined') {
  var Player = {overlayDocument: function () { }, Player: function () { }, playlist: function () { }, present: function () { }, pause: function () { }, play: function () { }, playbackState: function () { }, seekToTime: function () { }, setPlaybackRate: function () { }, stop: function () { }, currentMediaItem: function () { }, nextMediaItem: function () { }, previousMediaItem: function () { }, mediaItemDidChange: function () { }, mediaItemWillChange: function () { }, requestSeekToTime: function () { }, shouldHandleStateChange: function () { }, stateDidChange: function () { }, stateWillChange: function () { }, timeBoundaryDidCross: function () { }, timeDidChange: function () { }, timedMetadata: function () { }}
}

// * tvOS DOMParser Library
// *
// * If it is missing (es-lint)
// *
// * @var object DOMParser
if (typeof DOMParser === 'undefined') {
  var DOMParser = {parseFromString: function () { }}
}

// * tvOS Playlist Library
// *
// * If it is missing (es-lint)
// *
// * @var object Playlist
if (typeof Playlist === 'undefined') {
  var Playlist = {item: function () { }, length: null, Playlist: function () { }, pop: function () { }, push: function () { }, splice: function () { }}
}

// * tvOS MenuBarDocument Library
// *
// * If it is missing (es-lint)
// *
// * @var object MenuBarDocument
if (typeof MenuBarDocument === 'undefined') {
  var MenuBarDocument = {getDocument: function () { }, setDocument: function () { }, setSelectedItem: function () { }}
}

// * tvOS navigationDocument Library
// *
// * If it is missing (es-lint)
// *
// * @var object navigationDocument
if (typeof navigationDocument === 'undefined') {
  var navigationDocument = {insertBeforeDocument: null, pushDocument: null, replaceDocument: null, dismissModal: null, presentModal: null, documents: null, clear: null, popDocument: null, popToDocument: null, popToRootDocument: null, removeDocument: null}
}

// * tvOS Keyboard Library
// *
// * If it is missing (es-lint)
// *
// * @var object Keyboard
if (typeof Keyboard === 'undefined') {
  var Keyboard = {text: null, onTextChange: function () { }}
}

// * tvOS App Library
// *
// * If it is missing (es-lint)
// *
// * @var object App
if (typeof App === 'undefined') {
  var App = {onError: null, onLaunch: null, onExit: null, reload: function () {}}
}

// * tvOS Device Library
// *
// * If it is missing (es-lint)
// *
// * @var object Device
if (typeof Device === 'undefined') {
  var Device = {systemVersion: null, appVersion: null, appIdentifier: null, model: null, productType: null, vendorIdentifier: null}
}

// * tvOS Library
// *
// * Making your work more easy!
// *
// * @var object tvOS
var tvOS = {

  // * tvOS.windows
  // *
  // * Wich windows are loaded?
  // *
  // * @var object
  windows: {
    windowActive: '',
    alertActive: false,
    loadingActive: false
  },

  // * tvOS.js
  // *
  // * tvOS.js
  // *
  // * @var object js
  js: {
    version: '0.0.1',
    date: '03-NOV-2015',
    release: 'beta'
  },

  // * tvOS.version
  // *
  // * The tvOS version.
  // *
  // * @var string version
  version: Device.systemVersion,

  // * tvOS.appVersion
  // *
  // * The current app version.
  // *
  // * @var string appVersion
  appVersion: Device.appVersion,

  // * tvOS.appIdentifier
  // *
  // * The current app Identifier.
  // *
  // * @var string appIdentifier
  appIdentifier: Device.appIdentifier,

  // * tvOS.model
  // *
  // * A string that identifies the device model.
  // *
  // * @var string model
  model: Device.model,

  // * tvOS.productType
  // *
  // * The version of the product installed on the Apple TV.
  // *
  // * @var string productType
  productType: Device.productType,

  // * tvOS.vendorIdentifier
  // *
  // * The universally unique identifier (UUID) of the device.
  // *
  // * @var string vendorIdentifier
  vendorIdentifier: Device.vendorIdentifier,

  // * tvOS.vendorIdentifier
  // *
  // * The universally unique identifier (UUID) of the device.
  // *
  // * @var string vendorIdentifier
  uuid: Device.vendorIdentifier,

  // * tvOS.device
  // *
  // * tvOS.device Device information
  // *
  // * @var object device
  device: {
    // * tvOS.device.version
    // *
    // * The tvOS version.
    // *
    // * @var string version
    version: Device.systemVersion,

    // * tvOS.device.appVersion
    // *
    // * The current app version.
    // *
    // * @var string appVersion
    appVersion: Device.appVersion,

    // * tvOS.device.appIdentifier
    // *
    // * The current app Identifier.
    // *
    // * @var string appIdentifier
    appIdentifier: Device.appIdentifier,

    // * tvOS.device.model
    // *
    // * A string that identifies the device model.
    // *
    // * @var string model
    model: Device.model,

    // * tvOS.device.productType
    // *
    // * The version of the product installed on the Apple TV.
    // *
    // * @var string productType
    productType: Device.productType,

    // * tvOS.device.vendorIdentifier
    // *
    // * The universally unique identifier (UUID) of the device.
    // *
    // * @var string vendorIdentifier
    vendorIdentifier: Device.vendorIdentifier,

    // * tvOS.device.vendorIdentifier
    // *
    // * The universally unique identifier (UUID) of the device.
    // *
    // * @var string vendorIdentifier
    uuid: Device.vendorIdentifier
  },

  // Useless function i'm used to create a test...
  test: function () {
    console.log('testing')
  },

  /**
   * alert
   *
   * Display an Alert message
   *
   * @param string title the title
   * @param string description the description
   * @param array buttons the buttons
   * @param function callback the callback
   * @example tvOS.alert('Update Avable', 'Update now', ['Yes', 'No'], function (e) { console.log('Clicked!') })
   */
  alert: function (title, description, buttons, callback) {
    if (typeof description === 'undefined') description = ' '

    var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
     <alertTemplate>
      <title>${title}</title>
      <description>${description}</description>`

    if (typeof buttons !== 'object') buttons = ['ok']

    for (var i = 0; i < buttons.length; i++) {
      alertString += `<button>
       <text>` + buttons[i] + `</text>
      </button>`
    }

    alertString += `</alertTemplate>
    </document>`

    var parser = new DOMParser()
    var alertDoc = parser.parseFromString(alertString, 'application/xml')
    if (typeof callback !== 'undefined') {
      alertDoc.addEventListener('select', function (e) {
        // Fix nasty return
        var pressed = e.target.innerHTML
        pressed = pressed.split('>')[1]
        pressed = pressed.split('<')[0]

        // Human readable!
        callback(pressed)
        tvOS.windows.alertActive = false
      }, false)
    } else {
      alertDoc.addEventListener('select', function (e) {
        var pressed = e.target.innerHTML
        pressed = pressed.split('>')[1]
        pressed = pressed.split('<')[0]

        navigationDocument.dismissModal(alertDoc)
        tvOS.windows.alertActive = false
        return pressed
      }, false)
    }
    navigationDocument.presentModal(alertDoc)
    this.windows.windowActive = alertDoc
    this.windows.alertActive = true
  },

  /**
   * removeOldDocument
   *
   * Removes the old document
   *
   * @internal
   * @example tvOS.removeOldDocument()
   */
  removeOldDocument: function () {
    if (this.windows.windowActive !== '') {
      navigationDocument.dismissModal(this.windows.windowActive)
    }
  },

  /**
   * reload
   *
   * Reload the app
   *
   * @example tvOS.reload()
   */
  reload: function () {
    App.reload()
  },

  /**
   * makeDocument
   *
   * make Document with resource
   *
   * @param string resource the resource
   * @example tvOS.makeDocument(xmlString)
   */
  makeDocument: function (resource) {
    if (!tvOS.parser) {
      tvOS.parser = new DOMParser()
    }

    var doc = tvOS.parser.parseFromString(resource, 'application/xml')
    return doc
  },

  /**
   * showLoadingIndicator
   *
   * Show a loading indicator
   *
   * @param [string] text loading text
   * @param [string] presentation last presentation
   * @example tvOS.showLoadingIndicator(text, presentation)
   */
  showLoadingIndicator: function (text, presentation) {
    this.removeOldDocument()
    if (typeof text === 'undefined') {
      text = 'Loading'
    }

    if (!this.windows.loadingIndicator) {
      this.loadingIndicator = this.makeDocument(this.loadingTemplate.replace('%s', text))
      this.windows.windowActive = this.loadingIndicator
    }

    if (!this.windows.loadingIndicator && presentation !== 'modalDialogPresenter' && presentation !== 'menuBarItemPresenter') {
      navigationDocument.pushDocument(this.loadingIndicator)
      this.windows.loadingIndicator = true
    }
  },

  /**
   * removeLoadingIndicator
   *
   * Remove the loading indicator
   *
   * @example tvOS.removeLoadingIndicator()
   */
  removeLoadingIndicator: function () {
    if (this.windows.loadingIndicator) {
      navigationDocument.removeDocument(this.loadingIndicator)
      this.removeOldDocument()
      this.windows.loadingIndicator = false
    }
  },

  /**
   * log
   *
   * to console.log (with support of objects)
   *
   * @param mixed object the object you want to parse
   * @example tvOS.log(object)
   */
  log: function (object) {
    if (typeof object === 'object') {
      for (var i in object) {
        console.log('[log] ' + i + ' = ' + object[i])
      }
    } else {
      console.log(object)
    }
  },

  load: function (event) {
    var self = this
    var ele = event.target
    var templateURL = ele.getAttribute('template')
    var presentation = ele.getAttribute('presentation')

    console.log(typeof event.target.getAttribute('presentation'))
    console.log(event.target.getAttribute('presentation'))

    if (typeof event.target.getAttribute('presentation') === 'string') {
      try {
        eval(event.target.getAttribute('presentation') + '(' + presentation + ')')
      } catch (err) {
        console.log('Error with callback')
        console.log(err)
      }
    }
  },

  display: function (view) {
    navigationDocument.pushDocument(view)
  },

  listView: function (title, list) {
    var temp = tvOS.ListViewTemplate_before.replace('tvOS_title', title)

    if (typeof list === 'object') {
      for (var i = 0; i < list.length; i++) {
        console.log(list[i])

        temp += tvOS.ListViewTemplate_while.replace('tvOS_title', (
                                            (typeof list[i]['title'] !== 'undefined') ? list[i]['title'] : 'Help')
                                           )
                                           .replace('tvOS_description', (
                                            (typeof list[i]['description'] !== 'undefined') ? list[i]['description'] : 'Please read the manual: ')
                                           )
                                           .replace('tvOS_action', (
                                            (typeof list[i]['action'] !== 'undefined') ? list[i]['action'] : 'tvOS._error')
                                           )
                                           .replace('tvOS_image', (
                                            (typeof list[i]['image'] !== 'undefined') ? list[i]['image'] : 'https://www.wdgwv.com/logo.png')
                                           )
                                           .replace('tvOS_template', (
                                            (typeof list[i]['template'] !== 'undefined') ? list[i]['template'] : 'none')
                                           )
                                           .replace('tvOS_helpText', (
                                            (typeof list[i]['accessibilityText'] !== 'undefined') ? list[i]['accessibilityText'] : 'Error')
                                           )
      }
    } else {
      temp += tvOS.ListViewTemplate_while.replace('tvOS_title', 'Help')
                                         .replace('tvOS_description', 'Please read the manual: ')
                                         .replace('tvOS_action', 'tvOS._error')
                                         .replace('tvOS_image', 'https://www.wdgwv.com/logo.png')
                                         .replace('tvOS_template', 'none')
                                         .replace('tvOS_helpText', 'Error')
    }

    temp += tvOS.ListViewTemplate_after

    console.log(temp)

    temp = this.makeDocument(temp)
    temp.addEventListener('select', tvOS.load.bind(tvOS))
    this.display(temp)
  },

  _error: function (err) {
    this.alert('Please read the manual.')
  },

  // * tvOS.loadingTemplate
  // *
  // * Template for loading screen
  // *
  // * @var string loadingTemplate
  loadingTemplate: `<?xml version='1.0' encoding='UTF-8' ?>
        <document>
          <loadingTemplate>
            <activityIndicator>
              <text>%s...</text>
            </activityIndicator>
          </loadingTemplate>
        </document>`,

  ListViewTemplate_before: `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
          <head>
            <style>
              .descriptionLayout {
                tv-text-max-lines: 8;
              }
            </style>
          </head>
          <listTemplate>
            <list>
              <header>
                <title>tvOS_title</title>
              </header>

              <section>`,

  ListViewTemplate_while: `
                <listItemLockup template="tvOS_template" presentation="tvOS_action" accessibilityText="tvOS_helpText">
                  <title>tvOS_title</title>
                  <relatedContent>
                    <lockup>
                      <img src="tvOS_image" width="857" height="482" />
                      <description class="descriptionLayout">tvOS_description</description>
                    </lockup>
                  </relatedContent>
                </listItemLockup>`,

  ListViewTemplate_after: `
              </section>
            </list>
          </listTemplate>
        </document>`

}

// * Loaded
// *
// * tvOS.js Loaded
// *
// * @var object js
console.log('tvOS.js v' + tvOS.js.version + ' ' + tvOS.js.release)

/*
 * App.onError
 *
 * App.onError Log & Reload.
 */
App.onError = function (error) {
  console.log(error)
  App.reload()
}

// END OF tvOS.js
