#!/usr/bin/env node

/**
 * @module Index
 */

 /** ignore this comment */
import * as commands from './commands';
import * as yargs from 'yargs';
import * as updateNotifier from 'update-notifier';
import 'source-map-support/register'

// Notify updates
updateNotifier({pkg: commands.pkg}).notify

// Catch uncaught exceptions.
process.on('uncaughtException', (err: Error) => {
	console.log(`We've had an error: The message is: ${err.message || err}`);
});

// Catch unhandled rejections.
process.on('unhandledRejection', (err: Error) => {
	console.log(`We've had an error: The message is: ${err.message || err}`);
});

/**
 * Util function to reduce duplicated code.
 * @param {Error} err The error object.
 */
function handledErr(err: Error): void {
	if (err.message === 'run `gthsmanage configcreate` first') {
		commands.createConfig();
		return;
	} else if (err.message === 'Can\'t Find an SSH key.') {
		return;
	} else if (err.message === 'No phone provided.') {
		console.log('Run `gthsmanage config --set` first.');
		return;
	} else {
		console.log(err);
	}
}

// Basically puts the program together.
yargs.usage('Usage: $0 <cmd> [options]') // usage string of application.
	.command('config', 'Get / Set config', (yargs) => {
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
			return commands.createConfig()
				.then(data => {
					console.log('Config set.');
					return;
				});
		} else {
			console.log(`Use --set or --get to set or get the config respectively.`);
			return;
		}
	})
	.command('isdeployed', 'Check if deployed', {}, () => {
		commands.deployed()
			.then(data => {

			})
			.catch(err => handledErr(err));
	})
	.command('isrebootrequired', 'Check if reboot required', {}, () => {
		commands.isRebootRequired()
			.then(data => {

			})
			.catch(err => handledErr(err));
	})
	.command('reboot', 'Reboot the noticeboard', {}, () => {
		commands.reboot()
			.then(data => {
				console.log('Rebooting. Give it about 20 minutes at most.')
			})
			.catch(err => handledErr(err));
	})
	.command('update', 'Update packages', {}, () => {
		commands.update()
			.then(data => {
				console.log('Noticeboard updated');
			})
			.catch(err => handledErr(err));
	})
	.command('generatesshkey', 'Generate an SSH key', {}, () => {
		commands.genSSHKey()
			.then(data => {

			})
			.catch(err => handledErr(err));
	})
	.command('getlogs', 'Get noticeboard logs', {}, () => {
		commands.getLogs()
			.then(data => {
			})
			.catch(err => handledErr(err));
	})
	.command('everythingisbrokenhelp', 'Literally everything is on fire help', (yargs) => {
		return yargs.option('phone', {
			alias: 'p',
			describe: 'Phone number of the right person. You know who you are.'
		})
	}, (argv) => {
		commands.everythingisbrokenhelp(argv.phone)
			.then(data => {
			})
			.catch(err => handledErr(err));
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
			.catch(err => handledErr(err));
	})
	.demandCommand(1) // Ensure we get at least 1 command
	.option('h', {
		alias: 'help',
		description: 'display help message'
	})
	.help('help')
	.version('version', 'display version', commands.pkg.version) // the version string.
	.alias('version', 'v')
	// disable showing help on failures, provide a final message
	// to display for errors.
	.showHelpOnFail(false, 'whoops, something went wrong! run with --help')
	.argv;
