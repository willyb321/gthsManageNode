"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = require("inquirer");
const Configstore = require("configstore");
const path = require("path");
const os = require("os");
const pkg = require('../../package.json');
exports.conf = new Configstore(pkg.name);
function createConfig() {
    const questions = [
        {
            type: 'input',
            name: 'ip',
            message: 'What is the IP of the noticeboard? (hint: 10.178.x.x)',
        },
        {
            type: 'input',
            name: 'port',
            message: 'What is the SSH port?',
            default: () => 1471
        },
        {
            type: 'input',
            name: 'sshkey',
            message: 'Path to SSH key?',
            default: () => path.join(os.homedir(), ".ssh", "id_rsa")
        },
        {
            type: 'input',
            name: 'phone',
            message: 'What\'s your phone number',
            validate: function (value) {
                const pass = value.match(/^([01])?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?)(?:\d+)?)?$/i);
                if (pass) {
                    return true;
                }
                return 'Please enter a valid phone number';
            }
        }
    ];
    inquirer.prompt(questions).then((answers) => {
        for (const i in answers) {
            if (answers.hasOwnProperty(i)) {
                console.log(`Setting ${i} in config`);
                exports.conf.set(i, answers[i]);
            }
        }
    });
}
exports.createConfig = createConfig;
function getConfig() {
    const all = exports.conf.all;
    for (const i in all) {
        if (all.hasOwnProperty(i)) {
            console.log(`${i}: ${all[i]}`);
        }
    }
}
exports.getConfig = getConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFxQztBQUNyQywyQ0FBMkM7QUFDM0MsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUV6QixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUU3QixRQUFBLElBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFLOUM7SUFDQyxNQUFNLFNBQVMsR0FBRztRQUNqQjtZQUNDLElBQUksRUFBRSxPQUFPO1lBQ2IsSUFBSSxFQUFFLElBQUk7WUFDVixPQUFPLEVBQUUsdURBQXVEO1NBQ2hFO1FBQ0Q7WUFDQyxJQUFJLEVBQUUsT0FBTztZQUNiLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLHVCQUF1QjtZQUNoQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSTtTQUNuQjtRQUNEO1lBQ0MsSUFBSSxFQUFFLE9BQU87WUFDYixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxrQkFBa0I7WUFDM0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUM7U0FDeEQ7UUFDRDtZQUNDLElBQUksRUFBRSxPQUFPO1lBQ2IsSUFBSSxFQUFFLE9BQU87WUFDYixPQUFPLEVBQUUsMkJBQTJCO1lBQ3BDLFFBQVEsRUFBRSxVQUFVLEtBQVU7Z0JBQzdCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsaUdBQWlHLENBQUMsQ0FBQztnQkFDNUgsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDVixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNiLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLG1DQUFtQyxDQUFDO1lBQzVDLENBQUM7U0FDRDtLQUNELENBQUM7SUFFRixRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQVksRUFBRSxFQUFFO1FBQ2hELEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDekIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN0QyxZQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixDQUFDO1FBQ0YsQ0FBQztJQUNGLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQXpDRCxvQ0F5Q0M7QUFLRDtJQUNDLE1BQU0sR0FBRyxHQUFHLFlBQUksQ0FBQyxHQUFHLENBQUM7SUFDckIsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEMsQ0FBQztJQUNGLENBQUM7QUFDRixDQUFDO0FBUEQsOEJBT0MifQ==