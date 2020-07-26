import React from 'react'
import { render } from 'react-dom'
import './styles/App.styl'

const App = () => {
  return (
    <div>
      <main className='Hero'>
        <h1 className='Hero__greeting'>Hello Dev 😁</h1>
        <p className='Hero__message'>This is a React Boilerplate config to use Stylus in React and transpiled with Webpack. You can use it to initialize projects if you want.</p>
      </main>
      <footer className='Footer'>
        <p className='Footer__link'>
          Follow me at:&nbsp;
          <a
            href='https://twitter.com/Luis_LiraC'
            target='_blank'
            rel='noopener noreferrer'
          >
            @Luis_LiraC
          </a>
        </p>
      </footer>
    </div>
  )
}

render(<App />, document.getElementById('root'))
