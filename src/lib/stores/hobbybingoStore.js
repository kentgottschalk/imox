import { writable } from 'svelte/store';
import { persist, localStorage } from '@macfja/svelte-persistent-store';

export let bingosquares = persist(
	writable([
		{ id: 1, done: false, name: 'Paint a Monster or Siege Engine' },
		{ id: 2, done: false, name: 'Start a new army' },
		{ id: 3, done: false, name: 'Paint a model and incorporate a technique you have not mastered' },
		{ id: 4, done: false, name: 'Build and paint a new model for one of your armies' },
		{ id: 5, done: false, name: 'Paint a new version of a model already own' },
		{ id: 6, done: false, name: 'Make a display board for one of your armies' },
		{ id: 7, done: false, name: 'Paint an Orc, an Uruk-hai and a Goblin' },
		{ id: 8, done: false, name: 'Watch The Lord of the Rings trilogy' },
		{
			id: 9,
			done: false,
			name: 'Recreate your favorite scene from the movie with a Narrative Scenario'
		},
		{
			id: 10,
			done: false,
			name: 'Convert a model to look different to how it started (a head or weapon swap for example)'
		},
		{ id: 11, done: false, name: 'Paint a model for an army you do not currently play' },
		{ id: 12, done: false, name: 'Build and paint a scenario kit' },
		{
			id: 13,
			done: true,
			name: 'All of the finished models in your army are based (you should score this automatically!)'
		},
		{ id: 14, done: false, name: 'Play the game using a army you have never used before' },
		{ id: 15, done: false, name: 'Watch the Hobbit trilogy' },
		{ id: 16, done: false, name: 'Read The Hobbit or any book form The Lord of the Rings trilogy' },
		{
			id: 17,
			done: false,
			name: 'Enter a model you have painted this year into a painting competition'
		},
		{ id: 18, done: false, name: 'Start a Battle Company' },
		{
			id: 19,
			done: false,
			name: 'Finish a model that has been in your to-do list plie for over a year'
		},
		{ id: 20, done: false, name: 'Play a game against an opponent you have never faced before' },
		{ id: 21, done: false, name: 'Finish a Good army of at least 600 points' },
		{ id: 22, done: false, name: 'Create cool scenic bases for one of your armies' },
		{ id: 23, done: false, name: 'Paint a Man, a Dwarf, an Elf and a Hobbit' },
		{ id: 24, done: false, name: 'Buy a model and paint it within 48 hours of receiving it' },
		{ id: 25, done: false, name: 'Finish an Evil army of at least 600 points' }
	]),
	localStorage(),
	'bingosquares'
);
