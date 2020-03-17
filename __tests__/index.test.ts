import {
	init,
	random,
	getTodayStr,
	isWeekend,
	pickRandomItems,
	rate,
	fillRandom,
	generateAlmanac } from '../dist/index'



describe('Almanac Modules', ()=>{
	test('it should import correctly', ()=>{
		expect(typeof init).toBe('function')
		expect(typeof random).toBe('function')
		expect(typeof getTodayStr).toBe('function')
		expect(typeof isWeekend).toBe('function')
		expect(typeof pickRandomItems).toBe('function')
		expect(typeof rate).toBe('function')
		expect(typeof fillRandom).toBe('function')
		expect(typeof generateAlmanac).toBe('function')
	})
})