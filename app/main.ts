import '@riotjs/hot-reload'
import {component} from 'riot'
import App from './app.riot'

component(App)(document.getElementById('app') || document.body, {
  title: 'Hi there!',
})
