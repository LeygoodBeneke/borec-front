# site-search Specification

## Purpose
Client-side full-text search over site content at /search.

## Requirements

### Requirement: Search page
The site SHALL provide a page at `/search` with the heading "Поиск", a breadcrumb, a text input and a submit button. The query SHALL be stored in the `q` URL parameter so results can be linked and survive reload.

#### Scenario: Open with a query
- **WHEN** the user opens `/search?q=клапан`
- **THEN** the input contains "клапан" and matching results are listed

#### Scenario: Submit a query
- **WHEN** the user types "АГНКС" and presses Enter or the submit button
- **THEN** the URL becomes `/search?q=АГНКС` and results are shown

### Requirement: Search index covers site content
Search SHALL run entirely in the browser over an index built at build time from the existing content modules. Each index entry SHALL have a page title, a route path and plain text (HTML tags stripped, entities decoded). The index SHALL cover every routed content page: catalog pages, spare parts pages, valve pages, piston compressor model pages, news items, careers, repair, reengineering, production, contacts, factory history pages and the home page.

#### Scenario: Catalog content is searchable
- **WHEN** the user searches for "Шторм"
- **THEN** the result list contains the "Компрессор Шторм" page linking to `/kompressor-shtorm`

#### Scenario: Model pages are searchable
- **WHEN** the user searches for "202ВП-12/3"
- **THEN** the result list contains the model page under `/kompressory/porshnevye-kompressory/`

### Requirement: Matching rules
Matching SHALL be case-insensitive, SHALL treat "ё" and "е" as equal, and SHALL require every whitespace-separated word of the query to occur in the entry's title or text. Queries shorter than 2 characters after trimming SHALL NOT run a search. Entries with a title match SHALL be listed before entries that match only in the text.

#### Scenario: Case and ё-insensitive
- **WHEN** the user searches for "ЗАВОД БОРЁЦ"
- **THEN** results are the same as for "завод борец"

#### Scenario: Too short
- **WHEN** the user searches for "к"
- **THEN** no results are listed and a hint asks for at least 2 characters

#### Scenario: No matches
- **WHEN** the user searches for "zzzz"
- **THEN** the page shows "Ничего не найдено"

### Requirement: Result display
Each result SHALL show the page title as a link to its route and a text snippet of up to about 200 characters around the first match, with matched words highlighted. The result count SHALL be shown above the list. Snippets and highlights SHALL be rendered as text nodes, never as HTML.

#### Scenario: Snippet with highlight
- **WHEN** the user searches for "азот"
- **THEN** each result shows a snippet in which occurrences of "азот" are visually highlighted

#### Scenario: Markup in query is not executed
- **WHEN** the user opens `/search?q=<img src=x onerror=alert(1)>`
- **THEN** the query is shown as literal text and no script runs
