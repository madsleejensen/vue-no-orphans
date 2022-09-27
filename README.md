# vue-no-orphans

Ensures titles never line break into a single orphan word.

***Notice**: currently the directive doesnt work too well with HMR* 

### Example

without
![Title breaks into a orphan word](https://raw.githubusercontent.com/madsleejensen/vue-no-orphans/master/docs/without.png)

using the `v-no-orphans` directive
![Breaks into minimum two words](https://raw.githubusercontent.com/madsleejensen/vue-no-orphans/master/docs/no-orphans.png)




### installation
```sh
npm i vue-no-orphans
```

Globally install the plugin

```js
import { createApp } from 'vue';
import { VueNoOrphansPlugin } from 'vue-no-orphans';

const app = createApp(App);
app.use(VueNoOrphansPlugin);
```

Use the `v-no-orphans` directive on your titles

```html
<div>
  <h1 v-no-orphans>keep atleast two works on the last line</h1>
</div>
```
