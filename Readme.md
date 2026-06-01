# OpenGuido

OpenGuido is a VS Code extension that helps developers quickly find programming syntax, code snippets, Git commands, and development commands without leaving the editor.

Instead of opening a browser, searching Stack Overflow, or switching to ChatGPT for simple syntax lookups, developers can instantly search and access relevant snippets directly inside VS Code.

## Problem

Developers frequently forget:

* Language syntax
* STL functions
* Git commands
* Linux commands
* Docker commands
* Framework boilerplate code

Searching for these repeatedly interrupts workflow and reduces productivity.

OpenGuido aims to solve this by providing instant in-editor lookup.

---

## Features Implemented

### Snippet Search

Search for programming snippets directly from VS Code.

Example:

```text
lowercase string
sort vector
descending sort
```

---

### Quick Result Selection

Matching snippets are displayed in a Quick Pick menu.

Example:

```text
Convert String To Lowercase
Sort Vector Ascending
Sort Vector Descending
```

---

### Snippet Preview

Preview snippet content before using it.

---

### Copy To Clipboard

Copy snippets instantly for use anywhere.

---

### Insert Into Editor

Insert selected snippets directly at the current cursor position.

---

## Current Tech Stack

* TypeScript
* VS Code Extension API
* esbuild
* JSON-based snippet database

---

## Current Project Structure

```text
src
├── data
│   └── cpp.json

├── services
│   └── searchService.ts

├── types
│   └── snippet.ts

├── test

└── extension.ts
```

---

## Example Snippet Format

```json
{
  "title": "Convert String To Lowercase",
  "type": "code",
  "tags": [
    "lowercase string",
    "string lower",
    "tolower"
  ],
  "description": "Convert complete string to lowercase",
  "language": "cpp",
  "code": "for(char &c : s){\n    c = tolower(c);\n}"
}
```

---

## Future Roadmap

### Phase 1 (Completed)

* VS Code Extension Setup
* Search Command
* JSON Snippet Database
* Search Service
* Quick Pick Search Results

### Phase 2 (In Progress)

* Snippet Preview
* Copy To Clipboard
* Insert Into Editor

### Phase 3

* Git Commands Database
* Linux Commands Database
* Docker Commands Database
* React Snippets
* Node.js Snippets

### Phase 4

* Dedicated Sidebar UI
* Categories & Filters
* Favorites

### Phase 5

* AI Powered Search
* Semantic Search
* Context Aware Suggestions

---

## Vision

OpenGuido aims to become a developer's instant knowledge companion inside VS Code, reducing context switching and helping developers stay focused while coding.

No browser tabs.
No searching.
Just code.
