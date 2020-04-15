# Collaborative Frontend Project

## Teams

* Team A: Stefan (team leader), Darko, Mitko, Slave
* Team B: Slavica (team leader), Nenad, Slobodanka, Igor
* Team C: Tome (team leader), Sasho, Mile, Aleksija, Angela

## Project Organization (Tasks)
- General Project Requirements
- Team project channels 
- Teams on GitHub
- Tasks —> simple and short PRs, as small as possible, focused on the task

## General Project Requirements
- We are building a blog, https://css-tricks.com/archives/ for reference
- [!Logical Model](./assets/data_model.png) (generated with draw.io)
- Data available in JS 
    - all entities have `id` (`uuid`) 
    - JS methods to fetch data — example: `getArticles()` to get all articles, `getAuthorById(id)` get author with the provided `id`,  `getCommentsByArticleId(id)` to get all comments belonging to the article with `id`, etc.

- Minimalistic design (simple, Bootstrap preferably)

## Pages
> https://css-tricks.com/archives/ as reference

- Homepage — https://css-tricks.com/archives/
    - list all articles with article title, article summary, author name, article date, author avatar, article tags
    - link to the Article Page
    - pagination (show limited number of articles per page)
    - sorting (sort by specific article attribute)
    - filtering (filter by tag, dropdown)


- Article Page — https://css-tricks.com/an-introduction-to-mdxjs/
    - present detailed article data — article title, author avatar, author name, article date, article comment count, article tags, article body
    - list all article comments with comment author avatar, comment author name, comment date, comment body
    - breadcrumbs (optional)

- Tag Page — https://css-tricks.com/tag/markdown/
    - list all articles with specific tag with article title, article summary, author name, article date, author avatar, article tags
    - link to Article Page
    - pagination (show limited number of articles per page)
    - sorting (sort by specific article attribute)
    - filtering (filter by tag, dropdown)

- Author Page — https://css-tricks.com/author/chriscoyier/
    — Header with author name, author avatar, author bio, author website, author username
    - list all articles for the specific author — article date, article title, article summary, author name, author avatar, tags (** same as homepage article box **)
    - pagination (show limited number of articles per page)

- Authors Page — https://css-tricks.com/authors/
    - list all authors with author avatar, author username, author email, author full name, author bio, articles count
    - pagination 
    - sorting (default articles count, by name)
    - search bar (optional, fancy)

## How
- Each Page is a separate HTML file
- Each page is in directory
- Mustache Templates (preferably reusable)
