# SAIT Website Redesign Challenge --- Product Requirements Document

## 1. Product Overview

**Product:** SAIT Website Redesign Prototype\
**Organisation:** Students Association of Information Technology (SAIT),
Division of Information Technology, School of Engineering (SOE), CUSAT\
**Product Type:** Modern, responsive frontend website prototype\
**Primary Goal:** Redesign the existing SAIT website to make information
easier to discover, better organised, more engaging, and visually
modern.

This PRD is derived from the official **SAIT Website Redesign Challenge
--- Official Guidelines & Requirements**. The challenge allows
participants freedom over layout, visual style, colour palette,
typography, and interactions, while requiring the core sections and
features defined in the guidelines.

> **Source note:** Actual department data is not required. Mock data,
> placeholder images, sample events, fictional profiles, and sample
> statistics may be used.

------------------------------------------------------------------------

## 2. Challenge Context

SAIT is organising a website redesign challenge for students of the
Information Technology Division at SOE, CUSAT.

The prototype must:

-   Present SAIT and the IT Department clearly.
-   Improve information organisation and accessibility.
-   Provide clear navigation.
-   Work across mobile, tablet, and desktop.
-   Include the required SAIT, department, people, events, career,
    alumni, achievements, activity logger, notification, and contact
    experiences.
-   Demonstrate modern interaction and visual design.
-   Be published as a live website and accompanied by a public GitHub
    repository.

### Challenge Constraints

  -----------------------------------------------------------------------
  Requirement                         Specification
  ----------------------------------- -----------------------------------
  Eligibility                         1st, 2nd, and 3rd-year IT students

  Team size                           Individual or up to 2 members

  Start date                          4 September 2026

  Submission deadline                 12 September 2026, 11:59 PM

  Required deliverables               Public GitHub repository + live
                                      hosted website

  Hosting                             Any suitable platform such as
                                      Vercel, Netlify, or GitHub Pages

  Data                                Mock/placeholder data is permitted

  Backend                             Not required for the Activity
                                      Logger; UI/UX is the primary
                                      requirement

  Frontend technology                 Any suitable frontend technology
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# 3. Product Goals

## Primary Goals

1.  Create a modern identity for the SAIT website.
2.  Make important information easy to find.
3.  Provide intuitive navigation between major sections.
4.  Showcase SAIT members, teams, activities, achievements, alumni, and
    events.
5.  Provide a polished Student Activity Logger experience.
6.  Deliver a responsive experience across desktop, tablet, and mobile.
7.  Use engaging interactions, animations, transitions, and hover states
    where appropriate.
8.  Maintain a clean, modular, reusable frontend architecture.

## Secondary Goals

-   Make SAIT feel active and student-focused.
-   Make events and announcements discoverable from a central location.
-   Present placement and career information in an understandable
    format.
-   Create a strong visual hierarchy without making pages feel
    cluttered.
-   Leave room for future backend integration.

------------------------------------------------------------------------

# 4. Target Users

The official challenge does not define detailed user personas. The
following user groups are therefore derived from the required website
sections.

## 4.1 Students

Primary use cases:

-   Find upcoming SAIT events.
-   View announcements and deadlines.
-   Explore SAIT teams and members.
-   Submit and track activities.
-   View achievements and leaderboards.
-   Access academic and career resources.

## 4.2 Prospective / General Visitors

Primary use cases:

-   Understand SAIT and the IT Department.
-   Learn about the department's mission and history.
-   Discover events, achievements, alumni, and activities.
-   Find contact and location information.

## 4.3 Faculty / Administration

Potential use cases:

-   Present department and staff information.
-   Highlight department achievements.
-   Provide academic resources and notices.

------------------------------------------------------------------------

# 5. Information Architecture

The website should provide clear navigation to the required sections.

### Suggested top-level structure

``` text
Home
├── About
│   ├── IT Department
│   ├── SAIT
│   ├── Vision & Mission
│   ├── History
│   ├── Faculty & Administration
│   └── Academic Resources
│
├── People
│   ├── Executive Committee
│   ├── Tech Team
│   ├── Media Team
│   ├── Events Team
│   ├── PR Team
│   └── Content Team
│
├── Events
│   ├── Upcoming
│   ├── Past Events
│   ├── Event Archive
│   └── Flagship Events
│
├── Placements & Careers
│   ├── Placement Highlights
│   ├── Recruiters
│   └── Career Resources
│
├── Alumni
│   ├── Alumni Profiles
│   └── Alumni Spotlights
│
├── Achievements
│   └── Hall of Fame
│
├── Activity Logger
│   ├── Submit Activity
│   ├── My Activities
│   └── Activity Feed / Dashboard
│
├── Announcements
│   ├── Announcements
│   ├── Event Updates
│   └── Deadlines
│
└── Contact
    ├── Contact Information
    ├── Contact Form
    ├── Social Links
    └── SOE Location / Map
```

The exact navigation structure is intentionally flexible because the
official guidelines allow participants to determine the layout and
navigation.

------------------------------------------------------------------------

# 6. Functional Requirements

## FR-01 --- Home / Landing Page

The homepage must introduce SAIT and the IT Department.

### Required components

-   Hero section.
-   SAIT / IT Department branding.
-   Key statistics or highlights.
-   Quick links or CTA buttons.
-   Clear navigation.

### Suggested interactions

-   Animated hero entrance.
-   CTA hover states.
-   Quick-access cards.
-   Scroll-based section transitions.

------------------------------------------------------------------------

## FR-02 --- About Department & SAIT

The About experience must clearly present the department and
association.

### Required content

-   Vision.
-   Mission.
-   Brief history of the IT Department.
-   Brief history of SAIT.
-   Faculty and Administration directory.
-   HoD information.
-   Staff coordinator information.
-   Quick links to important academic resources.

### Profile requirements

Faculty/staff cards may contain:

-   Name.
-   Role/designation.
-   Department/team.
-   Optional profile image.
-   Optional relevant links.

------------------------------------------------------------------------

## FR-03 --- Association & People

The website must showcase the people and teams behind SAIT.

### Required sections

-   Executive Committee.
-   Tech team.
-   Media team.
-   Events team.
-   PR team.
-   Content team.

### Member cards

Profile cards should support relevant information such as:

-   Name.
-   Position/role.
-   Team.
-   Profile image.
-   Optional social/contact links.

The official guidelines leave the profile presentation open to the
participant's design approach.

------------------------------------------------------------------------

## FR-04 --- Events & Activities

Create a central event discovery experience.

### Upcoming events

Each event should support:

-   Event name.
-   Date.
-   Time.
-   Venue.
-   Registration details.

### Past events

Provide:

-   Past event listing.
-   Organised event archive.
-   Event information.

### Flagship events

Provide a dedicated way to highlight major SAIT events.

### Filtering

Where useful, provide event categories or filters.

### Suggested event card

``` text
┌────────────────────────────────────┐
│ EVENT IMAGE                        │
│                                    │
│ Event Name                         │
│ Date · Time                        │
│ Venue                              │
│                                    │
│ Category                           │
│ [Register]                         │
└────────────────────────────────────┘
```

------------------------------------------------------------------------

## FR-05 --- Placements & Careers

The website must present career and placement information in an
easy-to-understand format.

### Required content

-   Placement statistics or highlights.
-   Recruiter/company information.
-   Career resources.
-   Placement resources.

### UI direction

Use visual statistics/cards rather than presenting all information as
dense text.

------------------------------------------------------------------------

## FR-06 --- Alumni

Create a dedicated alumni area.

### Required content

-   Alumni profiles or spotlights.
-   Graduation batch/year where relevant.
-   Notable career achievements or contributions.

### Suggested UI

-   Alumni profile cards.
-   Spotlight section.
-   Batch/year filter if useful.

------------------------------------------------------------------------

## FR-07 --- Achievements / Hall of Fame

Highlight student and department accomplishments.

### Supported achievement categories

-   Hackathon wins.
-   Paper publications.
-   Technical competitions.
-   Academic achievements.

### Suggested presentation

Use an achievement timeline, cards, or a visually distinctive Hall of
Fame layout.

------------------------------------------------------------------------

# 7. Student Activity Logger

The Activity Logger is a key UX requirement. The official guidelines
explicitly state that it is primarily a UI/UX requirement and that
actual backend functionality is not required.

## 7.1 Student View

The student should be able to submit an activity through a dedicated
form.

### Required fields

-   Activity/event name.
-   Date.
-   Activity type.
-   Role.
-   Proof upload or proof link.

### Submission states

The interface should represent:

-   Submitted.
-   Pending/review state.
-   Verified.
-   Rejected, if the prototype chooses to demonstrate this state.

### Activity history

Students should be able to see their previous submissions and their
status.

### Example flow

``` text
Activity Logger
      │
      ▼
Submit Activity
      │
      ├── Event Name
      ├── Date
      ├── Type
      ├── Role
      └── Proof Upload / Link
      │
      ▼
Submit
      │
      ▼
Submission Status
      │
      ├── Pending
      ├── Verified
      └── Rejected
      │
      ▼
Activity History
```

## 7.2 Dashboard / Feed View

The dashboard/feed should include:

-   Verified activities.
-   Achievement feed.
-   Statistics and/or leaderboard.
-   Filters/categories where useful.

### Example dashboard information

``` text
My Activity
────────────────────────────
Total Activities       18
Verified               14
Pending                 3
Achievements           7

Recent Activity
────────────────────────────
Hackathon 2026         ✓ Verified
Tech Workshop          ✓ Verified
Paper Presentation     ◷ Pending
```

The above values are examples only and should be treated as mock data.

------------------------------------------------------------------------

# 8. Notifications & Announcements

Create a central place for important updates.

### Required content

-   Announcements.
-   Event updates.
-   Registration reminders.
-   Deadline reminders.
-   Other relevant department/SAIT notices.

### Suggested UI

A notification centre can use:

-   Priority indicators.
-   Date/time.
-   Category tags.
-   Read/unread states.
-   Links to related events or resources.

------------------------------------------------------------------------

# 9. Footer & Contact

The footer must provide essential information without feeling cluttered.

### Required content

-   SAIT contact information.
-   Department contact information.
-   Social media links.
-   Contact form UI.
-   SOE location/map.
-   Important navigation links.

### Contact form

Suggested fields:

-   Name.
-   Email.
-   Subject.
-   Message.
-   Submit button.

The guidelines require the contact form as a UI; actual backend
submission is not specified as mandatory.

------------------------------------------------------------------------

# 10. Visual Design Requirements

The official guidelines provide freedom over visual style, colour
palette, typography, layout, and interactions.

The visual system should therefore be designed around a consistent
identity.

## Design principles

-   Modern.
-   Responsive.
-   Clear visual hierarchy.
-   Consistent spacing.
-   Strong typography.
-   Accessible navigation.
-   Visually polished components.
-   Consistent interaction states.

## UI states

Interactive components should account for:

-   Default.
-   Hover.
-   Focus.
-   Active.
-   Disabled.
-   Loading, where relevant.
-   Success/error states for prototype interactions.

------------------------------------------------------------------------

# 11. Responsive Design

The website must work well across:

-   Mobile.
-   Tablet.
-   Desktop.

## Responsive requirements

### Mobile

-   Compact navigation.
-   Touch-friendly controls.
-   Single-column content where appropriate.
-   Readable typography.
-   No horizontal overflow.

### Tablet

-   Adaptive grids.
-   Flexible card layouts.
-   Navigation appropriate to available width.

### Desktop

-   Multi-column layouts where useful.
-   Expanded navigation.
-   Dashboard-style layouts where appropriate.
-   Effective use of whitespace.

------------------------------------------------------------------------

# 12. Interactivity & Motion

The official guidelines encourage animations, transitions, hover
effects, and other modern web features.

Potential interactions include:

-   Smooth page/section transitions.
-   Card hover effects.
-   Animated statistics.
-   Scroll reveal animations.
-   Event filtering.
-   Search/filter interactions.
-   Activity status transitions.
-   Modal/detail views.
-   Mobile navigation transitions.

Motion should support usability rather than make navigation difficult.

------------------------------------------------------------------------

# 13. Data Requirements

The prototype does not require actual department data.

### Mock data may be used for:

-   Student profiles.
-   Faculty profiles.
-   Staff profiles.
-   Events.
-   Statistics.
-   Achievements.
-   Alumni.
-   Recruiters.
-   Announcements.
-   Activity submissions.

### Data architecture

Mock data should be separated from UI components where practical.

Example:

``` text
src/
├── data/
│   ├── events.*
│   ├── members.*
│   ├── alumni.*
│   ├── achievements.*
│   ├── announcements.*
│   └── activities.*
```

This supports easier replacement with real data later.

------------------------------------------------------------------------

# 14. Technical Requirements

The official challenge permits any suitable frontend technology.

Examples listed in the guidelines:

-   HTML/CSS/JavaScript.
-   React.
-   Next.js.
-   Vue.
-   Svelte.
-   Tailwind CSS.

## Recommended architecture

The implementation should use:

-   Reusable components.
-   Clear separation of concerns.
-   Centralised mock data.
-   Reusable UI primitives.
-   Modular page/feature structure.
-   Responsive styling.
-   Consistent naming conventions.

The technology choice should remain aligned with the participant's
preferred frontend workflow.

------------------------------------------------------------------------

# 15. Suggested Component Architecture

``` text
App
├── Layout
│   ├── Navbar
│   ├── PageContainer
│   └── Footer
│
├── Home
│   ├── Hero
│   ├── Stats
│   ├── QuickLinks
│   └── FeaturedEvents
│
├── About
│   ├── VisionMission
│   ├── History
│   ├── FacultyDirectory
│   └── AcademicResources
│
├── People
│   ├── ExecutiveCommittee
│   ├── TeamSection
│   └── MemberCard
│
├── Events
│   ├── EventFilters
│   ├── EventCard
│   ├── UpcomingEvents
│   ├── PastEvents
│   └── EventArchive
│
├── Careers
│   ├── PlacementStats
│   ├── Recruiters
│   └── CareerResources
│
├── Alumni
│   ├── AlumniCard
│   └── AlumniSpotlight
│
├── Achievements
│   ├── AchievementCard
│   └── HallOfFame
│
├── ActivityLogger
│   ├── ActivityForm
│   ├── ActivityHistory
│   ├── ActivityStatus
│   └── ActivityDashboard
│
├── Announcements
│   ├── AnnouncementCard
│   └── NotificationCenter
│
└── Contact
    ├── ContactForm
    ├── ContactInfo
    └── LocationMap
```

This is a suggested architecture rather than a mandatory implementation
structure.

------------------------------------------------------------------------

# 16. Accessibility & Usability

Although the official guidelines do not prescribe a detailed
accessibility specification, usability should be treated as a core
design consideration.

Recommended practices:

-   Clear heading hierarchy.
-   Adequate colour contrast.
-   Visible keyboard focus states.
-   Accessible form labels.
-   Descriptive button labels.
-   Meaningful link text.
-   Responsive touch targets.
-   Avoid relying solely on colour to communicate status.
-   Provide alternative text for meaningful images.

------------------------------------------------------------------------

# 17. SEO / Discoverability

For a public prototype, the implementation should provide basic
discoverability.

Recommended:

-   Descriptive page titles.
-   Useful meta descriptions.
-   Semantic HTML.
-   Meaningful URLs/routes.
-   Appropriate image alt text.
-   Social sharing metadata where practical.

These are implementation recommendations rather than explicit challenge
requirements.

------------------------------------------------------------------------

# 18. Performance Requirements

The site should feel fast and responsive.

Recommended:

-   Optimise images.
-   Lazy-load non-critical images.
-   Avoid unnecessary JavaScript.
-   Reuse components.
-   Minimise large client-side bundles where possible.
-   Avoid excessive animation.
-   Test on mobile-sized screens and slower connections.

------------------------------------------------------------------------

# 19. Innovation Opportunities

The official challenge explicitly encourages useful and creative extra
features beyond the required sections.

Possible extensions include:

-   Global search.
-   Unified command/search interface.
-   Event calendar view.
-   Advanced event filtering.
-   Achievement timeline.
-   Interactive Hall of Fame.
-   Student profile/dashboard.
-   Activity streaks.
-   Activity analytics.
-   Smart announcement centre.
-   Department resource hub.
-   Interactive team directory.
-   Alumni search/filter.
-   Theme switcher.
-   Keyboard shortcuts.
-   Offline-friendly static prototype behaviour.

These are optional and should not replace the required sections.

------------------------------------------------------------------------

# 20. Acceptance Criteria

The prototype is considered complete when the following are
demonstrated:

## Core Website

-   [ ] Home/Landing page exists.
-   [ ] SAIT and IT Department branding is represented.
-   [ ] Key statistics/highlights are present.
-   [ ] Quick links/CTAs are present.
-   [ ] Navigation is clear.

## About

-   [ ] Vision and mission are included.
-   [ ] Department and SAIT history are represented.
-   [ ] Faculty/administration directory exists.
-   [ ] HoD and staff coordinator information can be represented.
-   [ ] Academic resource links are included.

## People

-   [ ] Executive Committee is represented.
-   [ ] Tech team is represented.
-   [ ] Media team is represented.
-   [ ] Events team is represented.
-   [ ] PR team is represented.
-   [ ] Content team is represented.
-   [ ] Member profile cards exist.

## Events

-   [ ] Upcoming events are displayed.
-   [ ] Event date is displayed.
-   [ ] Event time is displayed.
-   [ ] Venue is displayed.
-   [ ] Registration information is displayed.
-   [ ] Past events are accessible.
-   [ ] Event archive is present.
-   [ ] Flagship events are represented.
-   [ ] Categories/filters are included where useful.

## Careers

-   [ ] Placement statistics/highlights are displayed.
-   [ ] Recruiter/company information is displayed.
-   [ ] Career resources are included.
-   [ ] Placement resources are included.

## Alumni

-   [ ] Alumni profiles/spotlights exist.
-   [ ] Graduation year/batch can be shown.
-   [ ] Career achievements/contributions can be shown.

## Achievements

-   [ ] Hackathon achievements can be displayed.
-   [ ] Paper publications can be displayed.
-   [ ] Technical competition achievements can be displayed.
-   [ ] Academic achievements can be displayed.

## Activity Logger

-   [ ] Activity submission form exists.
-   [ ] Event/activity name can be entered.
-   [ ] Date can be entered.
-   [ ] Type can be selected/entered.
-   [ ] Role can be entered.
-   [ ] Proof upload/link UI exists.
-   [ ] Submission status is represented.
-   [ ] Activity history exists.
-   [ ] Verified activity feed/dashboard exists.
-   [ ] Statistics or leaderboard is represented.
-   [ ] Filters/categories can be demonstrated where useful.

## Notifications

-   [ ] Announcements are displayed.
-   [ ] Event updates are displayed.
-   [ ] Registration/deadline reminders are displayed.
-   [ ] Other relevant notices can be displayed.

## Contact

-   [ ] SAIT/department contact information exists.
-   [ ] Social links exist.
-   [ ] Contact form UI exists.
-   [ ] SOE location/map is represented.
-   [ ] Important navigation links exist.

## Technical / Delivery

-   [ ] Website is responsive on mobile.
-   [ ] Website is responsive on tablet.
-   [ ] Website is responsive on desktop.
-   [ ] Interactions/transitions are implemented where appropriate.
-   [ ] Code is modular and reusable.
-   [ ] Public GitHub repository is available.
-   [ ] Live hosted website is publicly accessible.

------------------------------------------------------------------------

# 21. Evaluation Alignment

The official evaluation matrix scores submissions out of **100 points**.

  ------------------------------------------------------------------------
  Evaluation Category                         Points Design / Product
                                                     Implications
  --------------------- ---------------------------- ---------------------
  Visual Design &                                 25 Strong visual
  Aesthetics                                         identity, typography,
                                                     layout, consistency,
                                                     polish

  User Experience &                               20 Clear navigation,
  Flow                                               logical information
                                                     architecture, ease of
                                                     use, strong Activity
                                                     Logger UX

  Responsiveness &                                20 High-quality mobile,
  Adaptability                                       tablet, and desktop
                                                     layouts

  Innovation &                                    15 Original ideas,
  Creativity                                         creative layouts,
                                                     engaging
                                                     interactions, useful
                                                     extras

  Guideline Adherence                             10 Complete coverage of
                                                     required sections and
                                                     features

  Coding Modularity &                             10 Clean, organised,
  Structure                                          reusable,
                                                     well-structured code

  **Total**                                  **100** 
  ------------------------------------------------------------------------

The scoring matrix is reproduced from the official challenge document.
In particular, the document gives **25 points to Visual Design &
Aesthetics**, **20 to User Experience & Flow**, and **20 to
Responsiveness & Adaptability**, while Guideline Adherence and Coding
Modularity & Structure each receive 10 points.

------------------------------------------------------------------------

# 22. Quality Checklist Before Submission

### Visual

-   [ ] Consistent visual language.
-   [ ] Strong typography hierarchy.
-   [ ] Consistent spacing and component styling.
-   [ ] No unfinished placeholder states unless intentionally
    demonstrated.
-   [ ] Animations are polished and purposeful.

### UX

-   [ ] A first-time visitor can understand SAIT quickly.
-   [ ] Major information is easy to locate.
-   [ ] Events are easy to discover.
-   [ ] Activity Logger flow is understandable.
-   [ ] Forms clearly communicate their purpose and state.

### Responsive

-   [ ] Mobile navigation works.
-   [ ] Cards do not overflow.
-   [ ] Tables/statistics adapt appropriately.
-   [ ] Forms work on small screens.
-   [ ] Images scale correctly.
-   [ ] No horizontal scrolling caused by layout issues.

### Technical

-   [ ] Components are reusable.
-   [ ] Mock data is separated from presentation.
-   [ ] Routes/pages are organised.
-   [ ] No unnecessary duplicated code.
-   [ ] Production build succeeds.
-   [ ] Public deployment works.
-   [ ] GitHub repository is public.

------------------------------------------------------------------------

# 23. Deliverables

The official challenge requires two primary deliverables:

1.  **Public GitHub repository link**
2.  **Live, hosted website prototype accessible through a public link**

Suitable hosting platforms listed in the official guidelines include:

-   Vercel
-   Netlify
-   GitHub Pages

A Google Form will be used for submitting the final website link and
other required details before the submission deadline.

------------------------------------------------------------------------

# 24. Non-Goals

The following are not required by the official guidelines:

-   A production-ready backend.
-   Real department data.
-   A fully functional student verification system.
-   Real authentication.
-   A production-grade activity approval workflow.
-   Real-time notifications.
-   A production database.

The Activity Logger specifically needs a strong UI/UX prototype; backend
functionality is optional.

------------------------------------------------------------------------

# 25. Future Extension Possibilities

If the prototype were later developed into a production system,
potential extensions could include:

-   Authentication and student accounts.
-   Persistent activity records.
-   Proof-file storage.
-   Faculty/admin verification workflow.
-   Real event registration.
-   Real-time notifications.
-   Department content management.
-   Alumni management.
-   Placement data management.
-   Analytics dashboard.
-   Role-based access control.

These capabilities are outside the required scope of the redesign
challenge.

------------------------------------------------------------------------

# 26. Source of Requirements

Primary source:

**SAIT Website Redesign Challenge --- Official Guidelines &
Requirements**

The official document states that the challenge is intended to rethink
and redesign the existing SAIT website, with a focus on modern
responsive presentation, improved information access, and a fresh
identity. It also explicitly allows participants freedom in layout,
visual style, colour palette, typography, and interactions while
requiring the listed core sections and features.
