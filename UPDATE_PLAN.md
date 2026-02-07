# Open Earth - Iran Data Update Plan

## Strategy: "Bite-sized" Projects

Instead of huge projects like "Solve Iran's Water Crisis" ($10B), we create small, concrete, doable projects:
- "Restore 200m of Qanat in Shiraz Zone A" ($500k)
- "Install 50 Air Quality Sensors in Tabriz" ($120k)
- "Renovate School District 3 - 400 students" ($800k)

## Structure

**Problems (50 total)**
- Each problem is a major challenge
- Has multiple "bite-sized" projects solving parts of it
- Projects can solve multiple problems

**Projects (~150 total)**
- Small, concrete, measurable
- Clear budget, timeline, impact
- Link to 1-3 problems they help solve

## Implementation Steps

1. ✅ Create type definitions (`lib/types.ts`)
2. 🔄 Create complete dataset (20 problems + 60 projects initially)
3. Update `/projects` page to show `relatedProblems` links
4. Update `/problems` page to show `relatedProjects` count
5. Add individual problem/project detail pages
6. Add filtering by problem → projects that solve it

## Example Linkage

**Problem:** "Qanat System Collapsing" (P1)

**Projects solving it:**
- PR1: Restore Qanat Zone A - Shiraz (200m)
- PR2: Qanat Mapping - Tehran
- PR3: Qanat Worker Training - Yazd
- PR4: IoT Monitoring - Isfahan
- PR5: UNESCO Restoration - Kerman

**Cross-linking:**
- PR1 also helps: P2 (Groundwater), P9 (Water Rationing)
- PR4 also helps: P2 (Groundwater monitoring)

This creates a network where:
- Small projects add up to solve big problems
- Projects can have multi-problem impact
- Community can see concrete progress

## Next: Create the data files

Mikael - should I:
A) Create full 50 problems + 150 projects now (will take time to write)
B) Create 20 problems + 60 projects as working example first
C) You want to help define the problems/projects together?
