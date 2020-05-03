# Node.js Blog RESTful API

Create a RESTful API for the Blog project.

## Endpoints:

- `/articles` — lists all articles (`?page=XX` - pagination)
- `/articles/:articleId` — get article
- `/articles/:articleId/comments` — list all comments for the article with `articleId`
- `/authors` — lists all authors
- `/authors/:authorId` — get author details
- `/authors/:authorId/articles` — list all author articles 
- `/tags` — lists all tags
- `/tags/:slug` — get tag details
- `/tags/:slug/articles` — list all tags 