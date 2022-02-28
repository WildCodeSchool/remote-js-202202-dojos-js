const isValidWalk = require("./03-ten-minutes-walk.js");

describe("ten minutes walk", () => {
    it("Should be loaded", () => {
        expect(true).toBe(true);
    });

    it("Should return true for N S N S N S N S N S", () => {
        expect(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toBe(true);
    });

    it("Should return true for E S W N N S N S N S", () => {
        expect(isValidWalk(['e', 's', 'w', 'n', 'n', 's', 'n', 's', 'n', 's'])).toBe(true);
    });

    it("Should return false for e (too short)", () => {
        expect(isValidWalk(['e'])).toBe(false);
    });

    it("Should return false when too long", () => {
        expect(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'e', 'w'])).toBe(false);
    });
});