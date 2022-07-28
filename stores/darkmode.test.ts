import { setActivePinia, createPinia } from "pinia";
import { describe, test, expect, beforeAll } from "vitest";
import { useDarkMode } from "./darkmode";

beforeAll(() => {
    setActivePinia(createPinia());
});

describe("initializes", () => {
    test("works", () => {
        expect(true).toBe(true);
    });
});

describe("darkModeStore", () => {
    test("should be created", () => {
        const store = useDarkMode()
        expect(store).toBeDefined();
    });
});
