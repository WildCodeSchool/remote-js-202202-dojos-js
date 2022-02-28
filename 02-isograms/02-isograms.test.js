const isIsogram = require("./02-isograms.js");

describe("isograms", () => {
    it("Should be loaded", () => {
        expect(true).toBe(true);
    });

    it("Should return true for fleur", () => {
        expect(isIsogram("fleur")).toBe(true);
    });

    it("Should return true for coucou", () => {
        expect(isIsogram("coucou")).toBe(false);
    });

    it("Should return false for COUcou", () => {
        expect(isIsogram("COUcou")).toBe(false);
    });
});
