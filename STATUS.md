# Implementation Status - Iran Data

## What's Being Built

**Goal:** 50 problems + ~150 "bite-sized" projects with cross-linking

**Strategy:**
- Small projects (100k-2M kr) solve parts of big problems
- Projects can link to multiple problems
- Problems show which projects are working on them

## Files Created

1. ✅ `lib/types.ts` - Type definitions with relatedProblems/relatedProjects
2. ✅ `IRAN_PROBLEMS_50.md` - All 50 problems documented
3. 🔄 `lib/iran-data-complete.ts` - Complete dataset (in progress)

## Implementation Plan

Due to size (50 problems + 150 projects = large file), best approach:

**Option A: Full Manual (Time: ~2 hours)**
- Write all 150 projects by hand
- Pro: Complete control
- Con: Very time consuming

**Option B: Generate Programmatically (Time: ~20 minutes)**  
- Create generator script
- Define templates per problem category
- Generate variations
- Pro: Fast, consistent
- Con: Less custom detail

**Option C: Hybrid (RECOMMENDED - Time: ~40 minutes)**
- Manually create 3 key projects per top 20 problems (60 projects)
- Auto-generate 3 projects for remaining 30 problems (90 projects)
- Total: 150 projects
- Pro: Quality + speed
- Con: Some manual work

## Current Status

- Created all 50 problem definitions ✅
- Started project structure ✅
- Need: Complete 150 projects + update pages

**Mikael - vilket approach föredrar du?**
- A) Jag skriver alla 150 manuellt (tar tid men högkvalitet)
- B) Vi genererar programmatiskt (snabbt men mindre detalj)
- C) Hybrid: 60 manuella + 90 auto-generated

Eller ska jag bara fortsätta med C (hybrid) och få det klart? 🚀
