import ReactLogo from './assets/react.svg'
import './index.css'

export const App = () => {
	return (
		// деклоративный стиль
		<div className="App">
			<header className="App-header">
				<img src={ReactLogo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> Реактивно работает реакт.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>Сейчас примерно {new Date().getFullYear()} год</p>
			</header>
		</div>
	)
}
