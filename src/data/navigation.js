import {
    FiActivity,
    FiAlertTriangle,
    FiBookOpen,
    FiBox,
    FiCheckCircle,
    FiCode,
    FiEdit3,
    FiEye,
    FiFileText,
    FiFilter,
    FiGitBranch,
    FiGitMerge,
    FiHome,
    FiLayers,
    FiLink,
    FiLock,
    FiMap,
    FiPackage,
    FiRefreshCw,
    FiSettings,
    FiShield,
    FiTarget,
    FiTool,
    FiTrendingUp,
    FiZap,
} from "react-icons/fi";

export const navigationGroups = [
    {
        title: "Start",
        items: [
            {
                label: "Overview",
                path: "/",
                icon: FiHome,
                end: true,
            },
            {
                label: "Architecture",
                path: "/architecture",
                icon: FiMap,
            },
            {
                label: "Clean Code",
                path: "/clean-code",
                icon: FiCode,
            },
        ],
    },
    {
        title: "Principles",
        items: [
            {
                label: "Design Principles",
                path: "/design-principles",
                icon: FiLayers,
            },
            {
                label: "SOLID",
                path: "/solid",
                icon: FiBox,
            },
            {
                label: "DRY",
                path: "/dry",
                icon: FiGitBranch,
            },
            {
                label: "KISS",
                path: "/kiss",
                icon: FiCheckCircle,
            },
            {
                label: "YAGNI",
                path: "/yagni",
                icon: FiTarget,
            },
            {
                label: "Separation of Concerns",
                path: "/separation-of-concerns",
                icon: FiLayers,
            },
            {
                label: "Coupling & Cohesion",
                path: "/coupling-and-cohesion",
                icon: FiLink,
            },
            {
                label: "Abstraction",
                path: "/abstraction",
                icon: FiEye,
            },
            {
                label: "Encapsulation",
                path: "/encapsulation",
                icon: FiLock,
            },
            {
                label: "Composition over Inheritance",
                path: "/composition-over-inheritance",
                icon: FiGitMerge,
            },
        ],
    },
    {
        title: "Code Quality",
        items: [
            {
                label: "Project Structure",
                path: "/project-structure",
                icon: FiBookOpen,
            },
            {
                label: "Naming",
                path: "/naming",
                icon: FiEdit3,
            },
            {
                label: "Functions",
                path: "/functions",
                icon: FiZap,
            },
            {
                label: "Code Readability",
                path: "/code-readability",
                icon: FiCode,
            },
            {
                label: "Error Handling",
                path: "/error-handling",
                icon: FiTool,
            },
            {
                label: "Validation",
                path: "/validation",
                icon: FiFilter,
            },
            {
                label: "Logging",
                path: "/logging",
                icon: FiActivity,
            },
            {
                label: "Configuration",
                path: "/configuration",
                icon: FiSettings,
            },
            {
                label: "Documentation",
                path: "/documentation",
                icon: FiFileText,
            },
            {
                label: "Refactoring",
                path: "/refactoring",
                icon: FiRefreshCw,
            },
            {
                label: "Code Smells",
                path: "/code-smells",
                icon: FiAlertTriangle,
            },
            {
                label: "Testing & Testability",
                path: "/testing",
                icon: FiShield,
            },
        ],
    },
    {
        title: "Architecture & Maintenance",
        items: [
            {
                label: "Dependency Management",
                path: "/dependency-management",
                icon: FiPackage,
            },
            {
                label: "Scalability",
                path: "/scalability",
                icon: FiTrendingUp,
            },
            {
                label: "Maintainability Checklist",
                path: "/maintainability-checklist",
                icon: FiCheckCircle,
            },
        ],
    },
];

export const flatNavigationItems = navigationGroups.flatMap(
    (group) => group.items,
);
