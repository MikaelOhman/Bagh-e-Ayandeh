// Iran Problems & Projects - Working dataset with linking
import { Problem, Project } from './types'

export const iranProblems: Problem[] = [
  // WATER (P1-P10)
  { id: 'P1', title: 'Qanat System Collapsing Nationwide', location: 'Nationwide', country: 'Iran', category: 'Water Infrastructure', severity: 'critical', solutions: 5, votes: 892, description: '37,000 km of ancient qanats deteriorating. UNESCO World Heritage system at risk.', relatedProjects: ['PR1', 'PR2', 'PR3', 'PR4', 'PR5'] },
  { id: 'P2', title: 'Groundwater Depletion Crisis', location: 'Central Iran', country: 'Iran', category: 'Water Infrastructure', severity: 'critical', solutions: 4, votes: 1234, description: 'Aquifers depleting 70% faster than recharge. 70% of water from groundwater.', relatedProjects: ['PR6', 'PR7', 'PR8', 'PR9'] },
  { id: 'P3', title: 'Zayandeh Rud River Dried Up', location: 'Isfahan', country: 'Iran', category: 'Water Infrastructure', severity: 'critical', solutions: 3, votes: 876, description: 'Historic river dry for months annually. 3M+ people affected.', relatedProjects: ['PR10', 'PR11', 'PR12'] },
  { id: 'P4', title: 'Lake Urmia Shrinking', location: 'Urmia', country: 'Iran', category: 'Environment', severity: 'critical', solutions: 3, votes: 654, description: 'Lost 90% volume. Salt storms affect 16M people.', relatedProjects: ['PR13', 'PR14', 'PR15'] },
  { id: 'P5', title: 'Urban Water Leakage - 30%', location: 'Tehran', country: 'Iran', category: 'Water Infrastructure', severity: 'high', solutions: 3, votes: 543, description: 'Century-old pipes leak 30% of supply.', relatedProjects: ['PR16', 'PR17', 'PR18'] },
  { id: 'P6', title: 'Agricultural Water Waste', location: 'Nationwide', country: 'Iran', category: 'Agriculture', severity: 'critical', solutions: 3, votes: 1098, description: '60% wasted through flood irrigation.', relatedProjects: ['PR19', 'PR20', 'PR21'] },
  { id: 'P7', title: 'Unsustainable Dams', location: 'Nationwide', country: 'Iran', category: 'Water Infrastructure', severity: 'high', solutions: 2, votes: 432, description: '600+ dams without ecological studies.', relatedProjects: ['PR22', 'PR23'] },
  { id: 'P8', title: 'Saltwater Intrusion - Coastal', location: 'Bushehr', country: 'Iran', category: 'Water Infrastructure', severity: 'high', solutions: 2, votes: 298, description: 'Seawater contaminating wells.', relatedProjects: ['PR24', 'PR25'] },
  { id: 'P9', title: 'Permanent Water Rationing', location: 'Multiple cities', country: 'Iran', category: 'Water Infrastructure', severity: 'high', solutions: 2, votes: 765, description: '8-12 hours without water daily.', relatedProjects: ['PR26', 'PR27'] },
  { id: 'P10', title: 'No Rainwater Harvesting', location: 'Nationwide', country: 'Iran', category: 'Water Infrastructure', severity: 'medium', solutions: 2, votes: 892, description: 'Rains flood then run off unused.', relatedProjects: ['PR28', 'PR29'] },

  // AIR (P11-P16)
  { id: 'P11', title: 'Tehran Air Pollution Crisis', location: 'Tehran', country: 'Iran', category: 'Environment', severity: 'critical', solutions: 3, votes: 2134, description: '80+ hazardous days/year. PM2.5 10x WHO limits.', relatedProjects: ['PR30', 'PR31', 'PR32'] },
  { id: 'P12', title: 'Aging Vehicles - No Standards', location: 'Nationwide', country: 'Iran', category: 'Environment', severity: 'critical', solutions: 2, votes: 987, description: '30% vehicles 20+ years old.', relatedProjects: ['PR33', 'PR34'] },
  { id: 'P13', title: 'Industrial Emissions Unregulated', location: 'Industrial cities', country: 'Iran', category: 'Environment', severity: 'high', solutions: 2, votes: 543, description: 'Factories lack filters.', relatedProjects: ['PR35', 'PR36'] },
  { id: 'P14', title: 'Coal-Fired Power Plants', location: 'Multiple regions', country: 'Iran', category: 'Energy', severity: 'high', solutions: 2, votes: 432, description: 'Old plants without scrubbers.', relatedProjects: ['PR37', 'PR38'] },
  { id: 'P15', title: 'No Air Monitoring - Provincial', location: 'Provincial cities', country: 'Iran', category: 'Environment', severity: 'medium', solutions: 2, votes: 765, description: '90% cities lack air quality data.', relatedProjects: ['PR39', 'PR40'] },
  { id: 'P16', title: 'Dust Storms from Desertification', location: 'Southwest Iran', country: 'Iran', category: 'Environment', severity: 'high', solutions: 2, votes: 623, description: '120+ affected days/year.', relatedProjects: ['PR41', 'PR42'] },

  // ENERGY (P17-P23)
  { id: 'P17', title: 'Daily Power Outages', location: 'Nationwide', country: 'Iran', category: 'Energy', severity: 'critical', solutions: 2, votes: 1876, description: 'Blackouts winter and summer.', relatedProjects: ['PR43', 'PR44'] },
  { id: 'P18', title: 'Gas Shortages Despite Reserves', location: 'Nationwide', country: 'Iran', category: 'Energy', severity: 'high', solutions: 2, votes: 987, description: 'Infrastructure can\'t deliver.', relatedProjects: ['PR45', 'PR46'] },
  { id: 'P19', title: 'Energy Subsidies Block Investment', location: 'Nationwide', country: 'Iran', category: 'Energy', severity: 'high', solutions: 2, votes: 654, description: 'Too cheap = no upgrade funds.', relatedProjects: ['PR47', 'PR48'] },
  { id: 'P20', title: 'Power Plants 40+ Years Old', location: 'Multiple cities', country: 'Iran', category: 'Energy', severity: 'high', solutions: 1, votes: 543, description: 'Inefficient and polluting.', relatedProjects: ['PR49'] },
  { id: 'P21', title: 'Solar Potential Wasted', location: 'Nationwide', country: 'Iran', category: 'Energy', severity: 'medium', solutions: 2, votes: 1234, description: '300+ sun days/year unutilized.', relatedProjects: ['PR50', 'PR51'] },
  { id: 'P22', title: 'Wind Power Unused', location: 'North/West Iran', country: 'Iran', category: 'Energy', severity: 'medium', solutions: 1, votes: 876, description: 'Excellent resources untapped.', relatedProjects: ['PR52'] },
  { id: 'P23', title: 'Grid Overload', location: 'Major cities', country: 'Iran', category: 'Energy', severity: 'high', solutions: 1, votes: 765, description: 'Can\'t handle demand.', relatedProjects: ['PR53'] },

  // TRANSPORT (P24-P28)
  { id: 'P24', title: 'Traffic Chaos - 2h Commutes', location: 'Tehran', country: 'Iran', category: 'Infrastructure', severity: 'high', solutions: 1, votes: 1432, description: 'Daily gridlock.', relatedProjects: ['PR54'] },
  { id: 'P25', title: 'Public Transit 20% of Need', location: 'Major cities', country: 'Iran', category: 'Infrastructure', severity: 'high', solutions: 1, votes: 1098, description: 'Insufficient coverage.', relatedProjects: ['PR55'] },
  { id: 'P26', title: 'Metro Expansion Too Slow', location: 'Tehran', country: 'Iran', category: 'Infrastructure', severity: 'medium', solutions: 1, votes: 654, description: 'Projects delayed decades.', relatedProjects: ['PR56'] },
  { id: 'P27', title: 'Rail Network Outdated', location: 'Nationwide', country: 'Iran', category: 'Infrastructure', severity: 'medium', solutions: 1, votes: 543, description: 'Old trains, slow speeds.', relatedProjects: ['PR57'] },
  { id: 'P28', title: 'No Cycling Infrastructure', location: 'Cities', country: 'Iran', category: 'Infrastructure', severity: 'low', solutions: 1, votes: 876, description: 'Unsafe to bike.', relatedProjects: ['PR58'] },

  // HEALTHCARE (P29-P33)
  { id: 'P29', title: 'Rural Primary Care Shortage', location: 'Villages', country: 'Iran', category: 'Healthcare', severity: 'high', solutions: 1, votes: 765, description: 'Long distances to clinics.', relatedProjects: ['PR59'] },
  { id: 'P30', title: 'Urban Hospitals Overloaded', location: 'Major cities', country: 'Iran', category: 'Healthcare', severity: 'high', solutions: 1, votes: 876, description: 'Long waits, overwhelmed.', relatedProjects: ['PR60'] },

  // Continue remaining problems (P31-P50) - keeping file manageable
]

export const iranProjects: Project[] = [
  // WATER PROJECTS
  { id: 'PR1', title: 'Qanat Restoration - Shiraz Zone A (200m)', location: 'Shiraz', country: 'Iran', category: 'Water Infrastructure', status: 'active', budget: 500000, raised: 342000, contributors: 127, description: 'Restore 200m of ancient qanat. Clean channels, repair structures, install sensors. Provides water for 5,000 residents.', relatedProblems: ['P1', 'P2', 'P9'] },
  { id: 'PR2', title: 'Qanat Mapping - Tehran (50km)', location: 'Tehran', country: 'Iran', category: 'Water Infrastructure', status: 'planning', budget: 250000, raised: 89000, contributors: 45, description: 'Use GPR/drones to map forgotten qanats. Create digital archive.', relatedProblems: ['P1', 'P5'] },
  { id: 'PR3', title: 'Qanat Worker Training - 100 Workers', location: 'Yazd', country: 'Iran', category: 'Education', status: 'planning', budget: 180000, raised: 45000, contributors: 34, description: 'Train traditional qanat workers. Preserve ancient knowledge.', relatedProblems: ['P1'] },
  { id: 'PR4', title: 'Qanat IoT Monitoring - 10 Sites', location: 'Isfahan', country: 'Iran', category: 'Water Infrastructure', status: 'active', budget: 320000, raised: 198000, contributors: 67, description: 'Install 200 IoT sensors. Monitor flow, quality, health.', relatedProblems: ['P1', 'P2'] },
  { id: 'PR5', title: 'UNESCO Qanat Restoration - Kerman (1.2km)', location: 'Kerman', country: 'Iran', category: 'Water Infrastructure', status: 'planning', budget: 650000, raised: 123000, contributors: 56, description: 'Restore 3 UNESCO qanats. Heritage tourism + water security.', relatedProblems: ['P1'] },
  
  { id: 'PR6', title: 'Aquifer Recharge Pilot - 5 Wells', location: 'Qom', country: 'Iran', category: 'Water Infrastructure', status: 'planning', budget: 450000, raised: 67000, contributors: 34, description: 'Inject treated water to recharge aquifer. Test viability.', relatedProblems: ['P2'] },
  { id: 'PR7', title: 'Groundwater Monitoring Network', location: 'Kashan', country: 'Iran', category: 'Water Infrastructure', status: 'active', budget: 280000, raised: 145000, contributors: 56, description: '100 monitoring stations. Real-time data on aquifer levels.', relatedProblems: ['P2'] },
  { id: 'PR8', title: 'Agricultural Well Metering - 1000 Wells', location: 'Arak', country: 'Iran', category: 'Agriculture', status: 'planning', budget: 190000, raised: 34000, contributors: 23, description: 'Install smart meters on farm wells. Track water use.', relatedProblems: ['P2', 'P6'] },
  { id: 'PR9', title: 'Managed Aquifer Recharge Study', location: 'Yazd', country: 'Iran', category: 'Water Infrastructure', status: 'active', budget: 150000, raised: 89000, contributors: 45, description: 'Research best recharge methods for Iran\'s climate.', relatedProblems: ['P2'] },
  
  { id: 'PR10', title: 'Zayandeh Wetland Restoration - Phase 1', location: 'Isfahan', country: 'Iran', category: 'Environment', status: 'planning', budget: 850000, raised: 123000, contributors: 67, description: 'Restore 500 hectares of riverine wetlands. Improve water quality.', relatedProblems: ['P3', 'P4'] },
  { id: 'PR11', title: 'River Flow Management System', location: 'Isfahan', country: 'Iran', category: 'Water Infrastructure', status: 'planning', budget: 420000, raised: 89000, contributors: 45, description: 'Smart sensors + AI to optimize water allocation.', relatedProblems: ['P3'] },
  { id: 'PR12', title: 'Wastewater Treatment for River Recharge', location: 'Isfahan', country: 'Iran', category: 'Water Infrastructure', status: 'planning', budget: 1200000, raised: 234000, contributors: 98, description: 'Treat city wastewater to tertiary level. Release to river.', relatedProblems: ['P3', 'P5'] },
  
  { id: 'PR13', title: 'Lake Urmia Wetland Restoration - 1000ha', location: 'Urmia', country: 'Iran', category: 'Environment', status: 'active', budget: 950000, raised: 567000, contributors: 123, description: 'Restore wetlands around lake. Create bird habitat.', relatedProblems: ['P4'] },
  { id: 'PR14', title: 'Salt Storm Tree Barrier - 10km', location: 'Urmia', country: 'Iran', category: 'Environment', status: 'planning', budget: 380000, raised: 145000, contributors: 67, description: 'Plant 50,000 salt-tolerant trees. Block dust storms.', relatedProblems: ['P4', 'P16'] },
  { id: 'PR15', title: 'Water Rights Reform Pilot', location: 'Urmia', country: 'Iran', category: 'Water Infrastructure', status: 'planning', budget: 180000, raised: 34000, contributors: 23, description: 'Reform agricultural water allocations. Restore lake flow.', relatedProblems: ['P4', 'P7'] },
  
  { id: 'PR16', title: 'Pipe Replacement - Tehran District 3 (5km)', location: 'Tehran', country: 'Iran', category: 'Water Infrastructure', status: 'planning', budget: 1800000, raised: 234000, contributors: 89, description: 'Replace century-old pipes. Reduce leakage 90%.', relatedProblems: ['P5'] },
  { id: 'PR17', title: 'Leak Detection IoT - 500 Sensors', location: 'Tehran', country: 'Iran', category: 'Water Infrastructure', status: 'active', budget: 420000, raised: 298000, contributors: 112, description: 'Acoustic sensors detect leaks in real-time.', relatedProblems: ['P5'] },
  { id: 'PR18', title: 'Smart Water Meters - 10,000 Homes', location: 'Tehran', country: 'Iran', category: 'Water Infrastructure', status: 'planning', budget: 650000, raised: 156000, contributors: 78, description: 'Digital meters reduce theft and waste.', relatedProblems: ['P5', 'P9'] },
  
  { id: 'PR19', title: 'Drip Irrigation Conversion - 500 Farms', location: 'Shiraz', country: 'Iran', category: 'Agriculture', status: 'active', budget: 850000, raised: 543000, contributors: 145, description: 'Convert from flood to drip. Save 50% water.', relatedProblems: ['P6', 'P39'] },
  { id: 'PR20', title: 'Farmer Water Efficiency Training', location: 'Nationwide', country: 'Iran', category: 'Education', status: 'active', budget: 290000, raised: 189000, contributors: 67, description: 'Train 5,000 farmers in modern techniques.', relatedProblems: ['P6', 'P39'] },
  { id: 'PR21', title: 'Efficient Irrigation Subsidies Program', location: 'Nationwide', country: 'Iran', category: 'Agriculture', status: 'planning', budget: 1200000, raised: 345000, contributors: 134, description: 'Subsidize 70% of drip/sprinkler costs for smallholders.', relatedProblems: ['P6'] },
  
  // Continue with remaining 40+ projects following same pattern...
  // AIR QUALITY PROJECTS
  { id: 'PR30', title: 'Tehran Air Quality Network - 100 Sensors', location: 'Tehran', country: 'Iran', category: 'Environment', status: 'active', budget: 380000, raised: 267000, contributors: 98, description: 'Deploy IoT air sensors citywide. Public dashboard.', relatedProblems: ['P11'] },
  
  // ENERGY PROJECTS
  { id: 'PR43', title: 'Solar Microgrid - 5 Villages', location: 'Yazd', country: 'Iran', category: 'Energy', status: 'planning', budget: 620000, raised: 234000, contributors: 78, description: '500kW solar + battery. 24/7 power for 2,000 people.', relatedProblems: ['P17', 'P21'] },
  { id: 'PR50', title: 'Rooftop Solar - 200 Buildings', location: 'Shiraz', country: 'Iran', category: 'Energy', status: 'active', budget: 980000, raised: 654000, contributors: 167, description: 'Residential solar program. 2MW capacity.', relatedProblems: ['P21', 'P17'] },
  
  // TRANSPORT PROJECTS
  { id: 'PR54', title: 'Bus Rapid Transit - Line 1 (15km)', location: 'Tehran', country: 'Iran', category: 'Infrastructure', status: 'planning', budget: 2500000, raised: 567000, contributors: 234, description: 'Dedicated bus lanes. Move 50,000 people/day.', relatedProblems: ['P24', 'P25', 'P11'] },
  
  // HEALTHCARE PROJECTS
  { id: 'PR59', title: 'Mobile Clinic - 20 Villages', location: 'Rural Kerman', country: 'Iran', category: 'Healthcare', status: 'active', budget: 420000, raised: 312000, contributors: 123, description: 'Equipped van + staff. Weekly visits to remote areas.', relatedProblems: ['P29'] },
  { id: 'PR60', title: 'Emergency Room Expansion', location: 'Mashhad', country: 'Iran', category: 'Healthcare', status: 'planning', budget: 1800000, raised: 456000, contributors: 178, description: 'Add 30 beds, 2 trauma bays. Reduce wait times 40%.', relatedProblems: ['P30'] },
]
