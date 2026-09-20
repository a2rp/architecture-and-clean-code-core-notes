import{j as e,q as i,c as n,J as r,k as a,n as s,e as t}from"./index-C8kppKFR.js";const c={},d=()=>e.jsxs("div",{className:`${c.scope} pageFunctions`,children:[e.jsxs("header",{className:"pageHeader",children:[e.jsxs("div",{className:"label",children:[e.jsx(i,{}),e.jsx("span",{children:"Code Quality"})]}),e.jsx("h1",{children:"Functions"}),e.jsx("p",{children:"Functions are one of the primary units of behavior in software. Well-designed functions communicate intent, keep responsibilities focused, make data flow easier to follow, and reduce the amount of context a developer must hold while reading code."})]}),e.jsxs("section",{className:"introGrid",children:[e.jsxs("article",{children:[e.jsx(n,{}),e.jsx("h2",{children:"Keep one clear responsibility"}),e.jsx("p",{children:"A function should have a focused purpose that can be understood without reading several unrelated operations."})]}),e.jsxs("article",{children:[e.jsx(r,{}),e.jsx("h2",{children:"Make data flow visible"}),e.jsx("p",{children:"Parameters and return values should make it clear what information enters a function and what result leaves it."})]}),e.jsxs("article",{children:[e.jsx(a,{}),e.jsx("h2",{children:"Control side effects"}),e.jsx("p",{children:"State changes, network requests, storage updates, and other effects should be deliberate and easy to identify."})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Focused Functions"}),e.jsx("h2",{children:"Give each function one clear reason to exist"}),e.jsx("p",{children:"Function size alone does not determine quality. A better question is whether all operations inside the function contribute to one understandable responsibility."})]}),e.jsxs("div",{className:"exampleGrid",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Too many responsibilities"}),e.jsx("pre",{children:e.jsx("code",{children:`async function createUser(user) {
  validateUser(user);

  const savedUser = await database.users.create(user);

  await sendWelcomeEmail(savedUser.email);

  analytics.track("user_created");

  localStorage.setItem(
    "lastUser",
    JSON.stringify(savedUser),
  );

  return savedUser;
}`})}),e.jsx("p",{children:"Validation, persistence, email delivery, analytics, and browser storage are all coordinated inside one function."})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Separated responsibilities"}),e.jsx("pre",{children:e.jsx("code",{children:`async function createUser(user) {
  validateUser(user);

  return userRepository.create(user);
}

async function registerUser(user) {
  const createdUser = await createUser(user);

  await sendWelcomeEmail(createdUser.email);

  trackUserCreated(createdUser);

  return createdUser;
}`})}),e.jsx("p",{children:"Lower-level behavior remains focused while orchestration is kept explicit at a higher level."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Parameters"}),e.jsx("h2",{children:"Keep function inputs understandable"}),e.jsx("p",{children:"Parameters are part of a function's public contract. Too many unrelated parameters often indicate that the function is doing too much or that related values belong together."})]}),e.jsxs("div",{className:"exampleGrid",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Difficult call site"}),e.jsx("pre",{children:e.jsx("code",{children:`createUser(
  "Ashish",
  "ash@example.com",
  true,
  "admin",
  false,
  "IN",
  "Asia/Kolkata",
);`})}),e.jsx("p",{children:"Several positional values make it difficult to understand what each argument means."})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Named input"}),e.jsx("pre",{children:e.jsx("code",{children:`createUser({
  name: "Ashish",
  email: "ash@example.com",
  isActive: true,
  role: "admin",
  country: "IN",
  timezone: "Asia/Kolkata",
});`})}),e.jsx("p",{children:"An options object can make related inputs easier to understand when a function genuinely requires several values."})]})]}),e.jsxs("div",{className:"parameterRules",children:[e.jsxs("article",{children:[e.jsx("strong",{children:"Prefer fewer inputs"}),e.jsx("p",{children:"A small parameter list usually creates a simpler contract."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Group related values"}),e.jsx("p",{children:"Use meaningful objects when several values represent one concept."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Avoid boolean traps"}),e.jsx("p",{children:"Calls such as `createUser(data, true, false)` hide intent."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Do not mutate inputs unexpectedly"}),e.jsx("p",{children:"Callers should not need to inspect a function to discover that their object will be modified."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Return Values"}),e.jsx("h2",{children:"Return predictable results"}),e.jsx("p",{children:"A function becomes easier to use when its return contract is consistent across successful execution paths."})]}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("article",{children:[e.jsx(s,{}),e.jsx("h3",{children:"Inconsistent result"}),e.jsx("pre",{children:e.jsx("code",{children:`function findUser(id) {
  const user = users.find(
    (item) => item.id === id,
  );

  if (!user) {
    return false;
  }

  return user;
}`})}),e.jsx("p",{children:"Consumers now need to understand two unrelated result types."})]}),e.jsxs("article",{children:[e.jsx(n,{}),e.jsx("h3",{children:"Consistent contract"}),e.jsx("pre",{children:e.jsx("code",{children:`function findUser(id) {
  return (
    users.find(
      (user) => user.id === id,
    ) ?? null
  );
}`})}),e.jsx("p",{children:"The function returns either the expected entity or an explicit absence value."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Side Effects"}),e.jsx("h2",{children:"Make external changes deliberate"}),e.jsx("p",{children:"A side effect occurs when a function changes something outside its local scope or interacts with an external system."})]}),e.jsxs("div",{className:"effectGrid",children:[e.jsx("article",{children:e.jsx("span",{children:"Database writes"})}),e.jsx("article",{children:e.jsx("span",{children:"Network requests"})}),e.jsx("article",{children:e.jsx("span",{children:"File operations"})}),e.jsx("article",{children:e.jsx("span",{children:"DOM changes"})}),e.jsx("article",{children:e.jsx("span",{children:"Global state updates"})}),e.jsx("article",{children:e.jsx("span",{children:"Notifications"})})]}),e.jsxs("div",{className:"exampleGrid effectExample",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Hidden side effect"}),e.jsx("pre",{children:e.jsx("code",{children:`function calculateTotal(cart) {
  const total = cart.items.reduce(
    (sum, item) => sum + item.price,
    0,
  );

  localStorage.setItem("total", total);

  return total;
}`})})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Separated behavior"}),e.jsx("pre",{children:e.jsx("code",{children:`function calculateTotal(cart) {
  return cart.items.reduce(
    (sum, item) => sum + item.price,
    0,
  );
}

const total = calculateTotal(cart);

saveCartTotal(total);`})})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Command Query Separation"}),e.jsx("h2",{children:"Ask for information or change state"}),e.jsx("p",{children:"Command-query separation is a useful design guideline where an operation either returns information or performs a state-changing action. Keeping those intentions distinct can make behavior easier to reason about."})]}),e.jsxs("div",{className:"commandGrid",children:[e.jsxs("article",{children:[e.jsx("span",{className:"typeLabel",children:"Query"}),e.jsx("h3",{children:"Read information"}),e.jsx("pre",{children:e.jsx("code",{children:`function getCartTotal(cart) {
  return cart.items.reduce(
    (total, item) => total + item.price,
    0,
  );
}`})})]}),e.jsxs("article",{children:[e.jsx("span",{className:"typeLabel",children:"Command"}),e.jsx("h3",{children:"Change state"}),e.jsx("pre",{children:e.jsx("code",{children:`function clearCart(cart) {
  cart.items = [];
}`})})]})]}),e.jsxs("div",{className:"noteBox",children:[e.jsx(n,{}),e.jsxs("div",{children:[e.jsx("h3",{children:"Treat it as a guideline, not a mechanical rule."}),e.jsx("p",{children:"Some operations naturally perform work and return a useful result. The goal is to avoid surprising callers with hidden state changes when they appear to be simply requesting information."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Guard Clauses"}),e.jsx("h2",{children:"Handle invalid or exceptional paths early"}),e.jsx("p",{children:"Guard clauses can reduce nesting by dealing with conditions that prevent normal execution before reaching the main behavior."})]}),e.jsxs("div",{className:"exampleGrid",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Nested conditions"}),e.jsx("pre",{children:e.jsx("code",{children:`function processOrder(order) {
  if (order) {
    if (order.items.length > 0) {
      if (order.isPaid) {
        shipOrder(order);
      }
    }
  }
}`})})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Guard clauses"}),e.jsx("pre",{children:e.jsx("code",{children:`function processOrder(order) {
  if (!order) {
    return;
  }

  if (order.items.length === 0) {
    return;
  }

  if (!order.isPaid) {
    return;
  }

  shipOrder(order);
}`})})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Extraction"}),e.jsx("h2",{children:"Extract meaningful behavior, not arbitrary lines"}),e.jsx("p",{children:"Function extraction is most useful when the extracted function represents a recognizable concept or responsibility."})]}),e.jsxs("div",{className:"extractionBox",children:[e.jsx("pre",{children:e.jsx("code",{children:`function checkout(cart, customer) {
  validateCart(cart);

  const subtotal = calculateSubtotal(cart);
  const discount = calculateDiscount(customer, subtotal);
  const total = subtotal - discount;

  return createOrder({
    cart,
    customer,
    subtotal,
    discount,
    total,
  });
}`})}),e.jsxs("div",{className:"extractionText",children:[e.jsx(t,{}),e.jsx("h3",{children:"Each extracted function communicates a concept."}),e.jsx("p",{children:"The main function now reads as a sequence of meaningful operations instead of exposing every implementation detail at once."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Async Functions"}),e.jsx("h2",{children:"Keep asynchronous control flow visible"})]}),e.jsxs("div",{className:"exampleGrid",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Mixed async chain"}),e.jsx("pre",{children:e.jsx("code",{children:`function loadUser(id) {
  return fetchUser(id)
    .then((user) => {
      return fetchOrders(user.id)
        .then((orders) => {
          return {
            user,
            orders,
          };
        });
    });
}`})})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Linear async flow"}),e.jsx("pre",{children:e.jsx("code",{children:`async function loadUser(id) {
  const user = await fetchUser(id);

  const orders = await fetchOrders(
    user.id,
  );

  return {
    user,
    orders,
  };
}`})})]})]}),e.jsxs("div",{className:"asyncRules",children:[e.jsxs("article",{children:[e.jsx("strong",{children:"Await required operations"}),e.jsx("p",{children:"Make dependencies between asynchronous steps explicit."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Run independent work together"}),e.jsx("p",{children:"Use concurrency when operations do not depend on one another."}),e.jsx("pre",{children:e.jsx("code",{children:`const [user, settings] =
  await Promise.all([
    fetchUser(),
    fetchSettings(),
  ]);`})})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Handle errors at useful boundaries"}),e.jsx("p",{children:"Do not add `try/catch` everywhere when the function cannot meaningfully recover or add context."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Return the promise contract"}),e.jsx("p",{children:"Callers should be able to await completion and handle failures predictably."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Function Size"}),e.jsx("h2",{children:"Small is useful when it improves understanding"})]}),e.jsxs("div",{className:"warningBox",children:[e.jsx("div",{className:"warningIcon",children:e.jsx(s,{})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Do not optimize for line count alone."}),e.jsx("p",{children:"Splitting every few lines into separate functions can make simple behavior harder to follow. Extract when a block has its own responsibility, useful name, reuse value, or abstraction level."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Common Problems"}),e.jsx("h2",{children:"Warning signs in function design"})]}),e.jsxs("div",{className:"problemGrid",children:[e.jsxs("article",{children:[e.jsx(s,{}),e.jsx("h3",{children:"Too many parameters"}),e.jsx("p",{children:"The function may have too many responsibilities or an unclear data model."})]}),e.jsxs("article",{children:[e.jsx(s,{}),e.jsx("h3",{children:"Boolean mode flags"}),e.jsx("p",{children:"A flag that completely changes behavior can indicate multiple functions hidden inside one."})]}),e.jsxs("article",{children:[e.jsx(s,{}),e.jsx("h3",{children:"Unexpected mutation"}),e.jsx("p",{children:"Modifying arguments or shared state makes behavior harder to predict."})]}),e.jsxs("article",{children:[e.jsx(s,{}),e.jsx("h3",{children:"Mixed abstraction levels"}),e.jsx("p",{children:"High-level business steps and low-level implementation details compete for attention."})]}),e.jsxs("article",{children:[e.jsx(s,{}),e.jsx("h3",{children:"Duplicated condition logic"}),e.jsx("p",{children:"Repeated business decisions may belong in one focused operation."})]}),e.jsxs("article",{children:[e.jsx(s,{}),e.jsx("h3",{children:"Unclear return contract"}),e.jsx("p",{children:"Different branches return unrelated types or silently return nothing."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Review Checklist"}),e.jsx("h2",{children:"Questions to ask when reviewing functions"})]}),e.jsxs("div",{className:"checklist",children:[e.jsxs("article",{children:[e.jsx("strong",{children:"Does the function have a clear responsibility?"}),e.jsx("p",{children:"Its name and body should describe one understandable purpose."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Are the inputs easy to understand?"}),e.jsx("p",{children:"Parameters should communicate the data required by the behavior."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Is the return contract predictable?"}),e.jsx("p",{children:"Callers should know what kind of result to expect."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Are side effects obvious?"}),e.jsx("p",{children:"External state changes should not be surprising."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Can guard clauses simplify the main path?"}),e.jsx("p",{children:"Handle invalid conditions early when it improves readability."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Would extraction reveal useful concepts?"}),e.jsx("p",{children:"Extract behavior when a meaningful responsibility can be named."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Is asynchronous flow easy to follow?"}),e.jsx("p",{children:"Dependencies, concurrency, and failure behavior should be clear."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Is the function easy to test?"}),e.jsx("p",{children:"Focused inputs, outputs, and controlled dependencies usually make testing simpler."})]})]})]}),e.jsxs("section",{className:"takeaway",children:[e.jsx("span",{className:"sectionLabel",children:"Key Takeaway"}),e.jsx("h2",{children:"Functions should make behavior easier to understand."}),e.jsx("p",{children:"Keep responsibilities focused, make inputs and outputs clear, expose side effects deliberately, simplify exceptional paths with guard clauses where useful, and extract functions around meaningful concepts rather than arbitrary line counts."})]})]});export{d as default};
