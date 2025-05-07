import React from 'react'
import ReactLogo from './assets/react.svg'
import './index.css'

export const App = () => {
	return (
		// деклоративный стиль
		React.createElement(
			'div',
			{
				className: 'App',
			},
			React.createElement(
				'header',
				{
					className: 'App-header',
				},
				React.createElement('img', {
					src: ReactLogo,
					className: 'App-logo',
					alt: 'logo',
				}),
				React.createElement(
					'p',
					null,
					'Edit ',
					React.createElement('code', null, 'src/App.js'),
					' \u0420\u0435\u0430\u043A\u0442\u0438\u0432\u043D\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0440\u0435\u0430\u043A\u0442.',
				),
				React.createElement(
					'a',
					{
						className: 'App-link',
						href: 'https://reactjs.org',
						target: '_blank',
						rel: 'noopener noreferrer',
					},
					'Learn React',
				),
				React.createElement(
					'p',
					null,
					'\u0421\u0435\u0439\u0447\u0430\u0441 \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E ',
					new Date().getFullYear(),
					' \u0433\u043E\u0434',
				),
			),
		)
	)
}
