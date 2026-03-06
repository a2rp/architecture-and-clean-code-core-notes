// src/topics/solid/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiShield,
    FiLayers,
    FiFeather,
    FiBox,
    FiLink,
    FiGitMerge,
    FiBookOpen,
    FiCheckCircle,
    FiAlertTriangle,
} from "react-icons/fi";

const SOLID = () => {
    const [open, setOpen] = useState(false);

    const solidCards = useMemo(() => {
        return [
            {
                key: "S",
                title: "S - Single Responsibility Principle",
                icon: <FiFeather />,
                plain: "A module should have one job and one reason to change.",
                whenGood: [
                    "You can describe the module in one sentence",
                    "Changes in one feature do not force edits across unrelated areas",
                ],
                smell: [
                    "A file keeps growing because it owns many unrelated responsibilities",
                    "A function validates, formats, saves, logs, and emails in one place",
                ],
                exampleBad: `// not ideal - multiple responsibilities in one function
function registerUser(payload) {
  validate(payload);
  const normalized = normalize(payload);
  const user = db.users.insert(normalized);
  sendWelcomeEmail(user.email);
  auditLog("user_registered", user.id);
  return user;
}`,
                exampleGood: `// better - responsibilities are separated with clear names
function registerUser(payload) {
  const input = validateUserInput(payload);
  const data = normalizeUserInput(input);
  const user = saveUser(data);
  sendWelcomeEmail(user.email);
  logUserRegistered(user.id);
  return user;
}

function saveUser(data) {
  return db.users.insert(data);
}`,
            },
            {
                key: "O",
                title: "O - Open Closed Principle",
                icon: <FiBox />,
                plain: "Open for extension, closed for modification. Add new behavior without rewriting old code.",
                whenGood: [
                    "Adding a new type does not require changing many if else blocks",
                    "You can extend behavior by adding new modules",
                ],
                smell: [
                    "Every new requirement forces edits inside a big switch statement",
                    "A single function knows all types and all rules",
                ],
                exampleBad: `// not ideal - every new type changes this function
function getShippingCost(order) {
  if (order.type === "standard") return 40;
  if (order.type === "express") return 120;
  return 0;
}`,
                exampleGood: `// better - extend by adding new strategy
const shippingRules = {
  standard: () => 40,
  express: () => 120,
};

function getShippingCost(order) {
  const rule = shippingRules[order.type];
  return rule ? rule(order) : 0;
}

// later, add new type without touching getShippingCost
shippingRules.priority = () => 180;`,
            },
            {
                key: "L",
                title: "L - Liskov Substitution Principle",
                icon: <FiLayers />,
                plain: "A subtype should be usable wherever its parent type is expected, without breaking behavior.",
                whenGood: [
                    "Replacing one implementation with another does not surprise callers",
                    "Your interface contract stays consistent across implementations",
                ],
                smell: [
                    "Child class throws errors for methods that should work",
                    "Callers must add special cases for certain subtypes",
                ],
                exampleBad: `// not ideal - a subtype breaks expected behavior
class Bird {
  fly() {
    return "flying";
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins cannot fly");
  }
}

// any code expecting Bird.fly() can break with Penguin`,
                exampleGood: `// better - model capability with separate interfaces
class FlyingBird {
  fly() {
    return "flying";
  }
}

class Penguin {
  swim() {
    return "swimming";
  }
}

// callers depend on the right capability, no surprises`,
            },
            {
                key: "I",
                title: "I - Interface Segregation Principle",
                icon: <FiLink />,
                plain: "Do not force clients to depend on methods they do not use. Prefer small focused interfaces.",
                whenGood: [
                    "Consumers only implement what they need",
                    "Interfaces stay minimal and easy to understand",
                ],
                smell: [
                    "Many implementations have empty methods",
                    "A big interface tries to cover every possible feature",
                ],
                exampleBad: `// not ideal - one big interface forces unused methods
class Worker {
  work() {}
  eat() {}
  sleep() {}
}

// a Robot worker does not eat or sleep but must implement them`,
                exampleGood: `// better - split into small focused interfaces
class Workable {
  work() {}
}

class Eatable {
  eat() {}
}

class Sleepable {
  sleep() {}
}

class Human extends Workable {
  work() {}
}
class HumanNeeds extends Eatable {
  eat() {}
}
class HumanRest extends Sleepable {
  sleep() {}
}

class Robot extends Workable {
  work() {}
}`,
            },
            {
                key: "D",
                title: "D - Dependency Inversion Principle",
                icon: <FiGitMerge />,
                plain: "Depend on abstractions, not concrete implementations. High-level policy should not depend on low-level details.",
                whenGood: [
                    "You can swap databases or APIs without rewriting business rules",
                    "Testing becomes easier with mocks and fakes",
                ],
                smell: [
                    "Business logic imports database client directly",
                    "You cannot test without hitting real network or real DB",
                ],
                exampleBad: `// not ideal - business logic depends on low level details
import { db } from "./db";

export async function createInvoice(order) {
  const invoice = buildInvoice(order);
  await db.invoices.insert(invoice);
  return invoice;
}`,
                exampleGood: `// better - inject dependency as an abstraction
export async function createInvoice(order, deps) {
  const invoice = buildInvoice(order);
  await deps.invoiceRepo.save(invoice);
  return invoice;
}

// implementation can be swapped
const invoiceRepo = {
  async save(invoice) {
    return db.invoices.insert(invoice);
  },
};

// tests can pass a fake repo`,
            },
        ];
    }, []);

    const solidSummary = useMemo(() => {
        return [
            "S keeps responsibilities clean and prevents god files",
            "O reduces risky edits and prevents condition explosion",
            "L keeps substitution safe and avoids surprise behavior",
            "I keeps contracts small and prevents unused method bloat",
            "D keeps business rules independent from technical details",
        ];
    }, []);

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.TopBar>
                    <div className="left">
                        <div className="badge">
                            <FiShield />
                        </div>

                        <div className="titles">
                            <div className="title">SOLID</div>
                            <div className="subTitle">
                                5 design principles that keep code scalable and
                                maintainable
                            </div>
                        </div>

                        <div className="pillRow">
                            <div className="stat">
                                <span className="sIcon">
                                    <FiCheckCircle />
                                </span>
                                <span>Maintainable</span>
                            </div>
                            <div className="stat">
                                <span className="sIcon">
                                    <FiBookOpen />
                                </span>
                                <span>Principles</span>
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="toggleBtn"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-label={open ? "Collapse" : "Expand"}
                        title={open ? "Collapse" : "Expand"}
                    >
                        <span
                            className="toggleIcon"
                            data-open={open ? "true" : "false"}
                        >
                            <FiChevronDown />
                        </span>
                        <span className="toggleText">
                            {open ? "Collapse" : "Expand"}
                        </span>
                    </button>
                </Styled.TopBar>

                <Styled.Body data-open={open ? "true" : "false"}>
                    <Styled.IntroRow>
                        <div className="introCard">
                            <div className="introTitle">
                                <FiAlertTriangle />
                                Beginner note
                            </div>
                            <p>
                                SOLID is not about writing more code. It is
                                about creating clean boundaries so change does
                                not spread everywhere. Use it when a codebase is
                                growing or when teams are working together.
                            </p>
                        </div>

                        <div className="introCard">
                            <div className="introTitle">
                                <FiCheckCircle />
                                Quick summary
                            </div>
                            <ul className="dashList">
                                {solidSummary.map((s) => (
                                    <li key={s}>{s}</li>
                                ))}
                            </ul>
                        </div>
                    </Styled.IntroRow>

                    <Styled.SectionTitle>
                        SOLID explained with practical mini examples
                    </Styled.SectionTitle>

                    <Styled.Grid>
                        {solidCards.map((c) => (
                            <div className="itemCard" key={c.key}>
                                <div className="itemHead">
                                    <span className="i">{c.icon}</span>
                                    <div className="headText">
                                        <div className="k">{c.key}</div>
                                        <div className="t">{c.title}</div>
                                    </div>
                                </div>

                                <div className="plain">{c.plain}</div>

                                <div className="miniGrid">
                                    <div className="mini">
                                        <div className="miniTitle">
                                            When it helps
                                        </div>
                                        <ul className="dashList">
                                            {c.whenGood.map((x) => (
                                                <li key={x}>{x}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mini">
                                        <div className="miniTitle">
                                            Common smells
                                        </div>
                                        <ul className="dashList">
                                            {c.smell.map((x) => (
                                                <li key={x}>{x}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="codeTitle">Example</div>
                                <pre className="code">{c.exampleBad}</pre>

                                <div className="codeTitle good">
                                    Improved version
                                </div>
                                <pre className="code">{c.exampleGood}</pre>
                            </div>
                        ))}
                    </Styled.Grid>

                    <Styled.FooterNote>
                        Practical rule - Start simple. Apply SOLID where change
                        is frequent. If a module rarely changes, do not over
                        engineer it.
                    </Styled.FooterNote>
                </Styled.Body>
            </Styled.Card>
        </Styled.Wrapper>
    );
};

export default SOLID;
