// Script to generate 50 problems + ~150 bite-sized projects for Iran
// Run: node scripts/generate-iran-data.js

const fs = require('fs');
const path = require('path');

// Problem templates with multiple bite-sized project ideas
const problemTemplates = [
  // WATER (10 problems)
  {
    id: 'P1',
    title: 'Qanat System Collapsing Nationwide',
    location: 'Nationwide',
    category: 'Water Infrastructure',
    severity: 'critical',
    description: '37,000 km of ancient qanats deteriorating. Provides water for millions.',
    projects: [
      { title: 'Qanat Restoration Zone A - 200m', location: 'Shiraz', budget: 500000, status: 'active' },
      { title: 'Qanat Mapping with GPR', location: 'Tehran', budget: 250000, status: 'planning' },
      { title: 'Qanat Worker Training Program', location: 'Yazd', budget: 180000, status: 'planning' },
      { title: 'IoT Monitoring System - 10 Qanats', location: 'Isfahan', budget: 320000, status: 'active' },
      { title: 'UNESCO Qanat Restoration', location: 'Kerman', budget: 650000, status: 'planning' }
    ]
  },
  {
    id: 'P2',
    title: 'Groundwater Depletion Crisis',
    location: 'Central Iran',
    category: 'Water Infrastructure',
    severity: 'critical',
    description: 'Aquifers depleting 70% faster than recharge. Wells running dry.',
    projects: [
      { title: 'Aquifer Recharge Pilot - 5 Wells', location: 'Qom', budget: 450000, status: 'planning' },
      { title: 'Groundwater Monitoring Network', location: 'Kashan', budget: 280000, status: 'active' },
      { title: 'Water Metering - 1000 Wells', location: 'Arak', budget: 190000, status: 'planning' },
      { title: 'Managed Aquifer Recharge Study', location: 'Yazd', budget: 150000, status: 'active' }
    ]
  },
  // ... (will generate all 50 programmatically)
];

// Categories with problem counts
const categories = {
  'Water Infrastructure': 10,
  'Environment': 8,
  'Energy': 7,
  'Infrastructure': 8,
  'Healthcare': 5,
  'Education': 5,
  'Agriculture': 4,
  'Economy': 3
};

// Generate all problems and projects
function generateData() {
  const problems = [];
  const projects = [];
  let projectId = 1;

  // Add your 50 complete problems here
  // For now, creating structure

  const output = `// AUTO-GENERATED - Do not edit manually
// Generated: ${new Date().toISOString()}

import { Problem, Project } from './types'

export const iranProblems: Problem[] = ${JSON.stringify(problems, null, 2)}

export const iranProjects: Project[] = ${JSON.stringify(projects, null, 2)}
`;

  fs.writeFileSync(
    path.join(__dirname, '../lib/iran-data-generated.ts'),
    output
  );

  console.log(`✅ Generated ${problems.length} problems and ${projects.length} projects`);
}

generateData();
