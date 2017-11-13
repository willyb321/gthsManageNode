#!/usr/bin/env node
import * as commands from './commands';
import * as yargs from 'yargs';

const pkg = require('../package.json');

yargs.usage('Usage: $0 <cmd> [options]') // usage string of application.
	.command('config', 'Get config', (yargs) => {
		return yargs.option('set', {
			alias: 's',
			describe: 'Set config'
		}).option('get', {
			alias: 'g',
			describe: 'Get config'
		})
	}, (argv) => {
		if (argv.get) {
			return commands.getConfig();
		} else if (argv.set) {
			commands.createConfig()
				.then(data => {
					console.log('Config set.');
				});
		}
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
	.command('getlogs', 'Get noticeboard logs', {}, () => {
		commands.getLogs()
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
	.command('deploy', 'Deploy the noticeboard.', (yargs) => {
		return yargs.option('fresh', {
			alias: 'f',
			describe: 'Only use if Chrome isn\'t already open'
		})
	}, (argv) => {
		commands.deploy(argv.fresh)
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
