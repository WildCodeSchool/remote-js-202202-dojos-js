const peakHeight = require("./03-bird-moutain.js");

describe("peakHeight", () => {
    it("Should be loaded", () => {
        expect(true).toBe(true);
    });

    it("should return 0 for no mountain", () => {
        const mountain = [
            "              ".split(''),
            "              ".split(''),
            "              ".split(''),
            "              ".split(''),
            "              ".split(''),
            "              ".split(''),
            "              ".split('')
        ];
        expect(peakHeight(mountain)).toBe(0);
    });

    it("Should return 3 for this mountain", () => {
        const mountain = [
            "^^^^^^        ".split(''),
            " ^^^^^^^^     ".split(''),
            "  ^^^^^^^     ".split(''),
            "  ^^^^^       ".split(''),
            "  ^^^^^^^^^^^ ".split(''),
            "  ^^^^^^      ".split(''),
            "  ^^^^        ".split('')
        ];
        expect(peakHeight(mountain)).toBe(3);
    });
});
