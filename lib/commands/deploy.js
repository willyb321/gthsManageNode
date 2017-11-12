"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connect_1 = require("./connect");
function deploy(fresh) {
    if (fresh) {
        return connect_1.connect(['/home/gths/bootboard.sh']);
    }
    else {
        return connect_1.connect(['/home/gths/update.sh']);
    }
}
exports.deploy = deploy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwbG95LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2RlcGxveS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFrQztBQUtsQyxnQkFBdUIsS0FBYztJQUNwQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ1gsTUFBTSxDQUFDLGlCQUFPLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1AsTUFBTSxDQUFDLGlCQUFPLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUE7SUFDekMsQ0FBQztBQUNGLENBQUM7QUFORCx3QkFNQyJ9