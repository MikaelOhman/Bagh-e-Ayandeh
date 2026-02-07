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
  relatedProblems: string[] // Problem IDs this project helps solve
}

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
  relatedProjects: string[] // Project IDs working on this
}
