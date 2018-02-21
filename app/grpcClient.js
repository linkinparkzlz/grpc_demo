var PROTO_FILE_PATH = '/Users/zoulvzhou/WebstormProjects/grpc_demo/proto/Student.proto';
var grpc = require("grpc");
var grpcService = grpc.load(PROTO_FILE_PATH).com.zou.proto;

var client = new grpcService.StudentService('localhost:8899', grpc.credentials.createInsecure());

client.getRealNameByUsername({username: 'lisi'}, function (error, respData) {
    console.log(respData);
});