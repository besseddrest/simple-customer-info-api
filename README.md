# Simple Customer Info API

Apologies for delayed submission. I wanted to make sure I hit all requirements. This is a comprehensive take home test, but I had fun working on it.

## Notes/Design Decisions

Some decisions I made in the interest of time, or for consistency:

-   despite this being a UI role, less focus was spent on UI and more on the specific requirements. I realize this is prob a huge risk, but worth it. Happy to demonstrate UI skills if asked.
-   mongoose library was leveraged for model/schema creation & validation features
-   no hard DB requirement, so I generated mock data for existing customers - using names of famous San Diego Padres players, current and past
-   since the job rec lists Gherkins/Cucumber, I used that for the unit tests. First time using either, but I'm actually very into it.
-   search/search results page could have been broken into subcomponents and placed in appropriate directories, but this test seemed to emphasize the contact form vs the search
-   the spec for GET w/ query params is hard to interpret but I moved fwd with what I felt was most appropriate solution
    -   spec says `id` is UUID format, but seems odd to expect user to have a portion of a UUID memorized enough, to be able to search efficiently, so:
    -   added UUID or name as a filter for search, results show name and UUID to give user some context if they wanted to filter by UUID
-   swapped "ContactInfo" object with "Customer" object, based on my Customer model
-   would have preferred using more RESTful endpoint formatting, e.g. /api/v1/customers, but decided that OpenAPI spec is source of truth
-   API documentation is automatically generated with a swaggerhub library

## Fina notes

That's what I can remember off the top of my head. Looking forward to meeting the team to discuss the role and my coding test submission.
