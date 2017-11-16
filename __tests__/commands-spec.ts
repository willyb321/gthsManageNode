import * as commands from '../src/commands';

test('Should have commands available', () => {
  expect(commands).toBeTruthy();
});

for (const cmd in commands) {
	test(`${cmd} should be available`, () => {
		expect(commands[cmd]).toBeTruthy();
	});
}
