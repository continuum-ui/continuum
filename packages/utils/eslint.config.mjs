import { config as baseConfig } from "@continuum-ui/eslint-config/react-internal";

/** @type {import("eslint").Linter.Config} */
export const config = [
    ...baseConfig,
    {
        rules: {
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                },
            ],
        },
    },
];
