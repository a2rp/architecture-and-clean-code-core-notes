import{j as e,w as n,l as r,F as a,d as c,n as s,c as i}from"./index-DI9hzuIs.js";const l={},h=()=>e.jsxs("div",{className:`${l.scope} pageCompositionOverInheritance`,children:[e.jsxs("header",{className:"pageHeader",children:[e.jsxs("div",{className:"label",children:[e.jsx(n,{}),e.jsx("span",{children:"Design Principle"})]}),e.jsx("h1",{children:"Composition over Inheritance"}),e.jsx("p",{children:"Composition over Inheritance encourages building behavior by combining smaller focused parts instead of creating deep inheritance hierarchies. Composition often provides clearer dependencies and more flexible behavior."})]}),e.jsxs("section",{className:"introGrid",children:[e.jsxs("article",{children:[e.jsx(r,{}),e.jsx("h2",{children:"Combine focused behavior"}),e.jsx("p",{children:"Small responsibilities can be composed together to create richer behavior without forcing every variation into one class hierarchy."})]}),e.jsxs("article",{children:[e.jsx(a,{}),e.jsx("h2",{children:"Avoid rigid inheritance trees"}),e.jsx("p",{children:"Deep inheritance can make behavior depend on several parent classes and make changes harder to reason about."})]}),e.jsxs("article",{children:[e.jsx(c,{}),e.jsx("h2",{children:"Make dependencies explicit"}),e.jsx("p",{children:"Composition usually shows which capabilities an object uses instead of receiving behavior indirectly through ancestry."})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Core Idea"}),e.jsx("h2",{children:"Build complex behavior from smaller responsibilities"}),e.jsx("p",{children:'Inheritance models an "is-a" relationship. Composition models a "has-a" or "uses-a" relationship. Many application behaviors fit composition more naturally because they combine several independent capabilities.'})]}),e.jsxs("div",{className:"compareGrid",children:[e.jsxs("article",{children:[e.jsx(s,{}),e.jsx("h3",{children:"Inheritance"}),e.jsx("pre",{children:e.jsx("code",{children:`class Employee {
  work() {}
}

class Manager extends Employee {
  approveBudget() {}
}

class TechnicalManager extends Manager {
  writeCode() {}
}`})}),e.jsx("p",{children:"Behavior is inherited through a hierarchy. A child receives the assumptions and responsibilities of every parent above it."})]}),e.jsxs("article",{children:[e.jsx(i,{}),e.jsx("h3",{children:"Composition"}),e.jsx("pre",{children:e.jsx("code",{children:`const technicalManager = {
  work: workBehavior,
  approveBudget: budgetBehavior,
  writeCode: codingBehavior,
};`})}),e.jsx("p",{children:"Capabilities are combined directly according to what the object actually needs."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Inheritance Risks"}),e.jsx("h2",{children:"Deep hierarchies can create hidden coupling"})]}),e.jsxs("div",{className:"riskGrid",children:[e.jsxs("article",{children:[e.jsx("span",{children:"01"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Parent changes affect descendants"}),e.jsx("p",{children:"A modification to a base class can unexpectedly alter behavior in several subclasses."})]})]}),e.jsxs("article",{children:[e.jsx("span",{children:"02"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Children inherit unnecessary behavior"}),e.jsx("p",{children:"A subclass may receive methods or assumptions that do not fit its actual responsibility."})]})]}),e.jsxs("article",{children:[e.jsx("span",{children:"03"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Behavior can become difficult to trace"}),e.jsx("p",{children:"Understanding one method may require inspecting multiple levels of inheritance."})]})]}),e.jsxs("article",{children:[e.jsx("span",{children:"04"}),e.jsxs("div",{children:[e.jsx("h3",{children:"New combinations become awkward"}),e.jsx("p",{children:"A hierarchy often struggles when a new type needs behavior from different branches."})]})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Composition Example"}),e.jsx("h2",{children:"Inject capabilities instead of inheriting them"})]}),e.jsxs("div",{className:"exampleGrid",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Inheritance-based design"}),e.jsx("pre",{children:e.jsx("code",{children:`class FileLogger extends Logger {
  write(message) {
    // File implementation
  }
}

class UserService extends FileLogger {
  createUser(user) {
    this.write("User created");
  }
}`})}),e.jsx("p",{children:"`UserService` becomes a kind of logger even though logging is only one dependency it uses."})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Composition-based design"}),e.jsx("pre",{children:e.jsx("code",{children:`class UserService {
  constructor(logger) {
    this.logger = logger;
  }

  createUser(user) {
    this.logger.write("User created");
  }
}`})}),e.jsx("p",{children:"Logging is an explicit dependency and can be replaced without changing what `UserService` represents."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Behavior Composition"}),e.jsx("h2",{children:"Small capabilities can create several useful combinations"})]}),e.jsxs("div",{className:"behaviorBox",children:[e.jsx("pre",{children:e.jsx("code",{children:`const canRead = {
  read() {
    return "Reading";
  },
};

const canWrite = {
  write() {
    return "Writing";
  },
};

const canShare = {
  share() {
    return "Sharing";
  },
};

const viewer = {
  ...canRead,
};

const editor = {
  ...canRead,
  ...canWrite,
};

const owner = {
  ...canRead,
  ...canWrite,
  ...canShare,
};`})}),e.jsxs("div",{className:"behaviorText",children:[e.jsx("h3",{children:"Capabilities remain independent."}),e.jsx("p",{children:"Different objects can receive the exact combination of behavior they need without creating a subclass for every possible variation."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"React"}),e.jsx("h2",{children:"React naturally favors composition"}),e.jsx("p",{children:"React components commonly build larger interfaces by combining smaller components through props and children rather than using component inheritance."})]}),e.jsxs("div",{className:"exampleGrid",children:[e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Reusable shell"}),e.jsx("pre",{children:e.jsx("code",{children:`const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};`})})]}),e.jsxs("article",{children:[e.jsx("span",{className:"exampleLabel",children:"Composed content"}),e.jsx("pre",{children:e.jsx("code",{children:`<Card>
  <UserAvatar />
  <UserName />
  <UserActions />
</Card>`})}),e.jsx("p",{children:"The card provides structure while separate components provide the behavior and content needed by a specific use case."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"When Inheritance Fits"}),e.jsx("h2",{children:"Inheritance is not automatically wrong"})]}),e.jsxs("div",{className:"noteBox",children:[e.jsx(i,{}),e.jsxs("div",{children:[e.jsx("h3",{children:"Use inheritance when the relationship is genuinely stable."}),e.jsx("p",{children:"Inheritance can be appropriate when a subtype truly satisfies the contract of its parent and the hierarchy represents a meaningful domain relationship rather than a shortcut for code reuse."})]})]}),e.jsxs("div",{className:"fitGrid",children:[e.jsxs("article",{children:[e.jsx("strong",{children:"Reasonable inheritance"}),e.jsx("p",{children:"A specialized type genuinely behaves as the parent type and can safely be substituted wherever the parent is expected."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Prefer composition"}),e.jsx("p",{children:"The object only needs one capability from another type or needs a combination of several independent behaviors."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Reasonable inheritance"}),e.jsx("p",{children:"The hierarchy is shallow, stable, and communicates an obvious domain relationship."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Prefer composition"}),e.jsx("p",{children:"New requirements frequently require mixing capabilities that do not fit one inheritance branch."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Warning Signs"}),e.jsx("h2",{children:"Signals that inheritance may be doing too much"})]}),e.jsxs("div",{className:"warningGrid",children:[e.jsxs("article",{children:[e.jsx(s,{}),e.jsx("h3",{children:"Deep hierarchy"}),e.jsx("p",{children:"Understanding a class requires reading several parent classes."})]}),e.jsxs("article",{children:[e.jsx(s,{}),e.jsx("h3",{children:"Empty overrides"}),e.jsx("p",{children:"Subclasses repeatedly disable methods that do not apply to them."})]}),e.jsxs("article",{children:[e.jsx(s,{}),e.jsx("h3",{children:"Behavioral flags"}),e.jsx("p",{children:"Parent classes contain conditionals to handle many different subclass variations."})]}),e.jsxs("article",{children:[e.jsx(s,{}),e.jsx("h3",{children:"Forced relationships"}),e.jsx("p",{children:"Inheritance exists mainly to reuse code rather than because the child truly represents the parent type."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("span",{className:"sectionLabel",children:"Review Checklist"}),e.jsx("h2",{children:"Questions to ask before choosing inheritance"})]}),e.jsxs("div",{className:"checklist",children:[e.jsxs("article",{children:[e.jsx("strong",{children:'Is this genuinely an "is-a" relationship?'}),e.jsx("p",{children:"The child should represent the parent concept rather than simply reuse some of its code."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Can the subtype safely replace the parent?"}),e.jsx("p",{children:"If callers must treat the child differently, the hierarchy may be incorrect."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Does the child need all inherited behavior?"}),e.jsx("p",{children:"Unused or invalid parent methods indicate a weak relationship."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Could this behavior be injected or composed instead?"}),e.jsx("p",{children:"A focused dependency may communicate the relationship more clearly."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Will new combinations fit the hierarchy?"}),e.jsx("p",{children:"Composition usually handles independent capabilities more flexibly."})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Is inheritance being used only for code reuse?"}),e.jsx("p",{children:"Shared code alone is not enough reason to create a type relationship."})]})]})]}),e.jsxs("section",{className:"takeaway",children:[e.jsx("span",{className:"sectionLabel",children:"Key Takeaway"}),e.jsx("h2",{children:"Prefer combining focused capabilities over building rigid hierarchies."}),e.jsx("p",{children:"Composition keeps dependencies explicit and allows behavior to be combined according to real needs. Use inheritance when it represents a genuine substitutable type relationship, not simply as a shortcut for reuse."})]})]});export{h as default};
