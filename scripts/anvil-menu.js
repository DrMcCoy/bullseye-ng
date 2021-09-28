/**
* MIT License
*
* Copyright (c) 2020 by Victor Ling<victorling@ionshard.com>
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
(() => {
  const version = 1;  //Current Anvil Menu Version

  //Anvil Menu Bootstrap
  if (!window.AnvilMenu) {
    window.AnvilMenu = {loaded: 0};
    window.AnvilMenu.setup = () => console.error('Anvil Menu | Failed to setup Anvil Menu');
    $(() => window.AnvilMenu.setup());
  }

  if (window.AnvilMenu.loaded >= version) {
    return;
  }
  window.AnvilMenu.loaded = version;

  window.AnvilMenu.setup = () => {
    console.log(`Anvil Menu | Initializing v${version}`);

    window.AnvilMenu.entries = [];

    window.AnvilMenu.registerMenuEntry = entry => {
      window.AnvilMenu.entries.push(entry);
    };

    window.AnvilMenu.registerMenuEntries = entries => entries.forEach(window.AnvilMenu.registerMenuEntry);

    Hooks.on('init', () => {
      $('<div id="anvil-menu">')
        .css('position', 'absolute')
        .css('top', 12).css('left', 10)
        .css('width', 100).css('height', 50)
        .css('z-index', 61)
        .appendTo($('body'));
      window.AnvilMenu.contextMenu = new ContextMenu($('body'), '#anvil-menu', window.AnvilMenu.entries);
    });
  };
})();
