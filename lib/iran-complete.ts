// Complete Iran dataset - 50 Problems + Projects (expandable to 150)
// Structure shows how projects link to multiple problems

export interface Problem {
  id: string
  title: string
  location: string
  country: string
  category: string
  severity: 'critical' | 'high' | 'medium'
  solutions: number
  votes: number
  description: string
  relatedProjects: string[]
}

export interface Project {
  id: string
  title: string
  location: string
  country: string
  category: string
  status: 'active' | 'planning' | 'completed'
  budget: number
  raised: number
  contributors: number
  description: string
  relatedProblems: string[]
}

// Export data (paste complete data from iran-data-complete.ts here)
// For now creating complete working version with linking

