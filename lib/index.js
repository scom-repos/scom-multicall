"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMulticallInfo = exports.getMulticallInfoList = exports.deploy = exports.DefaultDeployOptions = exports.Contracts = void 0;
const Contracts = __importStar(require("./contracts/index"));
exports.Contracts = Contracts;
;
;
var progressHandler;
exports.DefaultDeployOptions = {};
async function deploy(wallet, options, onProgress) {
    let multicall = new Contracts.MultiCall(wallet);
    onProgress('Deploy MultiCall');
    let address = await multicall.deploy();
    onProgress('MultiCall deployed ' + address);
    return {
        multicall: address
    };
}
exports.deploy = deploy;
;
exports.default = {
    Contracts,
    deploy,
    DefaultDeployOptions: exports.DefaultDeployOptions
};
var utils_1 = require("./utils");
Object.defineProperty(exports, "getMulticallInfoList", { enumerable: true, get: function () { return utils_1.getMulticallInfoList; } });
Object.defineProperty(exports, "getMulticallInfo", { enumerable: true, get: function () { return utils_1.getMulticallInfo; } });
