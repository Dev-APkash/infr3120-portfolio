# Express Portfolio - INFR3120 Assignment 2

A personal portfolio site built with Node.js, Express and EJS.

- Live site: https://express-portfolio-z4q5.onrender.com/
- GitHub: https://github.com/Dev-APkash/infr3120-portfolio

## How it was made
```
npx express-generator --view=ejs --git
npm install
npm install bootstrap @fortawesome/fontawesome-free
npm start
```
Then open http://localhost:3000

## Pages / Routes (routes/index.js)
- `/` - Home
- `/about` - About Me
- `/projects` - Projects
- `/contact` - Contact Me

## Structure
- `server.js` - starts the HTTP server (moved from `bin/www`, as shown in class)
- `app.js` - Express setup; serves `public/` and `node_modules/` (for Bootstrap and Font Awesome)
- `views/partials/header.ejs` and `footer.ejs` - shared layout included on every page
- `views/` - EJS page templates
- `public/stylesheets`, `public/javascripts`, `public/images` - CSS, JS and images

## Sources
- Bootstrap 5 - https://getbootstrap.com
- Font Awesome 6 - https://fontawesome.com
- Project structure from Express Generator - https://expressjs.com/en/starter/generator.html
