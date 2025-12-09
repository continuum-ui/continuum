/** Converts a px value to a rem value. Defaults to 16px as the base. */
export const pxToRem = (px: string | number, base = 16) => {
    if (typeof px === "string") {
        px = parseFloat(px);
    }
    return px / base + "rem";
};
