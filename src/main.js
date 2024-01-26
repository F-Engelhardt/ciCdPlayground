import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Felicitas Engelhardt',
		// In the following fiels you can either give a single string,
		// or an array of bullet points

		// What do you associate with the term 'CI/CD'?
		associations: [
			'Save and continuous deployment',
		],
		// Which CI/CD tools do you use in your project?
		tools: 'Tekton, ArgoCD',
		// What do you want to learn in this workshop?
		expectations: [
			'Basics of CI/CD, how to build a pipeline',
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'skiing',
			'paragliding',
			'hiking',
			'definitely not doing my taxes'
		]
	}
});
