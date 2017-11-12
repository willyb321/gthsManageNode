"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequest = require("sequest");
const config_1 = require("./config");
const fs_1 = require("fs");
const path_1 = require("path");
const os_1 = require("os");
process.on('uncaughtException', err => {
    console.log(err);
});
const key = fs_1.readFileSync(config_1.conf.get('sshkey') || path_1.join(os_1.homedir(), '.ssh', 'id_rsa'));
function connect(commands) {
    return new Promise((resolve, reject) => {
        const newcmds = commands.join('&&');
        const seq = sequest(`willb@${config_1.conf.get('ip')}:${config_1.conf.get('port')}`, {
            command: newcmds,
            privateKey: key
        }, (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
        seq.pipe(process.stdout);
    });
}
exports.connect = connect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9jb25uZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBQ25DLHFDQUE4QjtBQUM5QiwyQkFBZ0M7QUFDaEMsK0JBQTBCO0FBQzFCLDJCQUEyQjtBQUUzQixPQUFPLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxFQUFFO0lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLEdBQUcsR0FBRyxpQkFBWSxDQUFDLGFBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksV0FBSSxDQUFDLFlBQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBT2xGLGlCQUF3QixRQUF1QjtJQUM5QyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDdEMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxhQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLGFBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUNsRSxPQUFPLEVBQUUsT0FBTztZQUNoQixVQUFVLEVBQUUsR0FBRztTQUNmLEVBQUUsQ0FBQyxHQUFVLEVBQUUsRUFBRTtZQUNqQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNULE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNiLENBQUM7WUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO1FBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBZEQsMEJBY0MifQ==