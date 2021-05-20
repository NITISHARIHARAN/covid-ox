


import React from 'react'
import Home from './Home.js'
import List from './List.js'
import { Route , Switch } from 'react-router-dom'

const App =() => {
return(
<div>
<Switch>
<Route exact path='/' component={Home} />
<Route exact path='/list' component={List} />
</Switch>
</div>
)
}
export default App;