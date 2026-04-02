export const ROLE_LEVELS = [
  'Analyst',
  'Associate',
  'Vice President',
  'Senior Vice President',
  'Director',
  'Managing Director',
];

export const CONCERN_CATEGORIES = [
  {
    id: 'deal-execution',
    label: 'Deal Execution & Underwriting Rigor',
    hasBusinessPlanField: false,
  },
  {
    id: 'asset-management',
    label: 'Asset Management & Value Creation',
    hasBusinessPlanField: true,
  },
  {
    id: 'analytical-quality',
    label: 'Analytical Quality & Attention to Detail',
    hasBusinessPlanField: false,
  },
  {
    id: 'cross-functional',
    label: 'Cross-Functional Coordination',
    hasBusinessPlanField: false,
  },
  {
    id: 'investor-communication',
    label: 'Investor & Stakeholder Communication',
    hasBusinessPlanField: false,
  },
  {
    id: 'market-knowledge',
    label: 'Market Knowledge & Sourcing',
    hasBusinessPlanField: false,
  },
  {
    id: 'disposition-strategy',
    label: 'Disposition Strategy & Execution',
    hasBusinessPlanField: true,
  },
  {
    id: 'team-leadership',
    label: 'Team Leadership & Development',
    hasBusinessPlanField: false,
  },
  {
    id: 'consistency',
    label: 'Consistency & Reliability',
    hasBusinessPlanField: false,
  },
  {
    id: 'initiative',
    label: 'Initiative & Ownership',
    hasBusinessPlanField: false,
  },
];

const toneLevels = {
  junior: ['Analyst', 'Associate'],
  mid: ['Vice President', 'Senior Vice President'],
  senior: ['Director', 'Managing Director'],
};

function getToneLevel(roleLevel) {
  if (toneLevels.junior.includes(roleLevel)) return 'junior';
  if (toneLevels.mid.includes(roleLevel)) return 'mid';
  return 'senior';
}

const defaultDescriptions = {
  'deal-execution': {
    junior: {
      description:
        'The employee has demonstrated gaps in foundational underwriting skills, including inconsistent financial modeling, errors in key assumptions, and difficulty completing due diligence tasks within required timelines. These gaps have resulted in rework and delays in the deal pipeline.',
      expectation:
        'The employee is expected to produce accurate underwriting models with minimal revisions, complete assigned due diligence tasks on time, and demonstrate a working understanding of key CRE valuation metrics (cap rate, IRR, cash-on-cash). The employee should proactively seek feedback on models before submission and show measurable improvement in accuracy over the improvement period.',
    },
    mid: {
      description:
        'The employee has not consistently demonstrated the analytical rigor and deal judgment expected at this level. Underwriting packages have contained material errors, risk factors have been inadequately addressed, and deal recommendations have lacked the depth of analysis needed to support investment committee decisions.',
      expectation:
        'The employee is expected to independently produce investment-grade underwriting packages, identify and quantify key risk factors, and present well-supported deal recommendations. The employee should lead due diligence workstreams and ensure quality control across junior team members\' output.',
    },
    senior: {
      description:
        'The employee has failed to exercise the strategic judgment and deal leadership accountability required at this level. Several transactions have proceeded with insufficient risk analysis, and the employee has not provided adequate oversight of the underwriting process across the team. This has exposed the firm to avoidable risk and eroded confidence in the deal pipeline.',
      expectation:
        'The employee is expected to set and enforce underwriting standards across the team, exercise sound judgment on deal selection and risk tolerance, and take personal accountability for the quality and integrity of every deal that advances to the investment committee. The employee must demonstrate the platform-level thinking and market instinct that this role demands.',
    },
  },
  'asset-management': {
    junior: {
      description:
        'The employee has struggled to stay on top of property-level performance tracking, lease administration tasks, and tenant communication follow-ups. Reports have been late or incomplete, and the employee has not demonstrated sufficient initiative in flagging variances to budget.',
      expectation:
        'The employee is expected to maintain accurate and timely property performance reports, track lease expirations and tenant obligations, and escalate budget variances promptly. The employee should develop a working understanding of NOI drivers and contribute to the execution of asset business plans.',
    },
    mid: {
      description:
        'The employee has not demonstrated the asset management acumen expected at this level. Business plan execution has lagged behind targets, value creation opportunities have been missed, and the employee has not been proactive in identifying and addressing underperformance across the assigned portfolio.',
      expectation:
        'The employee is expected to drive business plan execution across the assigned portfolio, identify and pursue value creation opportunities, and take ownership of asset-level performance outcomes. The employee should lead tenant relationship management and coordinate with property management, leasing, and capital markets teams to deliver on investment objectives.',
    },
    senior: {
      description:
        'The employee has not provided the strategic asset management leadership required at this level. Portfolio performance has underperformed relative to business plan targets, and the employee has not demonstrated sufficient accountability for value creation outcomes. The lack of strategic direction has impacted the team\'s ability to execute effectively.',
      expectation:
        'The employee is expected to set the strategic direction for asset management across the portfolio, hold the team accountable for business plan execution, and take personal ownership of portfolio-level performance. The employee must demonstrate the leadership and strategic vision needed to maximize value creation and deliver on investor commitments.',
    },
  },
  'analytical-quality': {
    junior: {
      description:
        'The employee\'s analytical work product has contained frequent errors in data entry, formula construction, and presentation formatting. These errors have required significant rework and have undermined the reliability of deliverables provided to senior team members.',
      expectation:
        'The employee is expected to produce clean, accurate analytical work product with consistent attention to detail. All models, reports, and presentations should be thoroughly checked before submission. The employee should develop and follow a personal quality control process and demonstrate measurable improvement in error rates.',
    },
    mid: {
      description:
        'The employee\'s analytical output has not met the quality standard expected at this level. Deliverables have contained errors that should have been caught through standard review procedures, and the employee has not consistently applied the rigor needed to ensure accuracy in complex analyses.',
      expectation:
        'The employee is expected to deliver high-quality analytical work that can be relied upon for decision-making without extensive review. The employee should implement quality control processes for their own work and the work of junior team members, and flag analytical complexities or limitations proactively.',
    },
    senior: {
      description:
        'The employee has not established or enforced adequate quality standards for analytical output across the team. Errors in team deliverables have reached senior stakeholders, reflecting a failure of oversight and accountability at this level.',
      expectation:
        'The employee is expected to set and uphold the highest standards for analytical quality across the team, establish review processes that prevent errors from reaching decision-makers, and take accountability for the integrity of all analytical work produced under their leadership.',
    },
  },
  'cross-functional': {
    junior: {
      description:
        'The employee has had difficulty coordinating effectively with colleagues across departments. Deadlines have been missed due to poor communication, and the employee has not been proactive in following up with counterparts in legal, accounting, property management, and other groups.',
      expectation:
        'The employee is expected to communicate clearly and promptly with cross-functional counterparts, track and follow up on outstanding items, and escalate coordination issues before they become bottlenecks. The employee should build productive working relationships across departments.',
    },
    mid: {
      description:
        'The employee has not effectively managed cross-functional coordination at the level expected for this role. Key workstreams have stalled due to unclear ownership, missed handoffs, and insufficient follow-through with internal and external partners.',
      expectation:
        'The employee is expected to take ownership of cross-functional coordination for assigned projects, ensure clear communication of timelines and deliverables, and proactively resolve issues that arise between teams. The employee should serve as a reliable point of contact and drive workstreams to completion.',
    },
    senior: {
      description:
        'The employee has not demonstrated the cross-functional leadership expected at this level. Organizational silos have persisted under their oversight, and the employee has not built the collaborative frameworks needed to ensure seamless execution across teams.',
      expectation:
        'The employee is expected to break down silos and build collaborative processes across departments, take accountability for cross-functional execution on platform-level initiatives, and model the partnership and communication standards expected throughout the organization.',
    },
  },
  'investor-communication': {
    junior: {
      description:
        'The employee has struggled to prepare investor-facing materials with the accuracy and professionalism required. Reports have contained errors, and the employee has not demonstrated sufficient awareness of the sensitivity and importance of investor communications.',
      expectation:
        'The employee is expected to prepare accurate, professional investor-facing materials, understand the importance of precision in stakeholder communications, and support senior team members in preparing for investor interactions. All materials should be thoroughly reviewed before submission.',
    },
    mid: {
      description:
        'The employee has not demonstrated the communication skills and stakeholder management expected at this level. Investor inquiries have not been handled with appropriate timeliness or depth, and the employee\'s written and verbal communications have lacked the clarity and confidence expected.',
      expectation:
        'The employee is expected to manage investor and stakeholder communications with professionalism, timeliness, and substance. The employee should handle routine investor inquiries independently, prepare compelling materials for investor meetings, and represent the firm effectively in stakeholder interactions.',
    },
    senior: {
      description:
        'The employee has not provided the investor relationship leadership expected at this level. Key investor relationships have not been adequately maintained, and the employee has not demonstrated the strategic communication skills needed to represent the firm\'s interests at the highest levels.',
      expectation:
        'The employee is expected to own and deepen key investor relationships, communicate the firm\'s strategy and performance with clarity and conviction, and serve as a trusted partner to investors and stakeholders. The employee must demonstrate the gravitas and communication excellence this role demands.',
    },
  },
  'market-knowledge': {
    junior: {
      description:
        'The employee has not demonstrated sufficient market awareness for their role. Knowledge of local market dynamics, comparable transactions, and competitive landscape has been below the expected level, resulting in gaps in research deliverables and deal sourcing support.',
      expectation:
        'The employee is expected to develop and maintain a working knowledge of target markets, track comparable transactions and market trends, and contribute meaningfully to market research and deal sourcing efforts. The employee should proactively expand their market knowledge through research, broker relationships, and industry events.',
    },
    mid: {
      description:
        'The employee has not demonstrated the market expertise expected at this level. Deal sourcing has been insufficiently proactive, and the employee has not developed the broker relationships and market intelligence needed to identify and pursue attractive investment opportunities.',
      expectation:
        'The employee is expected to maintain deep market knowledge across target markets, cultivate productive broker and industry relationships, and drive proactive deal sourcing. The employee should be recognized as a market expert within the team and contribute market insights that shape investment strategy.',
    },
    senior: {
      description:
        'The employee has not provided the market leadership and sourcing vision expected at this level. The firm\'s deal pipeline has been insufficiently robust, and the employee has not leveraged their position to build the market presence and relationships needed to access differentiated deal flow.',
      expectation:
        'The employee is expected to set the market strategy for the team, build and maintain the firm\'s market presence and key relationships, and ensure a robust pipeline of investment opportunities. The employee must leverage their experience and network to create competitive advantages in deal sourcing.',
    },
  },
  'disposition-strategy': {
    junior: {
      description:
        'The employee has not adequately supported disposition processes, including preparation of marketing materials, data room organization, and buyer due diligence coordination. Tasks have been completed late or with errors that have required intervention from senior team members.',
      expectation:
        'The employee is expected to support disposition workstreams reliably, including accurate preparation of marketing materials, organized data room management, and timely coordination with buyers and brokers. The employee should develop a working understanding of the disposition process and contribute effectively to execution timelines.',
    },
    mid: {
      description:
        'The employee has not demonstrated the disposition execution skills expected at this level. Sale processes have experienced unnecessary delays, pricing analyses have lacked rigor, and the employee has not been sufficiently proactive in managing the disposition timeline and buyer engagement.',
      expectation:
        'The employee is expected to drive disposition processes from pricing analysis through closing, manage broker selection and engagement, and ensure timely execution of sale timelines. The employee should take ownership of disposition outcomes and coordinate effectively with internal teams and external parties.',
    },
    senior: {
      description:
        'The employee has not provided the strategic disposition leadership expected at this level. Portfolio disposition strategy has lacked clarity, timing decisions have not been well-supported by market analysis, and the employee has not demonstrated the strategic judgment needed to maximize disposition proceeds.',
      expectation:
        'The employee is expected to set and execute portfolio disposition strategy, make well-supported timing and pricing decisions, and take accountability for maximizing disposition proceeds. The employee must demonstrate the strategic vision and market judgment that investors and senior leadership expect at this level.',
    },
  },
  'team-leadership': {
    junior: {
      description:
        'The employee has not demonstrated the collaborative and supportive team orientation expected. The employee has been reluctant to assist colleagues, has not been receptive to feedback, and has not contributed positively to team morale and productivity.',
      expectation:
        'The employee is expected to be a reliable and collaborative team member, actively support colleagues, receive feedback constructively, and contribute to a positive and productive team environment. The employee should demonstrate willingness to take on shared responsibilities and support team goals.',
    },
    mid: {
      description:
        'The employee has not demonstrated the mentoring and team development skills expected at this level. Junior team members have not received adequate guidance, and the employee has not taken sufficient ownership of building team capability and fostering professional development.',
      expectation:
        'The employee is expected to actively mentor and develop junior team members, provide clear direction and constructive feedback, and contribute to building a high-performing team culture. The employee should invest in the growth of their direct reports and create an environment where team members can develop their skills.',
    },
    senior: {
      description:
        'The employee has not provided the team leadership expected at this level. Team morale and retention have suffered, talent development has been insufficient, and the employee has not built the leadership culture needed to attract and retain top talent.',
      expectation:
        'The employee is expected to build and lead a high-performing team, create a culture of accountability and development, and take personal ownership of talent outcomes. The employee must demonstrate the leadership presence and people management skills that define success at this level, including succession planning and strategic talent development.',
    },
  },
  'consistency': {
    junior: {
      description:
        'The employee\'s work output has been inconsistent in quality and timeliness. Deadlines have been missed without adequate communication, and the reliability of the employee\'s contributions has not met the standard expected.',
      expectation:
        'The employee is expected to deliver consistent, reliable work product on time. When delays are unavoidable, the employee should communicate proactively and provide revised timelines. The employee should establish routines and systems to ensure consistent output quality.',
    },
    mid: {
      description:
        'The employee has not demonstrated the consistency and reliability expected at this level. Performance has been uneven, with periods of strong output followed by lapses in quality, responsiveness, or follow-through that have impacted team productivity.',
      expectation:
        'The employee is expected to maintain a consistently high level of performance, meet commitments reliably, and set an example of dependability for the team. The employee should manage their workload proactively and communicate capacity constraints before they affect deliverables.',
    },
    senior: {
      description:
        'The employee\'s inconsistency has had a disproportionate impact given their seniority and visibility. Uneven engagement and follow-through have created uncertainty within the team and with external stakeholders, undermining confidence in the employee\'s leadership.',
      expectation:
        'The employee is expected to be a model of consistency and reliability at the leadership level. The employee must maintain steady, visible engagement, follow through on commitments without exception, and set the standard for accountability that the organization expects from its senior leaders.',
    },
  },
  'initiative': {
    junior: {
      description:
        'The employee has not demonstrated sufficient initiative or ownership in their role. The employee has relied heavily on direction from others, has not proactively identified areas for contribution, and has shown limited engagement beyond explicitly assigned tasks.',
      expectation:
        'The employee is expected to show initiative by proactively identifying tasks and areas for contribution, taking ownership of assigned responsibilities, and demonstrating genuine engagement with the work. The employee should bring ideas and solutions, not just questions, and show a desire to grow and add value beyond the minimum requirements of the role.',
    },
    mid: {
      description:
        'The employee has not demonstrated the initiative and ownership expected at this level. The employee has been reactive rather than proactive, has not driven projects forward without prompting, and has not shown the entrepreneurial mindset expected of someone in this role.',
      expectation:
        'The employee is expected to take proactive ownership of their areas of responsibility, identify and pursue opportunities without waiting to be asked, and demonstrate the entrepreneurial drive that defines success at this level. The employee should lead by example in showing initiative across the team.',
    },
    senior: {
      description:
        'The employee has not demonstrated the strategic initiative and platform ownership expected at this level. The employee has been insufficiently proactive in identifying and driving strategic opportunities, and has not modeled the ownership mentality that the organization expects from its leaders.',
      expectation:
        'The employee is expected to drive strategic initiatives, identify and pursue platform-level opportunities, and model an ownership mentality that inspires the entire team. The employee must demonstrate the proactive leadership and strategic vision that define impact at this level.',
    },
  },
};

const defaultPerformanceExpectations = {
  'deal-execution': {
    junior: [
      'Produce accurate underwriting models with minimal errors and submit them for review before deadlines.',
      'Complete all assigned due diligence tasks within established timelines, escalating blockers promptly.',
      'Demonstrate a working command of core CRE valuation metrics (cap rate, IRR, cash-on-cash, equity multiple) in all analytical work.',
    ],
    mid: [
      'Independently produce investment-grade underwriting packages that require minimal senior revision.',
      'Identify and quantify key risk factors in every deal, presenting balanced recommendations to the investment committee.',
      'Lead due diligence workstreams end-to-end and ensure quality control across junior team members\' output.',
    ],
    senior: [
      'Set and enforce firm-wide underwriting standards, ensuring consistency and rigor across the entire deal pipeline.',
      'Exercise strategic judgment on deal selection, risk tolerance, and capital allocation at the portfolio level.',
      'Take personal accountability for the quality and integrity of every transaction that advances to the investment committee.',
    ],
  },
  'asset-management': {
    junior: [
      'Maintain accurate and timely property performance reports, with all variances to budget flagged within 48 hours.',
      'Track lease expirations and tenant obligations proactively, ensuring no deadlines are missed.',
      'Contribute to the execution of asset business plans by completing assigned tasks on schedule and with accuracy.',
    ],
    mid: [
      'Drive business plan execution across the assigned portfolio, meeting or exceeding NOI and occupancy targets.',
      'Identify and pursue value creation opportunities proactively, including lease-up, capital improvement, and expense reduction initiatives.',
      'Take ownership of tenant relationship management and coordinate effectively with property management, leasing, and capital markets teams.',
    ],
    senior: [
      'Set the strategic direction for asset management across the portfolio and hold the team accountable for business plan execution.',
      'Take personal ownership of portfolio-level performance outcomes, including NOI growth, occupancy, and investor return targets.',
      'Demonstrate strategic vision in identifying repositioning, redevelopment, or value-add opportunities at the platform level.',
    ],
  },
  'analytical-quality': {
    junior: [
      'Produce clean, error-free analytical work product, thoroughly checking all models, reports, and presentations before submission.',
      'Develop and consistently follow a personal quality control checklist for all deliverables.',
      'Reduce error rate in analytical output to a level that does not require significant rework by senior team members.',
    ],
    mid: [
      'Deliver analytical work product that can be relied upon for decision-making without extensive senior review.',
      'Implement quality control processes for both personal output and the work of junior team members.',
      'Flag analytical complexities, limitations, or assumptions proactively in all deliverables.',
    ],
    senior: [
      'Establish and enforce quality standards for all analytical output produced by the team.',
      'Implement review processes that prevent errors from reaching senior stakeholders or decision-makers.',
      'Take accountability for the integrity and reliability of all analytical work produced under your leadership.',
    ],
  },
  'cross-functional': {
    junior: [
      'Communicate clearly and promptly with cross-functional counterparts in legal, accounting, property management, and other groups.',
      'Track and follow up on all outstanding items with a documented status tracker, escalating delays before they become bottlenecks.',
      'Build productive working relationships across departments through consistent professionalism and follow-through.',
    ],
    mid: [
      'Take ownership of cross-functional coordination for all assigned projects, ensuring clear communication of timelines and deliverables.',
      'Proactively resolve issues that arise between teams, serving as a reliable single point of contact.',
      'Drive cross-functional workstreams to completion without requiring escalation or senior intervention.',
    ],
    senior: [
      'Build collaborative processes across departments that eliminate silos and ensure seamless execution on platform-level initiatives.',
      'Model the partnership and communication standards expected throughout the organization.',
      'Take accountability for cross-functional execution outcomes and establish frameworks that scale beyond individual projects.',
    ],
  },
  'investor-communication': {
    junior: [
      'Prepare accurate, professional investor-facing materials with zero factual errors before submission.',
      'Support senior team members in preparing for investor meetings by providing timely, well-organized backup materials.',
      'Demonstrate awareness of the sensitivity and importance of all investor communications through careful review and attention to detail.',
    ],
    mid: [
      'Handle routine investor inquiries independently with professionalism, timeliness, and substantive depth.',
      'Prepare compelling materials for investor meetings that clearly communicate performance, strategy, and outlook.',
      'Represent the firm effectively in stakeholder interactions, demonstrating confidence and command of the material.',
    ],
    senior: [
      'Own and deepen key investor relationships, serving as a trusted strategic partner to the firm\'s most important stakeholders.',
      'Communicate the firm\'s strategy and performance with clarity, conviction, and executive presence.',
      'Set the standard for investor communication quality across the team and ensure all stakeholder touchpoints reflect the firm\'s brand.',
    ],
  },
  'market-knowledge': {
    junior: [
      'Develop and maintain a working knowledge of target markets, including key submarkets, comparable transactions, and competitive dynamics.',
      'Contribute meaningfully to market research and deal sourcing efforts with accurate, timely research deliverables.',
      'Proactively expand market knowledge through broker outreach, industry publications, and attendance at relevant events.',
    ],
    mid: [
      'Maintain deep market expertise across target markets and be recognized as a market resource within the team.',
      'Cultivate productive broker and industry relationships that generate deal flow and market intelligence.',
      'Drive proactive deal sourcing and contribute market insights that inform investment strategy decisions.',
    ],
    senior: [
      'Set the market strategy for the team and ensure a robust, diversified pipeline of investment opportunities.',
      'Build and maintain the firm\'s market presence through key relationships, conference participation, and thought leadership.',
      'Leverage your experience and network to create competitive advantages in sourcing differentiated deal flow.',
    ],
  },
  'disposition-strategy': {
    junior: [
      'Support disposition workstreams reliably, including preparation of accurate marketing materials and organized data room management.',
      'Coordinate with buyers and brokers in a timely manner, meeting all deadlines in the disposition timeline.',
      'Develop a working understanding of the full disposition process from pricing analysis through closing.',
    ],
    mid: [
      'Drive disposition processes end-to-end, from pricing analysis through buyer engagement and closing.',
      'Manage broker selection and engagement effectively, ensuring competitive processes that maximize proceeds.',
      'Take ownership of disposition timelines and coordinate with internal teams and external parties to prevent delays.',
    ],
    senior: [
      'Set and execute portfolio disposition strategy with well-supported timing and pricing decisions.',
      'Take accountability for maximizing disposition proceeds through strategic market timing, buyer targeting, and process management.',
      'Demonstrate strategic judgment that reflects deep market understanding and alignment with investor return objectives.',
    ],
  },
  'team-leadership': {
    junior: [
      'Be a reliable and collaborative team member, actively supporting colleagues and contributing to team goals.',
      'Receive and act on feedback constructively, demonstrating a growth mindset and willingness to improve.',
      'Contribute positively to team morale and productivity through professional behavior and shared accountability.',
    ],
    mid: [
      'Actively mentor and develop junior team members, providing clear direction and constructive, timely feedback.',
      'Invest in the professional growth of direct reports by creating development opportunities and regular coaching touchpoints.',
      'Contribute to building a high-performing team culture rooted in accountability, collaboration, and continuous improvement.',
    ],
    senior: [
      'Build and lead a high-performing team, creating a culture of accountability, development, and excellence.',
      'Take personal ownership of talent outcomes, including retention, development, and succession planning.',
      'Demonstrate the leadership presence and people management skills that attract and retain top talent at the firm.',
    ],
  },
  'consistency': {
    junior: [
      'Deliver consistent, reliable work product that meets quality standards every time, not intermittently.',
      'Meet all deadlines; when delays are unavoidable, communicate proactively and provide revised timelines before the original deadline passes.',
      'Establish personal routines and systems that ensure consistent output quality across all assignments.',
    ],
    mid: [
      'Maintain a consistently high level of performance across all areas of responsibility without lapses in quality or follow-through.',
      'Manage workload proactively and communicate capacity constraints before they affect deliverables or team productivity.',
      'Set an example of dependability and accountability for the team through sustained, visible engagement.',
    ],
    senior: [
      'Be a model of consistency and reliability at the leadership level, maintaining steady engagement across all responsibilities.',
      'Follow through on all commitments without exception, setting the accountability standard the organization expects from its senior leaders.',
      'Eliminate any perception of uneven engagement that undermines team confidence or external stakeholder trust.',
    ],
  },
  'initiative': {
    junior: [
      'Proactively identify tasks and areas for contribution beyond explicitly assigned work.',
      'Take ownership of assigned responsibilities fully, bringing ideas and solutions rather than only questions.',
      'Demonstrate genuine engagement with the work and a visible desire to grow, learn, and add value to the team.',
    ],
    mid: [
      'Take proactive ownership of your areas of responsibility, identifying and pursuing opportunities without waiting to be asked.',
      'Drive projects forward independently, anticipating needs and removing obstacles before they require escalation.',
      'Demonstrate the entrepreneurial drive and self-direction that define success at this level.',
    ],
    senior: [
      'Drive strategic initiatives and identify platform-level opportunities that create value for the firm.',
      'Model an ownership mentality that inspires the entire team and sets the standard for proactive leadership.',
      'Demonstrate the strategic vision and independent judgment expected of someone in a senior leadership role.',
    ],
  },
};

const defaultImprovementActions = {
  junior: [
    'Attend and actively participate in regular check-ins with their manager.',
    'Provide status updates on key assignments and outstanding action items on a recurring basis.',
    'Identify obstacles early and communicate them promptly, along with proposed solutions or support needed.',
    'Demonstrate measurable improvement in the specific areas identified above through consistent daily performance.',
  ],
  mid: [
    'Attend and actively participate in regular check-ins with their manager, coming prepared with updates on all active workstreams.',
    'Provide proactive status updates on key assignments, flagging risks and proposed mitigations before deadlines are impacted.',
    'Seek and incorporate feedback from peers, direct reports, and leadership to address the identified concerns.',
    'Demonstrate sustained, measurable improvement in the areas identified above, with evidence visible to stakeholders beyond the direct manager.',
  ],
  senior: [
    'Attend and actively participate in regular check-ins with their manager, providing candid self-assessment on progress against this plan.',
    'Provide strategic-level updates on key initiatives, demonstrating proactive leadership and accountability for outcomes.',
    'Actively seek 360-degree feedback from peers, direct reports, and senior leadership to identify blind spots and calibrate improvement efforts.',
    'Demonstrate sustained, visible improvement that restores stakeholder confidence and meets the leadership standard expected at this level.',
  ],
};

export function getDefaultPerformanceExpectations(selectedIds, roleLevel) {
  const tone = getToneLevel(roleLevel || 'Analyst');
  const expectations = [];
  for (const id of selectedIds) {
    const items = defaultPerformanceExpectations[id]?.[tone];
    if (items) expectations.push(...items);
  }
  return expectations;
}

export function getDefaultImprovementActions(roleLevel) {
  const tone = getToneLevel(roleLevel || 'Analyst');
  return defaultImprovementActions[tone] || defaultImprovementActions.junior;
}

export function getDefaultDescription(categoryId, roleLevel, businessPlanRef) {
  const tone = getToneLevel(roleLevel || 'Analyst');
  const data = defaultDescriptions[categoryId]?.[tone];
  if (!data) return { description: '', expectation: '' };

  let { description, expectation } = data;

  if (businessPlanRef) {
    const category = CONCERN_CATEGORIES.find((c) => c.id === categoryId);
    if (category?.hasBusinessPlanField) {
      description += ` This concern is particularly relevant in the context of ${businessPlanRef}, where performance gaps have directly impacted plan execution.`;
      expectation += ` Specific improvement should be demonstrated in the context of ${businessPlanRef}, with measurable progress against the targets outlined in that plan.`;
    }
  }

  return { description, expectation };
}
