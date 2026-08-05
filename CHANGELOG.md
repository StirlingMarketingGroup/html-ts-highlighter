# Change Log

All notable changes to the "htmlhtml-ts-highlighter" extension will be documented in this file.

## 0.0.2

- Stop injecting into `${…}` template interpolations (`- meta.template.expression`), so TS expressions like `(r << 16 | g << 8 | b)` can never open a phantom HTML region that paints the rest of the file as HTML ([#8520](https://github.com/StirlingMarketingGroup/StirlingMarketingGroup/issues/8520))
- Require a tag-like shape to enter HTML mode: `<` must not follow another `<`, must be followed by a tag name, and (for bare `</?`) the name must terminate like a real tag — so `<<`, `a < b`, and stray `<` in string text stay plain text
- Add `fixtures/interpolation-bitshift.ts` regression fixture

## 0.0.1

- Initial release
