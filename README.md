# reactjs-snippets

[![apm](https://img.shields.io/apm/v/reactjs-snippets.svg)](https://atom.io/packages/reactjs-snippets)
[![apm](https://img.shields.io/badge/edit-prose.io-blue.svg)](http://prose.io/#vaeum/reactjs-snippets)

Snippets of React, Redux, Eslint, ES6 for [Atom](https://atom.io/) editor

### Snippets

The **⇥** means the `TAB` key

#### React JS

|  Trigger | Content                            |
| -------: | ---------------------------------- |
|   `imr⇥` | import React                       |
|  `imrd⇥` | import ReactDom                    |
|  `impt⇥` | import PropTypes                   |
|  `imrc⇥` | import React, Component            |
|  `imrp⇥` | import React, PropTypes            |
| `imrcp⇥` | import React, Component, PropTypes |
| `props⇥` | this.props                         |
| `state⇥` | this.state                         |
|   `rss⇥` | setState (object)                  |
|  `rssf⇥` | setState (function)                |
| `rssfc⇥` | setState (optional callback)       |
|   `rcm⇥` | Children map                       |
|  `rcfe⇥` | Children forEach                   |
|   `rcc⇥` | Children count                     |
|   `rco⇥` | Children only                      |
|  `rcta⇥` | Children toArray                   |
|    `rc⇥` | simple React Component             |
|   `rsc⇥` | simple React Stateless Component   |
|  `rcon⇥` | React Constructor                  |
|   `ren⇥` | React render                       |

#### ES6

| Trigger | Content        |
| ------: | -------------- |
|   `ex⇥` | export         |
|  `exd⇥` | export default |

#### React Router

|    Trigger | Content                                    |
| ---------: | ------------------------------------------ |
|    `push⇥` | import push action from React Router Redux |
|     `iml⇥` | Router: import Link                        |
|    `imnl⇥` | Router: import Navlink                     |
|    `link⇥` | Router: Link                               |
| `navlink⇥` | Router: NavLink                            |

#### Redux

| Trigger | Content                    |
| ------: | -------------------------- |
|  `rrd⇥` | Redux: Reducer             |
| `rcdx⇥` | Redux: class skeleton      |
|  `rxm⇥` | Redux: middleware skeleton |
|  `rxr⇥` | Redux: reducer skeleton    |
| `rxms⇥` | Redux: mapStateToProps     |
| `rxmd⇥` | Redux: mapDispatchToProps  |
|  `rxc⇥` | Redux: connect             |

#### React lifecycle

|  Trigger | Content                   |
| -------: | ------------------------- |
|   `cwm⇥` | componentWillMount        |
|   `cdm⇥` | componentDidMount         |
|  `cwrp⇥` | componentWillReceiveProps |
|   `scu⇥` | shouldComponentUpdate     |
|   `cwu⇥` | componentWillUpdate       |
|   `cdu⇥` | componentDidUpdate        |
|  `cwun⇥` | componentWillUnmount      |
| `gdsfp⇥` | getDerivedStateFromProps  |
|  `gsbu⇥` | getSnapshotBeforeUpdate   |
|   `cdc⇥` | componentDidCatch         |

#### PropTypes

|     Trigger | Content                         |
| ----------: | ------------------------------- |
|       `dp⇥` | defaultProps                    |
|       `pt⇥` | propTypes                       |
|      `pta⇥` | PropTypes.array                 |
|     `ptar⇥` | PropTypes.array.isRequired      |
|      `ptb⇥` | PropTypes.bool                  |
|     `ptbr⇥` | PropTypes.bool.isRequired       |
|      `ptf⇥` | PropTypes.func                  |
|     `ptfr⇥` | PropTypes.func.isRequired       |
|      `ptn⇥` | PropTypes.number                |
|     `ptnr⇥` | PropTypes.number.isRequired     |
|    `ptobj⇥` | PropTypes.object                |
|   `ptobjr⇥` | PropTypes.object.isRequired     |
|      `pts⇥` | PropTypes.string                |
|     `ptsr⇥` | PropTypes.string.isRequired     |
|   `ptnode⇥` | PropTypes.node                  |
|  `ptnoder⇥` | PropTypes.node.isRequired       |
|      `pte⇥` | PropTypes.element               |
|     `pter⇥` | PropTypes.element.isRequired    |
|      `pti⇥` | PropTypes.instanceOf            |
|     `ptir⇥` | PropTypes.instanceOf.isRequired |
|     `ptof⇥` | PropTypes.oneOf                 |
|    `ptofr⇥` | PropTypes.oneOf.isRequired      |
|    `ptoft⇥` | PropTypes.oneOfType             |
|   `ptoftr⇥` | PropTypes.oneOfType.isRequired  |
|     `ptao⇥` | PropTypes.arrayOf               |
|    `ptaor⇥` | PropTypes.arrayOf.isRequired    |
|   `ptobjo⇥` | PropTypes.objectOf              |
|  `ptobjor⇥` | PropTypes.objectOf.isRequired   |
|  `ptshape⇥` | PropTypes.shape                 |
| `ptshaper⇥` | PropTypes.shape.isRequired      |
|    `ptany⇥` | PropTypes.any                   |
|   `ptanyr⇥` | PropTypes.any.isRequired        |

### Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -m 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request

### License

[MIT License](http://mit-license.org/)

### Credit

The React.js snippets were originally created by [vaeum](https://atom.io/users/vaeum) in [Atom React](https://atom.io/packages/react) in ES5 syntax.
