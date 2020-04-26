# Node.js scripting II

За оваа работна задача целта е да се направи _backend_ сајт со сите страни од заедничкиот _frontend_ проект (блог, со страни за статии, автори, тагови итн.) — наместо функционалноста да биде диктирана од _frontend_-от, за оваа задача ќе ги изгенерираме сите _html_ страни, со линкови до соодветните страни.

За потсетување, кај _frontend_ проектот [сите _html_ страни](https://github.com/sourcemx-academy/team-a-frontend-project/blob/master/index.html) всушност беа празни, или барем со минимален _html markup_, а содржината во суштина ја генериравме на клиентска страна (во _browser_), со _JavaScript_, со помош на [mustache.js](https://github.com/janl/mustache.js/) со кој изрендерираните _template_-ите со соодветните податоци ги додававме на _DOM_-от. На пример, во _JS_ кодот на клиентска страна имавме нешто што изгледа отприлика вака:

```js
const output = Mustache.render(someTpl, {
    articles: articlesToRender,
    tags: tagsToRender,
    ...
});

 document.getElementById('root').innerHTML = output;
```

Кај оваа задача ќе треба да го изгенерираме целосниот _html markup_ на сите страни со `Node.js` скрипта, и откако ќе ги изгенерираме сите страни ќе имаме целосно функционален веб сајт — ќе можеме на пример да го прикачиме на _live_ сервер и сајтот да ни биде достапен на интернет.

Тука, како пример, во скриптата [./src/build.js](./src/build.js) ни се генерираат почетната страна (_homepage_), и сите страни за таговите, користејќи дел од _template_-ите од репото на [_Team A_](https://github.com/sourcemx-academy/team-a-frontend-project). Страните се генерираат во [./build директориумот](./build), и со [npm\_ пакетот `live-server`](https://github.com/tapio/live-server) може да се дигне локален сервер и страните да бидате достапни на [http://localhost:8080/](http://localhost:8080/).

Во [`package.json`][./package.json] се достапни [`npm` скрипти](https://docs.npmjs.com/misc/scripts) за `build` (генерирање на _html_ страните), и `start-server` за кревање на локален сервер откако ќе бидат изгенерирани страните:

```bash
# Build HTML pages (executes `node ./src/build`)
npm run build

# Start server on localhost:8080 (executes `live-server ./build`)
npm run start-server
```

Ваша задача е да ги изгенерирате и останатите страни од _frontend_ проектот (_articles, author, authors etc._). Можеда ги користите кои било _template_-и — оние од вашиот тим, од друг тим, целосно нови итн.
