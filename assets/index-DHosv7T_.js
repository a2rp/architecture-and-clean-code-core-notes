import{j as e,k as n,c as s,t as a,e as r,n as i,T as c}from"./index-DI9hzuIs.js";const t={},d=()=>e.jsxs("div",{className:`${t.scope} pageRefactoring`,children:[e.jsxs("header",{className:"pageHeader",children:[e.jsxs("div",{className:"label",children:[e.jsx(n,{}),e.jsx("span",{children:"Code Quality"})]}),e.jsx("h1",{children:"Refactoring"}),e.jsx("p",{children:"Refactoring means improving the internal structure of existing code without intentionally changing its observable behavior. The goal is to make future development safer, clearer, and easier while preserving what the software already does."})]}),e.jsxs("section",{className:"introGrid",children:[e.jsxs("article",{children:[e.jsx(s,{}),e.jsx("h2",{children:"Preserve behavior"}),e.jsx("p",{children:"Refactoring changes how code is organized, not what the user should experience from the same inputs and workflows."})]}),e.jsxs("article",{children:[e.jsx(a,{}),e.jsx("h2",{children:"Prefer incremental changes"}),e.jsx("p",{children:"Small transformations are easier to review, test, understand, and reverse than one large uncontrolled rewrite."})]}),e.jsxs("article",{children:[e.jsx(r,{}),e.jsx("h2",{children:"Improve future changeability"}),e.jsx("p",{children:"Good refactoring reduces duplication, unclear responsibilities, unnecessary coupling, and other sources of maintenance friction."})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Core Idea"}),e.jsx("h2",{children:"Change the structure while preserving the behavior"}),e.jsx("p",{children:"Refactoring is different from adding a feature. Ideally, the same input continues to produce the same expected result while the internal implementation becomes easier to understand or maintain."})]}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("article",{children:[e.jsx(s,{}),e.jsx("h3",{children:"Refactoring"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Rename unclear identifiers."}),e.jsx("li",{children:"Extract focused functions."}),e.jsx("li",{children:"Move responsibilities to better modules."}),e.jsx("li",{children:"Simplify conditionals."}),e.jsx("li",{children:"Reduce meaningful duplication."}),e.jsx("li",{children:"Improve dependency boundaries."})]})]}),e.jsxs("article",{children:[e.jsx(i,{}),e.jsx("h3",{children:"Not purely refactoring"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Add a new user-facing feature."}),e.jsx("li",{children:"Change business behavior."}),e.jsx("li",{children:"Alter validation requirements."}),e.jsx("li",{children:"Change API contracts intentionally."}),e.jsx("li",{children:"Remove supported workflows."}),e.jsx("li",{children:"Change outputs because requirements changed."})]})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"When to Refactor"}),e.jsx("h2",{children:"Refactor when structure is slowing down safe change"})]}),e.jsxs("div",{className:"signalGrid",children:[e.jsxs("article",{children:[e.jsx("strong",{children:"Changes repeatedly touch many unrelated files"}),e.jsx("p",{children:"Responsibilities or dependencies may be spread across weak boundaries."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"The same rule is duplicated"}),e.jsx("p",{children:"Repeated knowledge can create inconsistent future updates."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Code requires constant explanation"}),e.jsx("p",{children:"Naming, structure, or responsibility boundaries may need improvement."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Testing simple behavior is difficult"}),e.jsx("p",{children:"Too many dependencies or mixed responsibilities can make isolated tests expensive."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"A new change feels risky"}),e.jsx("p",{children:"Improving the surrounding structure first can make the real modification safer."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"A pattern has become clear"}),e.jsx("p",{children:"Repeated real usage can justify an abstraction that was previously premature."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Rename"}),e.jsx("h2",{children:"Improving a name can be a meaningful refactor"}),e.jsx("p",{children:"Renaming is valuable when the current name no longer communicates the real responsibility or domain concept."})]}),e.jsxs("div",{className:"exampleGrid",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Before"}),e.jsx("pre",{children:e.jsx("code",{children:`function process(data) {
  return data.filter(
    (item) => item.s,
  );
}`})})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"After"}),e.jsx("pre",{children:e.jsx("code",{children:`function getShippedOrders(orders) {
  return orders.filter(
    (order) => order.isShipped,
  );
}`})}),e.jsx("p",{children:"The behavior is essentially the same, but the responsibility is much easier to understand."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Extract Function"}),e.jsx("h2",{children:"Turn a meaningful block into a named operation"})]}),e.jsxs("div",{className:"exampleGrid",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Before extraction"}),e.jsx("pre",{children:e.jsx("code",{children:`function checkout(cart) {
  const subtotal = cart.items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0,
  );

  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  return {
    subtotal,
    tax,
    total,
  };
}`})})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"After extraction"}),e.jsx("pre",{children:e.jsx("code",{children:`function calculateSubtotal(items) {
  return items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0,
  );
}

function calculateTax(subtotal) {
  return subtotal * 0.18;
}

function checkout(cart) {
  const subtotal =
    calculateSubtotal(cart.items);

  const tax = calculateTax(subtotal);

  return {
    subtotal,
    tax,
    total: subtotal + tax,
  };
}`})})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Move Responsibility"}),e.jsx("h2",{children:"Put behavior where its knowledge belongs"}),e.jsx("p",{children:"Refactoring often involves moving logic out of a component, service, or utility that has accumulated responsibilities belonging to another concept."})]}),e.jsxs("div",{className:"moveBox",children:[e.jsxs("div",{className:"moveColumn",children:[e.jsx("span",{className:"moveLabel",children:"Before"}),e.jsx("pre",{children:e.jsx("code",{children:`UserPage
├── render UI
├── validate user
├── call API
├── format payload
└── handle persistence`})})]}),e.jsx("div",{className:"moveArrow",children:e.jsx(r,{})}),e.jsxs("div",{className:"moveColumn",children:[e.jsx("span",{className:"moveLabel",children:"After"}),e.jsx("pre",{children:e.jsx("code",{children:`UserPage
└── coordinate UI

userValidator
└── validate user

userService
└── call API

userMapper
└── format payload`})})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Conditionals"}),e.jsx("h2",{children:"Simplify branching without hiding important rules"})]}),e.jsxs("div",{className:"exampleGrid",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Complex condition"}),e.jsx("pre",{children:e.jsx("code",{children:`if (
  user &&
  user.active === true &&
  user.role === "admin" &&
  user.permissions.includes("edit")
) {
  showEditor();
}`})})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Named decision"}),e.jsx("pre",{children:e.jsx("code",{children:`function canEditContent(user) {
  return (
    user?.active &&
    user.role === "admin" &&
    user.permissions.includes("edit")
  );
}

if (canEditContent(user)) {
  showEditor();
}`})}),e.jsx("p",{children:"The condition now communicates the business meaning behind the individual checks."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Dependency Cleanup"}),e.jsx("h2",{children:"Reduce unnecessary knowledge between modules"})]}),e.jsxs("div",{className:"exampleGrid",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Direct infrastructure dependency"}),e.jsx("pre",{children:e.jsx("code",{children:`class OrderService {
  async create(order) {
    const database =
      new MongoClient(connectionString);

    await database
      .db("shop")
      .collection("orders")
      .insertOne(order);
  }
}`})})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Focused dependency"}),e.jsx("pre",{children:e.jsx("code",{children:`class OrderService {
  constructor(orderRepository) {
    this.orderRepository =
      orderRepository;
  }

  async create(order) {
    return this.orderRepository.create(
      order,
    );
  }
}`})}),e.jsx("p",{children:"Application behavior no longer needs to manage low-level database setup directly."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Incremental Refactoring"}),e.jsx("h2",{children:"Prefer a series of safe changes over one large transformation"})]}),e.jsxs("div",{className:"steps",children:[e.jsxs("article",{children:[e.jsx("span",{children:"01"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Understand current behavior"}),e.jsx("p",{children:"Identify what the code currently guarantees before changing its structure."})]})]}),e.jsxs("article",{children:[e.jsx("span",{children:"02"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Create a safety net"}),e.jsx("p",{children:"Use existing tests, add focused tests where useful, or verify important behavior manually."})]})]}),e.jsxs("article",{children:[e.jsx("span",{children:"03"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Make one small structural change"}),e.jsx("p",{children:"Rename, extract, move, or simplify one responsibility at a time."})]})]}),e.jsxs("article",{children:[e.jsx("span",{children:"04"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Verify behavior"}),e.jsx("p",{children:"Confirm that the software still behaves as expected before continuing."})]})]}),e.jsxs("article",{children:[e.jsx("span",{children:"05"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Repeat"}),e.jsx("p",{children:"Continue in small steps until the targeted structural problem is resolved."})]})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Refactoring vs Rewriting"}),e.jsx("h2",{children:"Improving existing code is different from replacing it"})]}),e.jsxs("div",{className:"rewriteGrid",children:[e.jsxs("article",{children:[e.jsx(s,{}),e.jsx("h3",{children:"Refactoring"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Usually incremental"}),e.jsx("li",{children:"Preserves behavior"}),e.jsx("li",{children:"Existing knowledge stays available"}),e.jsx("li",{children:"Risk can be controlled in small steps"}),e.jsx("li",{children:"Can happen continuously"})]})]}),e.jsxs("article",{children:[e.jsx(i,{}),e.jsx("h3",{children:"Rewrite"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Replaces a substantial implementation"}),e.jsx("li",{children:"May recreate solved problems"}),e.jsx("li",{children:"Requires rediscovering edge cases"}),e.jsx("li",{children:"Often has a larger validation surface"}),e.jsx("li",{children:"Can create long parallel-development periods"})]})]})]}),e.jsxs("div",{className:"warningBox",children:[e.jsx("div",{className:"warningIcon",children:e.jsx(i,{})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Do not rewrite only because existing code looks old."}),e.jsx("p",{children:"A rewrite can be justified when the current architecture cannot reasonably support required change, but it carries different risks from incremental refactoring. Evaluate those tradeoffs deliberately."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Tests"}),e.jsx("h2",{children:"Tests can provide confidence that behavior remains stable"})]}),e.jsxs("div",{className:"testBox",children:[e.jsx(s,{}),e.jsxs("div",{children:[e.jsx("h3",{children:"Refactoring becomes safer when important behavior is observable."}),e.jsx("p",{children:"Tests are especially useful around business rules, transformations, calculations, public contracts, and areas being changed structurally."})]})]}),e.jsxs("div",{className:"testGrid",children:[e.jsxs("article",{children:[e.jsx("strong",{children:"Before refactoring"}),e.jsx("p",{children:"Confirm that existing tests pass and understand what behavior they protect."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"During refactoring"}),e.jsx("p",{children:"Run focused tests after small structural changes."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"After refactoring"}),e.jsx("p",{children:"Run the broader relevant test suite and verify important user workflows."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Avoid Over-Refactoring"}),e.jsx("h2",{children:"Do not redesign stable code without a useful reason"})]}),e.jsxs("div",{className:"warningBox",children:[e.jsx("div",{className:"warningIcon",children:e.jsx(c,{})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Improvement should solve an actual maintenance problem."}),e.jsx("p",{children:"Repeatedly restructuring working code without a clear benefit can create churn, merge conflicts, new defects, and unnecessary review cost."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Review Checklist"}),e.jsx("h2",{children:"Questions to ask before and during refactoring"})]}),e.jsxs("div",{className:"checklist",children:[e.jsxs("article",{children:[e.jsx("strong",{children:"What structural problem am I solving?"}),e.jsx("p",{children:"Refactoring should have a clear maintainability or design goal."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Do I understand the current behavior?"}),e.jsx("p",{children:"Preserve behavior intentionally rather than assuming what the code does."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Can the change be made in smaller steps?"}),e.jsx("p",{children:"Incremental transformations usually reduce risk."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Is there a useful safety net?"}),e.jsx("p",{children:"Tests or deliberate verification help detect unintended behavior changes."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Does the result become easier to understand?"}),e.jsx("p",{children:"Refactoring should reduce complexity rather than simply move it."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Am I introducing unnecessary abstraction?"}),e.jsx("p",{children:"Structural improvement does not require maximizing the number of layers."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Would a rewrite actually be justified?"}),e.jsx("p",{children:"Do not discard working behavior without understanding the cost and risk."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Did observable behavior remain correct?"}),e.jsx("p",{children:"Verify the software after completing structural changes."})]})]})]}),e.jsxs("section",{className:"takeaway",children:[e.jsx("span",{className:"sectionLabel",children:"Key Takeaway"}),e.jsx("h2",{children:"Improve structure in small steps while protecting behavior."}),e.jsx("p",{children:"Effective refactoring makes future changes easier without introducing unnecessary product changes. Understand existing behavior, make focused structural improvements, verify continuously, and stop when the code is clear enough for the real needs of the system."})]})]});export{d as default};
