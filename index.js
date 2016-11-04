"use strict";
var child_process = require("child_process");
var Promise = require("bluebird");
var exec = child_process.exec;
function default_1(pkg) {
    return new Promise(function (resolve, reject) {
        exec(__dirname + '/script.sh ' + pkg, function (err, out, stderr) {
            if (!err && out) {
                var o = out.toString();
                if (o === 'true' || o === 'false') {
                    resolve(eval(o));
                }
                else {
                    reject("error! " + o);
                }
            }
            else {
                reject(err);
            }
        });
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLGFBQWEsV0FBTSxlQUFlLENBQUMsQ0FBQTtBQUMvQyxJQUFZLE9BQU8sV0FBTSxVQUFVLENBQUMsQ0FBQTtBQUVwQyxJQUFNLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFBO0FBSS9CLG1CQUF5QixHQUFXO0lBQ2hDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxHQUFHLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTTtZQUNuRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNkLElBQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtnQkFDeEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sSUFBSSxDQUFDLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNwQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUE7Z0JBQ3pCLENBQUM7WUFDTCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2YsQ0FBQztRQUVMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDO0FBaEJEOzJCQWdCQyxDQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2hpbGRfcHJvY2VzcyBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiO1xuaW1wb3J0ICogYXMgUHJvbWlzZSBmcm9tIFwiYmx1ZWJpcmRcIjtcblxuY29uc3QgZXhlYyA9IGNoaWxkX3Byb2Nlc3MuZXhlY1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBrZzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZXhlYyhfX2Rpcm5hbWUgKyAnL3NjcmlwdC5zaCAnICsgcGtnLCAoZXJyLCBvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKCFlcnIgJiYgb3V0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbyA9IG91dC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgaWYgKG8gPT09ICd0cnVlJyB8fCBvID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZXZhbChvKSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJlcnJvciEgXCIgKyBvKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgIH0pXG59Il19
