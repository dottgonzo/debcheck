import * as child_process from "child_process";
import * as Promise from "bluebird";

const exec = child_process.exec



export default function (pkg: string) {
    return new Promise((resolve, reject) => {
        exec(__dirname + '/script.sh ' + pkg, (err, out, stderr) => {
            if (!err && out) {
                const o = out.toString()
                if (o === 'true' || o === 'false') {
                    resolve(eval(o))
                } else {
                    reject("error! " + o)
                }
            } else {
                reject(err)
            }

        })
    })
}