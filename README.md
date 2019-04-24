# gantt-for-react

> [Frappe Gantt](https://github.com/frappe/gantt) component for React wrapper, used with vendored definitions of Frappe Gantt.

[![npm](https://img.shields.io/npm/v/gantt-react-typescript-vendored.svg)](https://www.npmjs.com/package/gantt-react-typescript-vendored)
[![npm](https://img.shields.io/npm/dt/gantt-react-typescript-vendored.svg)](https://www.npmjs.com/package/gantt-react-typescript-vendored)
[![npm](https://img.shields.io/npm/l/gantt-react-typescript-vendored.svg)](https://www.npmjs.com/package/gantt-react-typescript-vendored)

This is a fork of [another wrapper](https://www.npmjs.com/package/gantt-for-react-typescript), which uses the Frappe Gantt from dependencies.

# 1. Install

```sh
npm install --save gantt-react-typescript-vendored
```


# 2. Usage

```jsx
import * as React from 'react';
import ReactGantt from 'gantt-react-typescript-vendored';

<ReactGantt
  tasks={this.getTasks()}
  view_mode={this.state.viewMode}
  on_click={this._func}
  on_date_change={this._func}
  on_progress_change={this._func}
  on_view_change={this._func}
  custom_popup_html={this._html_func}
/>
```

# 3. LICENSE

MIT
