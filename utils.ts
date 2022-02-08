const utils = {
	pascalToCamelCase: (name: string) => {
		if (name === 'OAuth') {
		  return 'oauth';
		} else {
		  return name[0].toLowerCase() + name.substring(1);
		}
	}
}

export default utils;