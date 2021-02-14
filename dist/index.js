"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serializer = void 0;
const Serialize_1 = require("./src/Serializers/Serialize");
const UnSerialize_1 = require("./src/Serializers/UnSerialize");
class Serializer {
    static serialize(source) {
        return (new Serialize_1.Serialize).serialize(source);
    }
    static unSerialize(source) {
        return (new UnSerialize_1.UnSerialize).unSerialize(source);
    }
}
exports.Serializer = Serializer;
//# sourceMappingURL=index.js.map