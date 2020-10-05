<h1 align=center>
<img src="logo/512px.svg" width=25%>
</h1>

# lauecharts

Forked from QingWei-Li/laue

<!-- [![Build Status](https://img.shields.io/travis/fwiwDev/laue.svg?style=flat-square)](https://travis-ci.org/fwiwDev/laue) -->
<!-- [![Coverage Status](https://img.shields.io/coveralls/fwiwDev/laue.svg?style=flat-square)](https://coveralls.io/github/fwiwDev/laue?branch=master) -->

[![npm](https://img.shields.io/npm/v/laue.svg?style=flat-square)](https://www.npmjs.com/package/fwiwDev/lauecharts)
![](http://img.badgesize.io/https://unpkg.com/lauecharts?compression=gzip&label=gzip%20size&style=flat-square)

> 🖖📈 Modern charts for Vue.js

Documentation: https://laue.js.org

## Features

- It depends on several small submodules in [D3](//d3js.org), so it's very **reliable** and **lightweight**.
- The implementation for Vue.js, so it is **composable** and **supports SSR**.

## Installation

```shell
npm i fwiwDev/lauecharts
```

## Usage

```javascript
import Vue from 'vue'
import { Laue } from 'lauecharts'

Vue.use(Laue)

// On demand
import { Cartesian, Line } from 'lauecharts'

Vue.component(Cartesian.name, Cartesian)
Vue.component(Line.name, Line)
```

## Demo

A dead simple [example](https://codepen.io/QingWei-Li/pen/EpOvNN)

```html
<div id="app">
  <la-cartesian :width="300" :height="150" :data="values">
    <la-line prop="pv"></la-line>
    <la-y-axis></la-y-axis>
    <la-x-axis prop="name"></la-x-axis>
    <la-tooltip></la-tooltip>
  </la-cartesian>
</div>

<script src="//unpkg.com/vue"></script>
<script src="//unpkg.com/laue"></script>
<script>
  new Vue({
    el: '#app',
    data: () => ({
      values: [
        { name: 'Page A', pv: 2000 },
        { name: 'Page B', pv: 3000 },
        { name: 'Page C', pv: 1200 },
      ],
    }),
  })
</script>
```

## Inspired

- [Recharts](https://github.com/recharts/recharts)
- [Frappe Charts](https://github.com/frappe/charts)

## License

MIT
