import{j as e,I as a,o as r,n as i,k as s,v as c,c as t,e as l,U as o}from"./index-C8kppKFR.js";const d={},h=[{title:"Long Function",text:"A function contains several responsibilities, abstraction levels, or decision paths that are difficult to understand together.",signal:"Difficult to explain with one focused name."},{title:"Large Module or Class",text:"One module accumulates behavior for several unrelated concerns and becomes a common destination for new code.",signal:"Changes happen for many unrelated reasons."},{title:"Duplicate Knowledge",text:"The same business rule, calculation, validation, or decision is maintained independently in several places.",signal:"One rule change requires several coordinated edits."},{title:"Feature Envy",text:"A function or module repeatedly accesses another module's data and behavior more than its own.",signal:"Behavior may belong closer to the data it uses."},{title:"Primitive Obsession",text:"Important domain concepts are represented only with generic strings, numbers, arrays, or booleans.",signal:"The same validation and interpretation logic appears repeatedly."},{title:"Boolean Flags",text:"A boolean parameter changes a function into two substantially different modes of operation.",signal:"The function may contain multiple responsibilities."},{title:"Shotgun Surgery",text:"One small requirement regularly requires changes across many unrelated files or modules.",signal:"Knowledge or responsibility may be scattered."},{title:"Dead Code",text:"Unused functions, old branches, abandoned variables, or commented-out implementations remain in the codebase.",signal:"Developers cannot tell whether obsolete code is still important."},{title:"Speculative Generality",text:"Abstractions and extension points exist for future requirements that never became real.",signal:"Infrastructure exists without an active consumer."},{title:"Comments as Deodorant",text:"Comments repeatedly explain confusing code instead of improving the code's naming, structure, or responsibility boundaries.",signal:"The explanation is compensating for unclear implementation."}],x=()=>e.jsxs("div",{className:`${d.scope} pageCodeSmells`,children:[e.jsxs("header",{className:"pageHeader",children:[e.jsxs("div",{className:"label",children:[e.jsx(a,{}),e.jsx("span",{children:"Code Quality"})]}),e.jsx("h1",{children:"Code Smells"}),e.jsx("p",{children:"A code smell is a warning sign that code may contain a deeper design or maintainability problem. A smell does not automatically mean the code is wrong, but it can indicate an area worth understanding before future changes make it more expensive."})]}),e.jsxs("section",{className:"introGrid",children:[e.jsxs("article",{children:[e.jsx(r,{}),e.jsx("h2",{children:"Smells are signals"}),e.jsx("p",{children:"They point toward possible design problems but should be evaluated in context rather than treated as automatic violations."})]}),e.jsxs("article",{children:[e.jsx(i,{}),e.jsx("h2",{children:"Symptoms are not always causes"}),e.jsx("p",{children:"A long function or duplicate block may be visible while the deeper issue is unclear responsibility, weak boundaries, or changing requirements."})]}),e.jsxs("article",{children:[e.jsx(s,{}),e.jsx("h2",{children:"Refactor deliberately"}),e.jsx("p",{children:"Understand why a smell exists before applying a mechanical transformation that could create a different problem."})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Common Smells"}),e.jsx("h2",{children:"Patterns worth investigating"}),e.jsx("p",{children:"These are common indicators that responsibilities, abstractions, or dependencies may no longer match the needs of the code."})]}),e.jsx("div",{className:"smellGrid",children:h.map(n=>e.jsxs("article",{children:[e.jsx(i,{}),e.jsx("h3",{children:n.title}),e.jsx("p",{children:n.text}),e.jsx("span",{children:n.signal})]},n.title))})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Long Functions"}),e.jsx("h2",{children:"Length becomes a problem when responsibilities become unclear"})]}),e.jsxs("div",{className:"exampleGrid",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Several concerns together"}),e.jsx("pre",{children:e.jsx("code",{children:`async function checkout(cart, user) {
  if (!cart.items.length) {
    throw new Error("Empty cart");
  }

  const subtotal = cart.items.reduce(
    (sum, item) => sum + item.price,
    0,
  );

  const tax = subtotal * 0.18;

  const response = await fetch("/api/orders", {
    method: "POST",
    body: JSON.stringify({
      cart,
      user,
      subtotal,
      tax,
    }),
  });

  const order = await response.json();

  await sendConfirmationEmail(order);

  analytics.track("checkout_completed");

  return order;
}`})}),e.jsx("p",{children:"Validation, calculation, transport, notifications, and analytics all compete inside the same function."})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Focused orchestration"}),e.jsx("pre",{children:e.jsx("code",{children:`async function checkout(cart, user) {
  validateCart(cart);

  const pricing = calculatePricing(cart);

  const order = await orderService.create({
    cart,
    user,
    pricing,
  });

  await notifyOrderCreated(order);

  trackCheckout(order);

  return order;
}`})}),e.jsx("p",{children:"The higher-level workflow remains visible while details live in focused operations."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Large Modules"}),e.jsx("h2",{children:"Watch for modules that become responsible for everything"})]}),e.jsxs("div",{className:"exampleGrid",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Low cohesion"}),e.jsx("pre",{children:e.jsx("code",{children:`class ApplicationManager {
  createUser() {}
  resetPassword() {}
  calculateTax() {}
  sendInvoice() {}
  resizeImage() {}
  exportReport() {}
  clearCache() {}
}`})})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Focused responsibilities"}),e.jsx("pre",{children:e.jsx("code",{children:`UserService
PaymentService
InvoiceService
ImageService
ReportService`})}),e.jsx("p",{children:"Separate modules can represent clearer concepts when the responsibilities genuinely evolve independently."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Duplicate Code"}),e.jsx("h2",{children:"Look for duplicated knowledge, not only repeated syntax"})]}),e.jsxs("div",{className:"duplicateBox",children:[e.jsx(c,{}),e.jsxs("div",{children:[e.jsx("h3",{children:"Repeated rules are more dangerous than repeated shape."}),e.jsx("p",{children:"Two blocks can look similar while representing different concepts. A stronger smell appears when the same business rule must remain synchronized across several locations."})]})]}),e.jsxs("div",{className:"exampleGrid duplicateExample",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Repeated rule"}),e.jsx("pre",{children:e.jsx("code",{children:`function invoiceTotal(price) {
  return price + price * 0.18;
}

function checkoutTotal(price) {
  return price + price * 0.18;
}`})})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Shared knowledge"}),e.jsx("pre",{children:e.jsx("code",{children:`const TAX_RATE = 0.18;

function calculateTotal(price) {
  return price + price * TAX_RATE;
}`})})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Feature Envy"}),e.jsx("h2",{children:"Behavior often belongs near the data it understands deeply"})]}),e.jsxs("div",{className:"exampleGrid",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Outside logic knows too much"}),e.jsx("pre",{children:e.jsx("code",{children:`function calculateOrderTotal(order) {
  return order.items.reduce(
    (total, item) =>
      total +
      item.price *
        item.quantity *
        (1 - item.discount),
    0,
  );
}`})})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Responsibility closer to concept"}),e.jsx("pre",{children:e.jsx("code",{children:`class Order {
  calculateTotal() {
    return this.items.reduce(
      (total, item) =>
        total + item.totalPrice(),
      0,
    );
  }
}`})}),e.jsx("p",{children:"If the order owns pricing behavior, keeping that knowledge close to the order can improve cohesion."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Primitive Obsession"}),e.jsx("h2",{children:"Important concepts can deserve meaningful types or objects"})]}),e.jsxs("div",{className:"exampleGrid",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Primitive everywhere"}),e.jsx("pre",{children:e.jsx("code",{children:`function pay(
  amount,
  currency,
  cardNumber,
  expiryMonth,
  expiryYear,
) {}`})})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Concepts grouped"}),e.jsx("pre",{children:e.jsx("code",{children:`function pay(
  money,
  paymentMethod,
) {}

const money = {
  amount: 1200,
  currency: "INR",
};

const paymentMethod = {
  cardNumber,
  expiryMonth,
  expiryYear,
};`})})]})]}),e.jsxs("div",{className:"noteBox",children:[e.jsx(t,{}),e.jsxs("div",{children:[e.jsx("h3",{children:"Do not wrap every primitive automatically."}),e.jsx("p",{children:"Introduce a richer concept when values have shared rules, behavior, validation, or meaning that appears repeatedly in the domain."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Boolean Flags"}),e.jsx("h2",{children:"A mode flag can hide multiple functions inside one function"})]}),e.jsxs("div",{className:"exampleGrid",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Flag changes responsibility"}),e.jsx("pre",{children:e.jsx("code",{children:`function saveUser(user, sendEmail) {
  save(user);

  if (sendEmail) {
    sendWelcomeEmail(user);
  }
}

saveUser(user, true);`})})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Explicit operations"}),e.jsx("pre",{children:e.jsx("code",{children:`function saveUser(user) {
  return save(user);
}

function registerUser(user) {
  const savedUser = saveUser(user);

  sendWelcomeEmail(savedUser);

  return savedUser;
}`})})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Shotgun Surgery"}),e.jsx("h2",{children:"One requirement should not require unrelated edits everywhere"})]}),e.jsxs("div",{className:"shotgunBox",children:[e.jsx("div",{children:e.jsx("span",{children:"Pricing change"})}),e.jsx(l,{}),e.jsxs("div",{className:"fileList",children:[e.jsx("span",{children:"checkout.js"}),e.jsx("span",{children:"invoice.js"}),e.jsx("span",{children:"report.js"}),e.jsx("span",{children:"email.js"}),e.jsx("span",{children:"admin.js"})]})]}),e.jsx("p",{className:"sectionNote",children:"When one rule change repeatedly touches many locations, the knowledge may need a clearer source of truth or stronger boundary."})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Dead Code"}),e.jsx("h2",{children:"Version control is usually a better archive than source comments"})]}),e.jsxs("div",{className:"deadCodeBox",children:[e.jsx(o,{}),e.jsxs("div",{children:[e.jsx("h3",{children:"Remove code that no longer participates in the application."}),e.jsx("p",{children:"Dead branches, unused helpers, obsolete feature code, and large commented-out blocks increase the amount of code developers must consider even though they provide no current behavior."})]})]}),e.jsxs("div",{className:"exampleGrid deadExample",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Dead code retained"}),e.jsx("pre",{children:e.jsx("code",{children:`// Old implementation.
// Keep in case we need it later.
//
// function calculateOldPrice() {
//   ...
// }`})})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Current code only"}),e.jsx("pre",{children:e.jsx("code",{children:`function calculatePrice(order) {
  return pricingService.calculate(order);
}`})}),e.jsx("p",{children:"Previous implementations can normally be recovered from version history if they are genuinely needed again."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Speculative Generality"}),e.jsx("h2",{children:"Unused flexibility is still complexity"})]}),e.jsxs("div",{className:"exampleGrid",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Built for imaginary variants"}),e.jsx("pre",{children:e.jsx("code",{children:`class StorageFactory {
  create(type) {
    if (type === "mongo") {}
    if (type === "postgres") {}
    if (type === "mysql") {}
    if (type === "memory") {}
    if (type === "file") {}
  }
}`})}),e.jsx("p",{children:"If only one storage implementation exists and no requirement for alternatives exists, the abstraction may be speculative."})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Current requirement"}),e.jsx("pre",{children:e.jsx("code",{children:`const userRepository =
  createMongoUserRepository();`})}),e.jsx("p",{children:"A broader abstraction can be introduced when a real requirement provides evidence for it."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Comments as Deodorant"}),e.jsx("h2",{children:"Do not use comments only to make confusing code tolerable"})]}),e.jsxs("div",{className:"exampleGrid",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Comment explains unclear code"}),e.jsx("pre",{children:e.jsx("code",{children:`// If user is active admin and has edit
// permission then allow editing.
if (
  u.a &&
  u.r === "admin" &&
  u.p.includes("edit")
) {
  return true;
}`})})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Code communicates intent"}),e.jsx("pre",{children:e.jsx("code",{children:`function canEditContent(user) {
  return (
    user.isActive &&
    user.role === "admin" &&
    user.permissions.includes("edit")
  );
}`})})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Smell to Refactoring"}),e.jsx("h2",{children:"Possible responses depend on the underlying cause"})]}),e.jsxs("div",{className:"mapping",children:[e.jsxs("article",{children:[e.jsx("strong",{children:"Long Function"}),e.jsx(s,{}),e.jsx("span",{children:"Extract focused functions"})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Large Module"}),e.jsx(s,{}),e.jsx("span",{children:"Separate responsibilities"})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Duplicate Knowledge"}),e.jsx(s,{}),e.jsx("span",{children:"Introduce a shared source of truth"})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Feature Envy"}),e.jsx(s,{}),e.jsx("span",{children:"Move behavior closer to its data"})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Primitive Obsession"}),e.jsx(s,{}),e.jsx("span",{children:"Introduce a meaningful domain concept"})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Boolean Flag"}),e.jsx(s,{}),e.jsx("span",{children:"Split distinct operations"})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Shotgun Surgery"}),e.jsx(s,{}),e.jsx("span",{children:"Centralize scattered knowledge"})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Dead Code"}),e.jsx(s,{}),e.jsx("span",{children:"Delete obsolete implementation"})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Speculative Generality"}),e.jsx(s,{}),e.jsx("span",{children:"Remove unused abstractions"})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Comment Deodorant"}),e.jsx(s,{}),e.jsx("span",{children:"Improve naming and structure"})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Important"}),e.jsx("h2",{children:"Do not refactor based on smell names alone"})]}),e.jsxs("div",{className:"warningBox",children:[e.jsx("div",{className:"warningIcon",children:e.jsx(i,{})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Context determines whether a smell is actually harmful."}),e.jsx("p",{children:"A long function can sometimes be easier to understand than many tiny functions. Duplication can sometimes be safer than premature abstraction. A large module can be cohesive if all of its behavior represents one concept. Investigate before changing."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Review Checklist"}),e.jsx("h2",{children:"Questions to ask when investigating a smell"})]}),e.jsxs("div",{className:"checklist",children:[e.jsxs("article",{children:[e.jsx("strong",{children:"What maintenance problem does this create?"}),e.jsx("p",{children:"Identify the real cost instead of refactoring only because a pattern has a smell name."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Does this code change for multiple reasons?"}),e.jsx("p",{children:"Mixed change pressure can reveal weak responsibility boundaries."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Is knowledge duplicated or only syntax?"}),e.jsx("p",{children:"Similar-looking code does not always represent the same concept."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Is another module better suited to this behavior?"}),e.jsx("p",{children:"Keep responsibilities near the data and knowledge they require."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Is this abstraction used by real requirements?"}),e.jsx("p",{children:"Remove speculative complexity that provides no current value."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Can obsolete code simply be deleted?"}),e.jsx("p",{children:"Source control already preserves previous implementations."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Would clearer naming remove the need for comments?"}),e.jsx("p",{children:"Comments should add context rather than compensate for unclear code."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Will the refactoring actually make change easier?"}),e.jsx("p",{children:"The goal is maintainability, not maximizing abstraction."})]})]})]}),e.jsxs("section",{className:"takeaway",children:[e.jsx("span",{className:"sectionLabel",children:"Key Takeaway"}),e.jsx("h2",{children:"Code smells are prompts to investigate, not automatic failures."}),e.jsx("p",{children:"Use smells to identify areas where responsibilities, dependencies, abstractions, or naming may have become difficult to maintain. Understand the underlying cause first, then apply the smallest useful refactoring that improves the code."})]})]});export{x as default};
