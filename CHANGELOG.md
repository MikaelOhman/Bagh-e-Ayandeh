# Open Earth - Changelog

## 2026-02-07 - Major Update: Filter System & Multi-Country Support

### ✅ Added

**1. City/Region Filter**
- Added "City/Region" filter to `/projects` page
- Added "City/Region" filter to `/problems` page
- Filters now include: Country, City/Region, Category, Status/Severity, Budget

**2. Multi-Country Data**
- **Projects:** 15 projects across 4 countries
  - Iran: Shiraz, Tehran, Isfahan
  - Sweden: Stockholm
  - Ukraine: Kyiv
  - Morocco: Marrakech
  
- **Problems:** 17 problems across 4 countries
  - More diverse categories: Water, Environment, Healthcare, Education, Economy, Infrastructure, Social, Agriculture

**3. Updated Categories**
- Projects: Added "Infrastructure" category
- Problems: Added "Infrastructure" and "Social" categories
- Budget ranges: Extended to include "2M-5M" and "5M+"

### ♻️ Changed

**Navigation Updates:**
- Header: Removed "Explore" and "Iran" links
- Header: Added "Projects" and "Problems" links
- Footer: Replaced "Iran 🇮🇷" link with "All Problems" link
- All navigation now points to filter-based pages

**Homepage:**
- Removed "HowItWorks" component from homepage
- Cleaner focus on Hero + FeaturedProjects + CallToAction

**How It Works:**
- Moved point system explanation to dedicated `/how-it-works` page
- Point system now treated as background mechanic, not front-page feature

### 🗑️ Removed
- Removed separate city/country pages (e.g., `/shiraz`, `/iran`)
- System now fully filter-based for scalability

### 📊 Data Summary
- **15 projects** across 6 cities in 4 countries
- **17 problems** across 6 cities in 4 countries
- **9 categories** total
- **Filter options:** Country (5), City (7), Category (9), Status (3), Severity (3), Budget (6)

### 🎯 Architecture Approach
Instead of creating individual pages for each city/country (doesn't scale), 
we now use a unified filter system that allows users to:
- Browse all projects/problems
- Filter by country, city, category, etc.
- Future: Deep-link to filtered views (e.g., `/projects?city=shiraz`)

This scales better as we add more countries and cities.

---

## Next Steps
- [ ] Add map view on homepage linking to filtered results
- [ ] Implement URL query parameters for filters
- [ ] Add individual project detail pages
- [ ] Add user profiles with point display
- [ ] Backend integration (Supabase)
