import React from 'react'

import './App.scss'

// <div></div>
// React.createElement('div', {})



function App(props) {
    const cups = props.cups.map(cup => (
        <li key={cup.id}>{cup.name}: ${Math.round(cup.price / 100)}</li>
    )) 

    
   return <ul>{cups}
   </ul>
}

export default App

// module.exports = App
// export
// module.exports = {
    // App: App
// }

