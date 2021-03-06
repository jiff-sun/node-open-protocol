/*
   Copyright 2018 Smart-Tech Controle e Automação

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
"use strict";
/*jshint esversion: 6, node: true*/

/**
 * @class
 * @name MID0064
 * @param {object} MID0064
 * @param {number} MID0064.tighteningID
 */

const helpers = require("../helpers.js");
const processParser = helpers.processParser;
const serializerField = helpers.serializerField;

function parser(msg, opts, cb) {

    let buffer = msg.payload;
    msg.payload = {};

    let position = {
        value: 0
    };

    msg.revision = msg.revision || 1;

    switch (msg.revision) {
        case 7:
        case 6:
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
            processParser(msg, buffer, "tighteningID", "number", 10, position, cb) &&
                cb(null, msg);
            break;

        default:
            cb(new Error(`[Parser MID${msg.mid}] invalid revision [${msg.revision}]`));
            break;

    }

}

function serializer(msg, opts, cb) {

    let buf;
    let statusprocess = false;

    let position = {
        value: 0
    };

    msg.revision = msg.revision || 1;

    switch (msg.revision) {

        case 7:
        case 6:
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:

            buf = Buffer.alloc(10);

            position.value = 10;

            statusprocess = serializerField(msg, buf, "tighteningID", "number", 10, position, cb);

            if (!statusprocess) {
                return;
            }

            msg.payload = buf;

            cb(null, msg);

            break;

        default:
            cb(new Error(`[Serializer MID${msg.mid}] invalid revision [${msg.revision}]`));
            break;
    }
}

function revision() {
    return [7, 6, 5, 4, 3, 2, 1];
}

let params = {
    "1": [{
        name: "tighteningID",
        type: "string",
        desc: "10 ASCII digits"
    }],
    "2": [{
        name: "tighteningID",
        type: "string",
        desc: "10 ASCII digits"
    }],
    "3": [{
        name: "tighteningID",
        type: "string",
        desc: "10 ASCII digits"
    }],
    "4": [{
        name: "tighteningID",
        type: "string",
        desc: "10 ASCII digits"
    }],
    "5": [{
        name: "tighteningID",
        type: "string",
        desc: "10 ASCII digits"
    }],
    "6": [{
        name: "tighteningID",
        type: "string",
        desc: "10 ASCII digits"
    }],
    "7": [{
        name: "tighteningID",
        type: "string",
        desc: "10 ASCII digits"
    }]
};

module.exports = {
    params,
    parser,
    serializer,
    revision
};