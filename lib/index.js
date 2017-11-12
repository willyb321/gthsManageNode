"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const commands = require("./commands");
const yargs = require("yargs");
const pkg = require('../package.json');
yargs.usage('Usage: $0 <cmd> [options]')
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
    .command('test', 'Create config', {}, () => __awaiter(this, void 0, void 0, function* () {
    yield commands.deployed();
    return;
}))
    .demandCommand(1)
    .option('h', {
    alias: 'help',
    description: 'display help message'
})
    .help('help')
    .version('version', 'display version', pkg.version)
    .alias('version', 'v')
    .showHelpOnFail(false, 'whoops, something went wrong! run with --help')
    .argv;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUN2QywrQkFBK0I7QUFFL0IsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFdkMsS0FBSyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztLQUN0QyxPQUFPLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFO0lBQzVDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDN0IsQ0FBQyxDQUFDO0tBQ0QsT0FBTyxDQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRTtJQUNsRCxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ2hDLENBQUMsQ0FBQztLQUNELE9BQU8sQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUU7SUFDaEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM1QixDQUFDLENBQUM7S0FDRCxPQUFPLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUU7SUFDdEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3BDLENBQUMsQ0FBQztLQUNELE9BQU8sQ0FBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUU7SUFDNUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUMxQixDQUFDLENBQUM7S0FDRCxPQUFPLENBQUMsUUFBUSxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFO0lBQzVDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDMUIsQ0FBQyxDQUFDO0tBQ0QsT0FBTyxDQUFDLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFO0lBQ3BELE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDN0IsQ0FBQyxDQUFDO0tBQ0QsT0FBTyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLEdBQVMsRUFBRTtJQUNoRCxNQUFNLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQixNQUFNLENBQUM7QUFDUixDQUFDLENBQUEsQ0FBQztLQUNELGFBQWEsQ0FBQyxDQUFDLENBQUM7S0FDaEIsTUFBTSxDQUFDLEdBQUcsRUFBRTtJQUNaLEtBQUssRUFBRSxNQUFNO0lBQ2IsV0FBVyxFQUFFLHNCQUFzQjtDQUNuQyxDQUFDO0tBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNaLE9BQU8sQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQztLQUNsRCxLQUFLLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQztLQUdyQixjQUFjLENBQUMsS0FBSyxFQUFFLCtDQUErQyxDQUFDO0tBQ3RFLElBQUksQ0FBQyJ9