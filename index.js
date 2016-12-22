exports.decorateConfig = (config) => {
	return Object.assign({}, config, {
		cursorColor: '#d4d4d4',
    foregroundColor: '#d4d4d4',
		backgroundColor: '#1e1e1e',
		borderColor: '#444444',
    colors: {
      black: '#1e1e1e',
      red: 'rgba(244, 71, 71, 1)',
      green: 'rgba(96, 139, 78, 1)',
      yellow: 'rgba(215, 186, 125, 1)',
      blue: 'rgba(86, 156, 214, 1)',
      magenta: 'rgba(100, 102, 149, 1)',
      cyan: 'rgba(78, 201, 176, 1)',
      white: '#d4d4d4',
      lightBlack: '#808080',
      lightRed: 'rgba(209, 105, 105, 1)',
      lightGreen: 'rgba(181, 206, 168, 1)',
      lightYellow: 'rgba(220, 220, 170, 1)',
      lightBlue: 'rgba(103, 150, 230, 1)',
      lightMagenta: 'rgba(197, 134, 192, 1)',
      lightCyan: 'rgba(156, 220, 254, 1)',
      lightWhite: '#ffffff'
    }
	})
}