"use strict";
var child_process = require("child_process");
var Promise = require("bluebird");
var exec = child_process.exec;
function default_1(pkg) {
    return new Promise(function (resolve, reject) {
        exec(__dirname + '/script.sh ' + pkg, function (err, out, stderr) {
            if (!err) {
                if (out && (out === 'true' || out === 'false')) {
                    resolve(eval(out));
                }
            }
            else {
                throw Error("sh error");
            }
        });
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLGFBQWEsV0FBTSxlQUFlLENBQUMsQ0FBQTtBQUMvQyxJQUFZLE9BQU8sV0FBTSxVQUFVLENBQUMsQ0FBQTtBQUVwQyxJQUFNLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFBO0FBSS9CLG1CQUF5QixHQUFXO0lBQ2hDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxHQUFHLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTTtZQUNuRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxLQUFLLE1BQU0sSUFBSSxHQUFHLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7Z0JBQ3RCLENBQUM7WUFDTCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDM0IsQ0FBQztRQUdMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFJTixDQUFDO0FBakJEOzJCQWlCQyxDQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2hpbGRfcHJvY2VzcyBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiO1xuaW1wb3J0ICogYXMgUHJvbWlzZSBmcm9tIFwiYmx1ZWJpcmRcIjtcblxuY29uc3QgZXhlYyA9IGNoaWxkX3Byb2Nlc3MuZXhlY1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBrZzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZXhlYyhfX2Rpcm5hbWUgKyAnL3NjcmlwdC5zaCAnICsgcGtnLCAoZXJyLCBvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAob3V0ICYmIChvdXQgPT09ICd0cnVlJyB8fCBvdXQgPT09ICdmYWxzZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZXZhbChvdXQpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJzaCBlcnJvclwiKVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSlcbiAgICB9KVxuXG5cblxufSJdfQ==
