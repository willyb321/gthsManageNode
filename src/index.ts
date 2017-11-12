import * as commands from './commands';
import * as yargs from 'yargs';

const pkg = require('../package.json');

yargs.usage('Usage: $0 <cmd> [options]') // usage string of application.
	.command('configget', 'Get config', {}, () => {
		return commands.getConfig();
	})
	.command('configcreate', 'Create config', {}, () => {
		return commands.createConfig();
	})
	.command('isdeployed', 'Create config', {}, () => {
		return commands.deployed();
	})
	.command('isrebootrequired', 'Create config', {}, () => {
		return commands.isRebootRequired();
	})
	.command('reboot', 'Create config', {}, () => {
		return commands.reboot();
	})
	.command('update', 'Create config', {}, () => {
		return commands.update();
	})
	.command('generatesshkey', 'Create config', {}, () => {
		return commands.genSSHKey();
	})
	.command('test', 'Create config', {}, async () => {
		await commands.deployed();
		return;
	})
	.demandCommand(1)
	.option('h', {
		alias: 'help',
		description: 'display help message'
	})
	.help('help')
	.version('version', 'display version', pkg.version) // the version string.
	.alias('version', 'v')
	// disable showing help on failures, provide a final message
	// to display for errors.
	.showHelpOnFail(false, 'whoops, something went wrong! run with --help')
	.argv;
