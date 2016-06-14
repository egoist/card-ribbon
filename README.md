# card-ribbon [![NPM version](https://img.shields.io/npm/v/card-ribbon.svg)](https://npmjs.com/package/card-ribbon) [![NPM downloads](https://img.shields.io/npm/dm/card-ribbon.svg)](https://npmjs.com/package/card-ribbon)

> Card ribbon in pure CSS. (in bytes!)

## Install

```bash
$ npm install --save card-ribbon
```

## Usage

**The parent element of `.card-ribbon` should be `position: relative;`**

```html
<div class="parent-element">
  <div class="card-ribbon">This is the ribbon!</div>
  <div class="content">Whatever contents...</div>
</div>
```

Then include the CSS file via `<link>` attribute.

```html
<link rel="stylesheet" href="/path/to/card-ribbon/dist/card-ribbon.css">
```

Or use some CSS pre-processor:

```css
@import "card-ribbon";
```

## Browser Support

IE 10 and above, Chrome, Safari, Firefox and a bunch of shit.

## License

MIT © [EGOIST](https://github.com/egoist)
