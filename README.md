
# ![Alt linkicon](https://github.com/mbrand1/sha2checker/blob/master/linkicon.png) SHA-2 checker

A Chrome extension that displays in the address bar whether a secure site is using SHA-2 or SHA-1.

It queries https://shaaaaaaaaaaaaa.com/api/check/<hostname> with the hostname of the URL in the current tab.  It only performs this query if you visit a secure site.  Only the hostname portion is sent to https://shaaaaaaaaaaaaa.com.

## Installing

Since this extension is unpacked, install it like this:

1. Clone this repo or download in .ZIP format
2. Extract the individual files into a folder (if zipped)
3. In Chrome, navigate to chrome://extensions/
4. Select *Developer Mode*
5. Click **Load Unpacked Extension...**
6. Navigate to the folder where you placed the repo files
7. Click **Open**


## Changelog

**0.2.0 - 2014-10-07**

    * Added icon

**0.1.0 - 2014-10-04**

    * Initial release

## Credits

<div>Link icon made by <a href="http://www.simpleicon.com" title="SimpleIcon">SimpleIcon</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed under <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a></div>
<br>
<a href="http://commons.wikimedia.org/wiki/File:Google_Chrome_icon_(2011).svg#mediaviewer/File:Google_Chrome_icon_(2011).svg">Google Chrome icon (2011)</a> by Google Inc. - <a rel="nofollow" class="external free" href="http://www.google.com/press/images.html">http://www.google.com/press/images.html</a>. Licensed under Public domain via <a href="//commons.wikimedia.org/wiki/">Wikimedia Commons</a>.

Guillermo Rauch's [spdy-indicator](https://github.com/guille/chrome-spdy-indicator) for inspiration

## Licenses

The MIT License (MIT)

Copyright (c) 2014 Micah Brandon &lt;brandon@netsville.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
