"use strict";
const anchor = document.querySelector("a"); // ! is to ensure it wont return null or it exists  , 
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
//typecasting 
// const form =document.querySelector('form')!;
const form1 = document.querySelector('.inputData');
console.log(form1.children);
const emp = {
    name: "Alice",
    employeeId: 123,
};
function sendRequest(method) {
    console.log(`Sending a ${method} request`);
}
sendRequest("GET"); // valid
// sendRequest("PUT"); // Error
//# sourceMappingURL=script.js.map