#!/usr/bin/env node
import * as commands from './commands';
import * as yargs from 'yargs';

const pkg = require('../package.json');

yargs.usage('Usage: $0 <cmd> [options]') // usage string of application.
	.command('configget', 'Get config', {}, () => {
		return commands.getConfig();
	})
	.command('configcreate', 'Create config', {}, () => {
		commands.createConfig()
			.then(data => {

			})
			.catch(err => {
				if (err.message === 'run `gthsmanage configcreate` first') {
					commands.createConfig();
					return;
				} else {
					console.log(err);
				}
			});
	})
	.command('isdeployed', 'Check if deployed', {}, () => {
		commands.deployed()
			.then(data => {

			})
			.catch(err => {
				if (err.message === 'run `gthsmanage configcreate` first') {
					commands.createConfig();
					return;
				} else {
					console.log(err);
				}
			});
	})
	.command('isrebootrequired', 'Check if reboot required', {}, () => {
		commands.isRebootRequired()
			.then(data => {

			})
			.catch(err => {
				if (err.message === 'run `gthsmanage configcreate` first') {
					commands.createConfig();
					return;
				} else {
					console.log(err);
				}
			});
	})
	.command('reboot', 'Reboot the noticeboard', {}, () => {
		commands.reboot()
			.then(data => {
				console.log('Rebooting. Give it about 20 minutes at most.')
			})
			.catch(err => {
				if (err.message === 'run `gthsmanage configcreate` first') {
					commands.createConfig();
					return;
				} else {
					console.log(err);
				}
			});
	})
	.command('update', 'Update packages', {}, () => {
		commands.update()
			.then(data => {
				console.log('Noticeboard updated');
			})
			.catch(err => {
				if (err.message === 'run `gthsmanage configcreate` first') {
					commands.createConfig();
					return;
				} else {
					console.log(err);
				}
			});
	})
	.command('generatesshkey', 'Generate an SSH key', {}, () => {
		commands.genSSHKey()
			.then(data => {

			})
			.catch(err => {
				if (err.message === 'run `gthsmanage configcreate` first') {
					commands.createConfig();
					return;
				} else {
					console.log(err);
				}
			});
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
