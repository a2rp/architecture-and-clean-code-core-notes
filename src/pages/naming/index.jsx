import {
    FiAlertTriangle,
    FiCheckCircle,
    FiCode,
    FiEdit3,
    FiSearch,
    FiTarget,
} from "react-icons/fi";

import * as Styled from "./styled";

const Naming = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <div className="label">
                    <FiEdit3 />
                    <span>Code Quality</span>
                </div>

                <h1>Naming</h1>

                <p>
                    Good names communicate intent. Variables, functions,
                    components, classes, files, and modules should help a reader
                    understand what the code represents without requiring
                    unnecessary investigation.
                </p>
            </header>

            <section className="introGrid">
                <article>
                    <FiTarget />

                    <h2>Describe purpose</h2>

                    <p>
                        A useful name tells the reader why something exists
                        instead of only describing its data type or
                        implementation.
                    </p>
                </article>

                <article>
                    <FiSearch />

                    <h2>Make code searchable</h2>

                    <p>
                        Consistent and specific names make important concepts
                        easier to locate across a growing codebase.
                    </p>
                </article>

                <article>
                    <FiCode />

                    <h2>Reduce mental translation</h2>

                    <p>
                        Readers should not have to remember that `x`, `temp`, or
                        `data2` represents an important domain concept.
                    </p>
                </article>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Intent</span>

                    <h2>Names should answer what something represents</h2>

                    <p>
                        A reader should understand the role of a value or
                        operation from its name whenever practical.
                    </p>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Unclear</span>

                        <pre>
                            <code>{`const d = new Date();
const u = users.filter((x) => x.a);

function calc(a, b) {
  return a * b;
}`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Clearer</span>

                        <pre>
                            <code>{`const currentDate = new Date();

const activeUsers = users.filter(
  (user) => user.isActive,
);

function calculateTotal(price, quantity) {
  return price * quantity;
}`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Variables</span>

                    <h2>Name values according to meaning</h2>
                </div>

                <div className="ruleGrid">
                    <article>
                        <FiCheckCircle />

                        <h3>Prefer nouns for values</h3>

                        <pre>
                            <code>{`const user;
const orderTotal;
const selectedProduct;
const retryCount;`}</code>
                        </pre>
                    </article>

                    <article>
                        <FiAlertTriangle />

                        <h3>Avoid meaningless placeholders</h3>

                        <pre>
                            <code>{`const thing;
const stuff;
const temp;
const data2;`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Booleans</span>

                    <h2>Boolean names should read like a condition</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Ambiguous</span>

                        <pre>
                            <code>{`const active = true;
const admin = false;
const loading = true;`}</code>
                        </pre>

                        <p>
                            These can work in small contexts, but their meaning
                            can become unclear when passed across larger
                            components or modules.
                        </p>
                    </article>

                    <article>
                        <span className="exampleLabel">Explicit condition</span>

                        <pre>
                            <code>{`const isActive = true;
const isAdmin = false;
const isLoading = true;
const hasPermission = false;
const canEdit = true;`}</code>
                        </pre>

                        <p>
                            Prefixes such as `is`, `has`, and `can` make
                            conditional usage easier to read.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Functions</span>

                    <h2>Function names should describe actions</h2>
                </div>

                <div className="functionGrid">
                    <article>
                        <strong>Use verbs for behavior</strong>

                        <div className="nameList">
                            <span>createUser</span>
                            <span>calculateTotal</span>
                            <span>sendNotification</span>
                            <span>validateOrder</span>
                            <span>formatCurrency</span>
                            <span>fetchProducts</span>
                        </div>
                    </article>

                    <article>
                        <strong>Avoid vague actions</strong>

                        <div className="nameList muted">
                            <span>handleData</span>
                            <span>processThing</span>
                            <span>doWork</span>
                            <span>manage</span>
                            <span>executeStuff</span>
                            <span>runLogic</span>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Components</span>

                    <h2>Name UI components after what they represent</h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">
                            Specific components
                        </span>

                        <pre>
                            <code>{`UserProfile
ProductCard
NavigationMenu
SearchInput
OrderSummary
ThemeToggle`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Vague components</span>

                        <pre>
                            <code>{`Box
Thing
SectionNew
CommonItem
MainStuff
DataComponent`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Specificity</span>

                    <h2>Choose enough detail to remove ambiguity</h2>

                    <p>
                        Names should be specific enough to distinguish concepts
                        without becoming unnecessarily long.
                    </p>
                </div>

                <div className="specificityGrid">
                    <article>
                        <span>Too vague</span>
                        <strong>status</strong>
                        <p>Which status?</p>
                    </article>

                    <article>
                        <span>Clearer</span>
                        <strong>paymentStatus</strong>
                        <p>Identifies the domain concept.</p>
                    </article>

                    <article>
                        <span>Too vague</span>
                        <strong>date</strong>
                        <p>What event does the date represent?</p>
                    </article>

                    <article>
                        <span>Clearer</span>
                        <strong>createdAt</strong>
                        <p>Communicates the meaning of the value.</p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Context</span>

                    <h2>
                        Avoid repeating information already provided by context
                    </h2>
                </div>

                <div className="exampleGrid">
                    <article>
                        <span className="exampleLabel">Repeated context</span>

                        <pre>
                            <code>{`const user = {
  userName,
  userEmail,
  userAge,
};`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">
                            Context already says user
                        </span>

                        <pre>
                            <code>{`const user = {
  name,
  email,
  age,
};`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Abbreviations</span>

                    <h2>Prefer familiar words over private shorthand</h2>
                </div>

                <div className="warningBox">
                    <div className="warningIcon">
                        <FiAlertTriangle />
                    </div>

                    <div>
                        <h3>
                            Abbreviations transfer decoding work to the reader.
                        </h3>

                        <p>
                            Short forms are reasonable when they are universally
                            understood within the context, but private
                            abbreviations such as `usrMgr`, `prdInf`, or
                            `calcTtl` usually reduce readability.
                        </p>
                    </div>
                </div>

                <div className="exampleGrid abbreviationExample">
                    <article>
                        <span className="exampleLabel">Harder to scan</span>

                        <pre>
                            <code>{`const usrMgr = getUsrMgr();
const prdInf = getPrdInf();
const ttlAmt = calcTtl();`}</code>
                        </pre>
                    </article>

                    <article>
                        <span className="exampleLabel">Clearer</span>

                        <pre>
                            <code>{`const userManager = getUserManager();
const productInfo = getProductInfo();
const totalAmount = calculateTotal();`}</code>
                        </pre>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Consistency</span>

                    <h2>Use one vocabulary for one concept</h2>
                </div>

                <div className="consistencyGrid">
                    <article>
                        <FiAlertTriangle />

                        <h3>Inconsistent vocabulary</h3>

                        <pre>
                            <code>{`getUser();
fetchCustomer();
loadMember();
retrieveAccountHolder();`}</code>
                        </pre>

                        <p>
                            If these functions represent the same concept,
                            different terms create unnecessary uncertainty.
                        </p>
                    </article>

                    <article>
                        <FiCheckCircle />

                        <h3>Consistent vocabulary</h3>

                        <pre>
                            <code>{`getUser();
getUserById();
getUserByEmail();
getActiveUsers();`}</code>
                        </pre>

                        <p>
                            Consistent terminology makes related behavior easier
                            to discover and understand.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Renaming</span>

                    <h2>Names should evolve as understanding improves</h2>
                </div>

                <div className="steps">
                    <article>
                        <span>01</span>

                        <div>
                            <h3>Notice ambiguity</h3>
                            <p>
                                Identify names that require extra explanation or
                                regularly cause confusion.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>02</span>

                        <div>
                            <h3>Understand the responsibility</h3>
                            <p>
                                Determine what the value, function, or module
                                actually represents.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>03</span>

                        <div>
                            <h3>Choose domain language</h3>
                            <p>
                                Prefer words already used by the application,
                                product, or business domain.
                            </p>
                        </div>
                    </article>

                    <article>
                        <span>04</span>

                        <div>
                            <h3>Update consistently</h3>
                            <p>
                                Rename related references so the same concept
                                continues to use one vocabulary.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="sectionHeader">
                    <span className="sectionLabel">Review Checklist</span>

                    <h2>Questions to ask when reviewing names</h2>
                </div>

                <div className="checklist">
                    <article>
                        <strong>Does the name explain intent?</strong>
                        <p>
                            Readers should understand what the value or behavior
                            represents.
                        </p>
                    </article>

                    <article>
                        <strong>Is the name specific enough?</strong>
                        <p>
                            Avoid generic terms when several concepts could fit
                            the same name.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Does a function name describe an action?
                        </strong>
                        <p>
                            Behavior should normally be expressed through
                            meaningful verbs.
                        </p>
                    </article>

                    <article>
                        <strong>Does a boolean read like a condition?</strong>
                        <p>
                            Names such as `isReady` or `hasAccess` make
                            conditions clearer.
                        </p>
                    </article>

                    <article>
                        <strong>Is terminology consistent?</strong>
                        <p>
                            Use the same word for the same concept across
                            related code.
                        </p>
                    </article>

                    <article>
                        <strong>
                            Would another developer understand this without
                            explanation?
                        </strong>
                        <p>
                            If the name constantly needs a comment, improving
                            the name may be more useful.
                        </p>
                    </article>
                </div>
            </section>

            <section className="takeaway">
                <span className="sectionLabel">Key Takeaway</span>

                <h2>Names are part of the design, not decoration.</h2>

                <p>
                    Clear naming reduces cognitive load, improves searchability,
                    and communicates intent directly through the code. Prefer
                    meaningful, specific, and consistent names that match the
                    concepts developers are actually working with.
                </p>
            </section>
        </Styled.Wrapper>
    );
};

export default Naming;
