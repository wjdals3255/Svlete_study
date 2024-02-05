// +page.server.ts
import type { Actions } from './$types';

export const actions = {
	profile: async (event) => {
		console.log(event);
		console.log('========================================');
	}
};
