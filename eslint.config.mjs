import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Claude Code scratch + ephemeral agent git worktrees. These are
    // gitignored copies of the source tree and must not be linted — doing
    // so double-counts every issue across each worktree snapshot.
    ".claude/**",
  ]),
  {
    rules: {
      // Apostrophes and quotes in content strings are harmless — escaping
      // hundreds of them introduces noise without improving correctness.
      "react/no-unescaped-entities": "off",
      // Every guide page uses the intentional client-only mount guard:
      //   const [loaded, setLoaded] = useState(false);
      //   useEffect(() => { setLoaded(true); }, []);
      //   if (!loaded) return null;
      // This single setState-in-effect is deliberate (it defers render to
      // the client to avoid hydration mismatches across 200+ pages) and is
      // not a correctness bug. Surface it as a warning rather than an error.
      "react-hooks/set-state-in-effect": "warn",
      // Small presentational helper components are frequently defined inside
      // page modules alongside their single consumer. This is an accepted,
      // intentional organization choice across the codebase, not a bug.
      "react-hooks/static-components": "warn",
      // Allow variables/args prefixed with _ to be intentionally unused.
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
    },
  },
]);

export default eslintConfig;
