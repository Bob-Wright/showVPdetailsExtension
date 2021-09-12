# showVPdetailsExtension
If you are doing responsive design it can be handy to easily see the browser viewport dimensions. This is a Chrome browser extension to display the viewport dimensions and aspect ratio in a popup. Uses Manifest V3.

This is a very simple extension that injects a bit of javascript into the target page.

When you load the extension it displays a popup with the viewport dimensions and aspect ratio as shown in the image. If you resize the window the displayed values track. The popup will display for five seconds before it gets out of the way. If you reload the tab the popup will also reload.
If you hit a hotkey the popup will come up and display the current values. If you hit a key within the first 1.5 seconds of loading the extension it will use that as its reload hotkey, otherwise the default is a lowercase "r" character.

We suggest using the "on click" choice and "allow access to files" on the extension Details page as shown in the image.

The extension doesn't require or use any permissions from Chrome. The code consists of two files, the manifest.json and the javascript that is injected.

If you need more punch than this simple popup suggest checking window resizer from coolx10.com
