import * as child_process from "child_process";
import * as Promise from "bluebird";

const exec = child_process.exec



export default function (pkg: string) {
    return new Promise((resolve, reject) => {
        exec(__dirname + '/script.sh ' + pkg, (err, out, stderr) => {
            if (!err) {
                if (out && (out === 'true' || out === 'false')) {
                    resolve(eval(out))
                }
            } else {
                throw Error("sh error")
            }


        })
    })



}