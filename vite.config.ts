import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        include: ["./store/*.test.ts"],
        testTimeout: 15000,
    },
});