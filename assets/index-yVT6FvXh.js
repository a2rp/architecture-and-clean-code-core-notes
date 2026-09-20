import{j as e,Q as n,R as r,r as a,E as c,c as i,n as s,C as l,h as t}from"./index-DI9hzuIs.js";const o={},h=()=>e.jsxs("div",{className:`${o.scope} pageConfiguration`,children:[e.jsxs("header",{className:"pageHeader",children:[e.jsxs("div",{className:"label",children:[e.jsx(n,{}),e.jsx("span",{children:"Code Quality"})]}),e.jsx("h1",{children:"Configuration"}),e.jsx("p",{children:"Configuration controls how an application behaves across different environments without requiring unnecessary code changes. Good configuration is explicit, validated, centralized, secure, and easy to reason about."})]}),e.jsxs("section",{className:"introGrid",children:[e.jsxs("article",{children:[e.jsx(r,{}),e.jsx("h2",{children:"Separate environment differences"}),e.jsx("p",{children:"Development, testing, staging, and production often require different URLs, credentials, ports, limits, or feature settings."})]}),e.jsxs("article",{children:[e.jsx(a,{}),e.jsx("h2",{children:"Validate before runtime"}),e.jsx("p",{children:"Invalid or missing configuration should ideally fail during startup instead of producing confusing failures later."})]}),e.jsxs("article",{children:[e.jsx(c,{}),e.jsx("h2",{children:"Keep access centralized"}),e.jsx("p",{children:"Application modules should depend on a clear configuration contract instead of reading environment variables throughout the codebase."})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Environment Configuration"}),e.jsx("h2",{children:"Keep environment differences outside application logic"}),e.jsx("p",{children:"Code should not be filled with environment-specific branches when the difference can be represented as configuration."})]}),e.jsxs("div",{className:"exampleGrid",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Environment logic spread in code"}),e.jsx("pre",{children:e.jsx("code",{children:`function getApiUrl() {
  if (process.env.NODE_ENV === "production") {
    return "https://api.example.com";
  }

  if (process.env.NODE_ENV === "test") {
    return "http://localhost:5000";
  }

  return "http://localhost:1198";
}`})})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Configuration supplied externally"}),e.jsx("pre",{children:e.jsx("code",{children:`const apiUrl = process.env.API_URL;

const config = {
  apiUrl,
};`})}),e.jsx("p",{children:"The deployment environment provides the value while application code consumes one stable configuration field."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Environment Variables"}),e.jsx("h2",{children:"Use environment variables for deployment-specific values"})]}),e.jsxs("div",{className:"envGrid",children:[e.jsxs("article",{children:[e.jsx(i,{}),e.jsx("h3",{children:"Good candidates"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Database connection information"}),e.jsx("li",{children:"External API base URLs"}),e.jsx("li",{children:"Server ports"}),e.jsx("li",{children:"Runtime environment names"}),e.jsx("li",{children:"Feature settings"}),e.jsx("li",{children:"Service credentials"})]})]}),e.jsxs("article",{children:[e.jsx(s,{}),e.jsx("h3",{children:"Avoid unnecessary environment values"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Constants that never vary between deployments"}),e.jsx("li",{children:"Business rules that belong in domain logic"}),e.jsx("li",{children:"UI copy that should be version-controlled"}),e.jsx("li",{children:"Values added only to avoid making a design decision"}),e.jsx("li",{children:"Configuration nobody actually changes"})]})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Defaults"}),e.jsx("h2",{children:"Use defaults only when they are genuinely safe"}),e.jsx("p",{children:"Defaults can simplify local development, but silently falling back for important production settings can hide deployment mistakes."})]}),e.jsxs("div",{className:"exampleGrid",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Reasonable default"}),e.jsx("pre",{children:e.jsx("code",{children:`const port = Number(
  process.env.PORT || 1198,
);`})}),e.jsx("p",{children:"A local server port can have a predictable development default."})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Dangerous silent fallback"}),e.jsx("pre",{children:e.jsx("code",{children:`const databaseUrl =
  process.env.DATABASE_URL ||
  "mongodb://localhost:27017/app";`})}),e.jsx("p",{children:"In production, silently connecting to the wrong database can be much worse than failing startup."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Validation"}),e.jsx("h2",{children:"Convert raw environment values into a trusted configuration object"})]}),e.jsxs("div",{className:"configBox",children:[e.jsx("pre",{children:e.jsx("code",{children:`function loadConfig() {
  const port = Number(
    process.env.PORT || 1198,
  );

  if (!Number.isInteger(port)) {
    throw new Error(
      "PORT must be a valid integer",
    );
  }

  if (!process.env.API_URL) {
    throw new Error(
      "API_URL is required",
    );
  }

  if (!process.env.DATABASE_URL) {
    throw new Error(
      "DATABASE_URL is required",
    );
  }

  return {
    port,
    apiUrl: process.env.API_URL,
    databaseUrl: process.env.DATABASE_URL,
    environment:
      process.env.NODE_ENV || "development",
  };
}

export const config = loadConfig();`})}),e.jsxs("div",{className:"configDetails",children:[e.jsxs("article",{children:[e.jsx("span",{children:"01"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Read"}),e.jsx("p",{children:"Collect raw environment values."})]})]}),e.jsxs("article",{children:[e.jsx("span",{children:"02"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Parse"}),e.jsx("p",{children:"Convert strings into required types."})]})]}),e.jsxs("article",{children:[e.jsx("span",{children:"03"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Validate"}),e.jsx("p",{children:"Reject missing or invalid values."})]})]}),e.jsxs("article",{children:[e.jsx("span",{children:"04"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Expose"}),e.jsx("p",{children:"Return a stable application configuration object."})]})]})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Secrets vs Configuration"}),e.jsx("h2",{children:"Not every configuration value is a secret"})]}),e.jsxs("div",{className:"secretGrid",children:[e.jsxs("article",{children:[e.jsx(l,{}),e.jsx("h3",{children:"Secrets"}),e.jsxs("ul",{children:[e.jsx("li",{children:"API keys"}),e.jsx("li",{children:"Database credentials"}),e.jsx("li",{children:"Private keys"}),e.jsx("li",{children:"Authentication secrets"}),e.jsx("li",{children:"Provider tokens"})]}),e.jsx("p",{children:"Secrets require stronger storage, access, and exposure controls."})]}),e.jsxs("article",{children:[e.jsx(n,{}),e.jsx("h3",{children:"Non-secret configuration"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Port numbers"}),e.jsx("li",{children:"Public service URLs"}),e.jsx("li",{children:"Pagination defaults"}),e.jsx("li",{children:"Feature settings"}),e.jsx("li",{children:"Runtime environment"})]}),e.jsx("p",{children:"These values may vary by environment without necessarily being confidential."})]})]}),e.jsxs("div",{className:"warningBox",children:[e.jsx("div",{className:"warningIcon",children:e.jsx(s,{})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Do not commit real secrets to the repository."}),e.jsx("p",{children:"Keep secret values outside source control. Commit a safe `.env.example` or configuration reference that documents required variable names without real credentials."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Centralized Access"}),e.jsx("h2",{children:"Do not read raw environment variables everywhere"})]}),e.jsxs("div",{className:"exampleGrid",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Scattered access"}),e.jsx("pre",{children:e.jsx("code",{children:`// database.js
process.env.DATABASE_URL;

// server.js
process.env.PORT;

// payment.js
process.env.PAYMENT_API_URL;

// email.js
process.env.EMAIL_API_KEY;`})}),e.jsx("p",{children:"Parsing, naming, defaults, and validation become spread across the application."})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Central config contract"}),e.jsx("pre",{children:e.jsx("code",{children:`import { config } from "./config";

server.listen(config.port);

connectDatabase(
  config.databaseUrl,
);

paymentClient.configure(
  config.paymentApiUrl,
);`})}),e.jsx("p",{children:"Modules consume already-validated values through one clear configuration source."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Feature Flags"}),e.jsx("h2",{children:"Feature flags should control intentional runtime variation"}),e.jsx("p",{children:"A feature flag can enable or disable behavior without deploying separate code, but every flag adds another possible system state."})]}),e.jsx("div",{className:"flagBox",children:e.jsx("pre",{children:e.jsx("code",{children:`const config = {
  features: {
    newCheckout:
      process.env.FEATURE_NEW_CHECKOUT === "true",
  },
};

if (config.features.newCheckout) {
  return renderNewCheckout();
}

return renderCurrentCheckout();`})})}),e.jsxs("div",{className:"flagGrid",children:[e.jsxs("article",{children:[e.jsx(i,{}),e.jsx("h3",{children:"Useful for"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Gradual rollout"}),e.jsx("li",{children:"Controlled experiments"}),e.jsx("li",{children:"Temporary operational switches"}),e.jsx("li",{children:"Safe migration between implementations"})]})]}),e.jsxs("article",{children:[e.jsx(s,{}),e.jsx("h3",{children:"Watch for"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Flags that never get removed"}),e.jsx("li",{children:"Many nested flag combinations"}),e.jsx("li",{children:"Business logic hidden behind configuration"}),e.jsx("li",{children:"Unknown production flag state"})]})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Configuration Drift"}),e.jsx("h2",{children:"Environments should not become mysterious variations of the same app"})]}),e.jsxs("div",{className:"driftGrid",children:[e.jsxs("article",{children:[e.jsx("strong",{children:"Missing variables"}),e.jsx("p",{children:"One environment defines values that another environment does not."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Different naming"}),e.jsx("p",{children:"The same setting uses inconsistent environment variable names."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Undocumented values"}),e.jsx("p",{children:"Production contains important settings nobody can find in project documentation."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Old configuration"}),e.jsx("p",{children:"Removed features leave obsolete environment variables behind."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Different defaults"}),e.jsx("p",{children:"Local behavior differs from production because fallback values do not match."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Manual edits"}),e.jsx("p",{children:"Runtime settings change without a clear record or review process."})]})]}),e.jsxs("div",{className:"noteBox",children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsx("h3",{children:"Document the configuration contract."}),e.jsx("p",{children:"A maintained `.env.example` and project documentation can make required values, optional values, defaults, and expected formats visible to developers."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Fail-Fast Startup"}),e.jsx("h2",{children:"Broken configuration should stop the application early"})]}),e.jsxs("div",{className:"startupFlow",children:[e.jsxs("article",{children:[e.jsx("span",{children:"01"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Load configuration"}),e.jsx("p",{children:"Read all required runtime values."})]})]}),e.jsxs("article",{children:[e.jsx("span",{children:"02"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Validate configuration"}),e.jsx("p",{children:"Check types, required values, formats, and allowed ranges."})]})]}),e.jsxs("article",{children:[e.jsx("span",{children:"03"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Initialize dependencies"}),e.jsx("p",{children:"Connect services using trusted configuration."})]})]}),e.jsxs("article",{children:[e.jsx("span",{children:"04"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Start accepting work"}),e.jsx("p",{children:"Only start after critical startup requirements succeed."})]})]})]}),e.jsxs("div",{className:"exampleGrid startupExample",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Late failure"}),e.jsx("pre",{children:e.jsx("code",{children:`app.listen(1198);

// Later...
await connectDatabase(
  process.env.DATABASE_URL,
);`})})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Fail before serving traffic"}),e.jsx("pre",{children:e.jsx("code",{children:`const config = loadConfig();

await connectDatabase(
  config.databaseUrl,
);

app.listen(config.port);`})})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Frontend Configuration"}),e.jsx("h2",{children:"Browser configuration must be treated as public"})]}),e.jsxs("div",{className:"frontendBox",children:[e.jsx(s,{}),e.jsxs("div",{children:[e.jsx("h3",{children:"Anything shipped to the browser can be inspected."}),e.jsx("p",{children:"Frontend build variables are useful for public API URLs, feature settings, and other non-secret values. Private API keys, database passwords, signing secrets, and similar credentials must not be embedded in browser code."})]})]}),e.jsxs("div",{className:"exampleGrid frontendExample",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Appropriate"}),e.jsx("pre",{children:e.jsx("code",{children:`const apiUrl =
  import.meta.env.VITE_API_URL;`})})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Never treat as private"}),e.jsx("pre",{children:e.jsx("code",{children:`const privateSecret =
  import.meta.env.VITE_PRIVATE_SECRET;`})}),e.jsx("p",{children:"Prefixing a value for frontend access does not make it secret."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Review Checklist"}),e.jsx("h2",{children:"Questions to ask about configuration"})]}),e.jsxs("div",{className:"checklist",children:[e.jsxs("article",{children:[e.jsx("strong",{children:"Does this value actually vary by environment?"}),e.jsx("p",{children:"Do not turn stable application constants into unnecessary runtime configuration."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Is the value validated during startup?"}),e.jsx("p",{children:"Convert raw strings into trusted application values before deeper code uses them."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Is the default safe?"}),e.jsx("p",{children:"Required production settings should usually fail rather than silently use an incorrect fallback."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Is this value confidential?"}),e.jsx("p",{children:"Apply stronger controls to credentials and other secrets."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Is configuration accessed through one clear source?"}),e.jsx("p",{children:"Avoid scattered environment parsing throughout application code."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Does this feature flag still need to exist?"}),e.jsx("p",{children:"Remove temporary flags after their rollout or migration purpose is complete."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Is the configuration contract documented?"}),e.jsx("p",{children:"Developers should know which variables exist and which are required."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Can the application fail before serving traffic?"}),e.jsx("p",{children:"Critical configuration problems should be detected before the system begins accepting work."})]})]})]}),e.jsxs("section",{className:"takeaway",children:[e.jsx("span",{className:"sectionLabel",children:"Key Takeaway"}),e.jsx("h2",{children:"Turn raw environment values into one trusted configuration contract."}),e.jsx("p",{children:"Good configuration separates environment differences from application behavior, validates required values early, distinguishes secrets from ordinary settings, centralizes access, and avoids unnecessary runtime variation. Configuration should make deployments predictable rather than mysterious."})]})]});export{h as default};
