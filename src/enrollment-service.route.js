"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var in_memory_db_1 = require("./in-memory-db");
function saveEnrollment(req, res) {
    var enrollment = req.body;
    console.log('Received the Enrollment: ');
    console.log(enrollment);
    in_memory_db_1.ENROLLMENTS.push(enrollment);
    res.status(200).json({ message: "Enrollment added successfully." });
}
exports.saveEnrollment = saveEnrollment;
function getAllEnrollments(req, res) {
    res.status(200).json(in_memory_db_1.ENROLLMENTS);
}
exports.getAllEnrollments = getAllEnrollments;
function getAllStates(req, res) {
    res.status(200).json({"states":['CA','CO','WI','VA','OH','GA','IN','KY','NY','NV','NH']});
}
exports.getAllStates = getAllStates;
function getAllPlans(req, res) {
    res.status(200).json({"states":['Senior Advantage Basic - HMO','Senior Advantage Plus - HMO','Balanced Blue Choice Basic - PPO','Balanced Blue Choice Plus - PPO','Blue Cross Senior Secure Basic - HMO','Blue Cross Senior Secure Plus - HMO']});
}
exports.getAllPlans = getAllPlans;
function clearAllEnrollments(req, res) {
    in_memory_db_1.ENROLLMENTS = [];
    res.status(200).json(in_memory_db_1.ENROLLMENTS);
}
exports.clearAllEnrollments = clearAllEnrollments;
