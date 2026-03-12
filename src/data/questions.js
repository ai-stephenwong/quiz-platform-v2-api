export const questions = [
  {
    id: 1,
    topic: 'Testing Fundamentals',
    text: 'Which of the following correctly describes the relationship between an error, a defect, and a failure?',
    options: [
      'A failure causes a defect, which leads to an error',
      'An error (mistake) by a human leads to a defect in the code, which may cause a failure when executed',
      'A defect always results in a failure',
      'A failure is introduced by a developer and detected by a tester',
    ],
    answer: 1,
    explanation:
      'ISTQB defines the chain as: a human makes an error (mistake) → this introduces a defect (fault/bug) in the software → when the defect is executed, it may produce a failure. Not all defects lead to failures (e.g. dead code).',
  },
  {
    id: 2,
    topic: 'Testing vs. Quality Assurance',
    text: 'Which statement best distinguishes Quality Assurance (QA) from testing?',
    options: [
      'QA focuses on finding defects; testing focuses on preventing them',
      'Testing is a form of QA focused on finding defects in the product; QA is a broader process-oriented activity aimed at preventing defects',
      'QA and testing are identical terms used interchangeably in ISTQB',
      'QA is performed only by testers, while testing is performed only by developers',
    ],
    answer: 1,
    explanation:
      'QA is a process-oriented, preventive approach applying to the entire SDLC. Testing is product-oriented and corrective. QA includes testing as one of its components.',
  },
  {
    id: 3,
    topic: 'Seven Testing Principles',
    text: "The ISTQB principle 'Testing shows the presence of defects, not their absence' means:",
    options: [
      'A test that passes proves the software is defect-free',
      'Testing can only prove that defects exist, never that none remain',
      'Testers must report every defect they discover',
      'Defects are only present when testing reveals them',
    ],
    answer: 1,
    explanation:
      'This is Testing Principle 1. Testing reduces the probability of undiscovered defects, but even thorough testing cannot guarantee a defect-free product.',
  },
  {
    id: 4,
    topic: 'Seven Testing Principles',
    text: 'Which ISTQB testing principle states that repeating the same tests against unchanged software will eventually stop finding new defects?',
    options: [
      'Exhaustive testing is impossible',
      'Defects cluster together',
      'Pesticide paradox / Tests wear out',
      'Context dependency',
    ],
    answer: 2,
    explanation:
      "The 'Tests wear out' principle states that if the same tests are repeated, they will no longer find new defects. Test cases must be regularly reviewed and updated.",
  },
  {
    id: 5,
    topic: 'Testing Pyramid & Test Levels',
    text: 'According to the test pyramid model, which test level should generally have the MOST test cases?',
    options: [
      'System testing',
      'Acceptance testing',
      'Integration testing',
      'Component (unit) testing',
    ],
    answer: 3,
    explanation:
      'The test pyramid places component/unit tests at the base — the greatest quantity. They are fast, cheap, and isolated. Higher levels have fewer but broader tests.',
  },
  {
    id: 6,
    topic: 'Test Levels',
    text: 'Which test level is primarily focused on verifying interactions between integrated components or systems?',
    options: [
      'Component testing',
      'Integration testing',
      'System testing',
      'Acceptance testing',
    ],
    answer: 1,
    explanation:
      'Integration testing focuses on the interfaces and interactions between components or systems.',
  },
  {
    id: 7,
    topic: 'Test Types',
    text: 'A tester evaluates whether a new feature has inadvertently broken existing functionality. What type of testing is this?',
    options: [
      'Smoke testing',
      'Regression testing',
      'Exploratory testing',
      'Sanity testing',
    ],
    answer: 1,
    explanation:
      'Regression testing is performed after a change to confirm that existing functionality has not been broken.',
  },
  {
    id: 8,
    topic: 'Equivalence Partitioning',
    text: 'A field accepts ages from 18 to 65. Using Equivalence Partitioning, which three partitions are identified?',
    options: [
      'Below 18, 18–65, above 65',
      '18, 41, 65 (one value from each third)',
      '17, 18, 65, 66 (boundary values)',
      'Invalid, valid, invalid — using only the boundary values',
    ],
    answer: 0,
    explanation:
      'Equivalence Partitioning divides data into partitions processed the same way: invalid (< 18), valid (18–65), invalid (> 65). One test per partition is sufficient.',
  },
  {
    id: 9,
    topic: 'Boundary Value Analysis',
    text: 'Using 2-value Boundary Value Analysis (BVA) on a valid range of 1 to 100, which test values are selected?',
    options: [
      '1 and 100 only',
      '0, 1, 100, and 101',
      '1, 2, 99, and 100',
      '0, 1, 50, 100, and 101',
    ],
    answer: 1,
    explanation:
      '2-value BVA selects each boundary and the value just outside each boundary: 0, 1, 100, 101.',
  },
  {
    id: 10,
    topic: 'Decision Table Testing',
    text: 'Decision table testing is most useful when:',
    options: [
      'The system has complex sequences of events with timed transitions',
      'The input domain is a continuous range of numeric values',
      'Multiple combinations of conditions result in different actions',
      'Performance under load needs to be validated',
    ],
    answer: 2,
    explanation:
      'Decision table testing models complex business rules where different combinations of conditions lead to different outcomes (actions).',
  },
  {
    id: 11,
    topic: 'State Transition Testing',
    text: 'State transition testing is best applied when:',
    options: [
      "A system's behaviour depends on its current state and triggering events",
      'A system must process the same input type across thousands of records',
      'Decisions are driven purely by combinations of boolean conditions',
      'Testers want to explore the system without a predefined script',
    ],
    answer: 0,
    explanation:
      'State transition testing is designed for systems where behaviour depends on both the current state and the input/event.',
  },
  {
    id: 12,
    topic: 'Static Testing',
    text: 'Which of the following is an example of static testing?',
    options: [
      'Running automated unit tests against compiled code',
      'Executing a test suite to find runtime errors',
      'Reviewing a requirements specification document for ambiguities',
      'Performing load testing on a deployed API',
    ],
    answer: 2,
    explanation:
      'Static testing examines work products without executing them. Reviewing a requirements document is a classic static testing activity.',
  },
  {
    id: 13,
    topic: 'Review Process',
    text: 'In an ISTQB formal review, who is responsible for ensuring the review process is followed and facilitating the review meeting?',
    options: ['The author', 'The moderator (facilitator)', 'The reviewer', 'The manager'],
    answer: 1,
    explanation:
      'The moderator (or facilitator) leads the formal review process, plans and runs the review meeting, and ensures the process is followed correctly.',
  },
  {
    id: 14,
    topic: 'Shift-Left Testing',
    text: "Which statement best describes the 'shift-left' approach to testing?",
    options: [
      'Moving testers from the left side of the office to the right side',
      'Starting testing activities as early as possible in the SDLC',
      'Prioritising left-to-right code execution paths in testing',
      'Running regression tests from the earliest sprint',
    ],
    answer: 1,
    explanation:
      'Shift-left testing means involving testing earlier in the SDLC — including reviewing requirements, static analysis, and TDD — reducing the cost of fixing defects.',
  },
  {
    id: 15,
    topic: 'Risk-Based Testing',
    text: 'In risk-based testing, which two factors are used to determine the level of risk associated with a feature?',
    options: [
      'Test complexity and execution time',
      'Likelihood of failure and impact of failure',
      'Number of testers and number of defects found',
      'Code coverage percentage and defect density',
    ],
    answer: 1,
    explanation:
      'Product risk = Likelihood × Impact. Both the probability that the feature will fail and the consequence of that failure must be considered.',
  },
  {
    id: 16,
    topic: 'Test Estimation',
    text: 'In three-point estimation for test effort, what are the three values used?',
    options: [
      'Minimum, average, and maximum historical data points',
      'Best case, most likely, and worst case estimates',
      'Planning, execution, and reporting effort',
      'Low risk, medium risk, and high risk estimates',
    ],
    answer: 1,
    explanation:
      'Three-point estimation uses Optimistic (O), Most Likely (M), and Pessimistic (P), combined as E = (O + 4M + P) / 6.',
  },
  {
    id: 17,
    topic: 'Entry and Exit Criteria',
    text: 'Which of the following is typically an EXIT criterion for a system test phase?',
    options: [
      'Test environment is set up and ready',
      'All critical and high-severity defects have been fixed and retested',
      'The test plan has been reviewed and approved',
      'Test data has been prepared and loaded',
    ],
    answer: 1,
    explanation:
      "Exit criteria define conditions that must be met before moving on. 'All critical/high defects fixed and retested' is an exit criterion. The other options are typical entry criteria.",
  },
  {
    id: 18,
    topic: 'Test Automation',
    text: 'Which of the following is a key LIMITATION of test automation?',
    options: [
      'Automated tests cannot be scheduled to run unattended',
      'Automation always requires more test cases than manual testing',
      'Initial investment in tooling and scripting can be high, and scripts require maintenance',
      'Automated tests are less reliable than manual tests for regression',
    ],
    answer: 2,
    explanation:
      'Test automation has real limitations: high upfront cost, ongoing maintenance as the system changes, and it cannot replace all manual testing (e.g. exploratory, usability).',
  },
  {
    id: 19,
    topic: 'Testing Quadrants',
    text: 'The ISTQB Testing Quadrants model categorises tests along two axes. Which axes are used?',
    options: [
      'Functional vs non-functional, and manual vs automated',
      'Business-facing vs technology-facing, and supporting the team vs critiquing the product',
      'Unit level vs system level, and black-box vs white-box',
      'Risk-based vs coverage-based, and static vs dynamic',
    ],
    answer: 1,
    explanation:
      'The Testing Quadrants use: Business-facing vs Technology-facing, and Supporting the team (guide development) vs Critiquing the product (find defects).',
  },
  {
    id: 20,
    topic: 'Independence of Testing',
    text: 'What is the PRIMARY benefit of having an independent tester (rather than the developer) test their own code?',
    options: [
      'Independent testers work faster than developers',
      'Independent testers have more technical skills',
      'Developers may unconsciously make the same assumptions in testing that they made when coding, missing defects',
      'Regulations require independent testers for all software projects',
    ],
    answer: 2,
    explanation:
      "The main benefit is avoiding confirmation bias. A developer testing their own code tends to make the same wrong assumptions made during development, missing the same defects.",
  },
]
