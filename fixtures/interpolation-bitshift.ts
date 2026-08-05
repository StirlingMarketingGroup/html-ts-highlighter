// Regression fixture for StirlingMarketingGroup/StirlingMarketingGroup#8520.
// Open this file in VS Code with the extension installed: every line below the
// bit-shift template literal must keep normal TypeScript coloring, and the real
// HTML template further down must still highlight as HTML.

const html = { FromString: (s: string) => s };

function shiftColor(r: number, g: number, b: number): string {
    // The `<<` inside ${…} used to open a phantom HTML tag region here,
    // painting the rest of the file as HTML text.
    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
}

// Must render as TS: keyword, string, and function-call coloring intact.
const stillTypescript = shiftColor(1, 2, 3).toUpperCase();

// Comparison / shift operators in plain string text must not open a tag either.
const cmp = `value < 10, shifted ${1 << 4} times, and a << b stays text`;

// Real HTML inside a template literal must still highlight as HTML,
// including nested ${…} interpolations tokenized as TS.
const $spinner = html.FromString(`
    <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading ${stillTypescript}…</span>
    </div>
    <br>
    text<br>more text
`);

export { shiftColor, cmp, $spinner };
