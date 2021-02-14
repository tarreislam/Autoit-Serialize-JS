import {Serialize} from "./src/Serializers/Serialize";
import {UnSerializedValue} from "./src/Types/UnSerializedValue";
import {UnSerialize} from "./src/Serializers/UnSerialize";

export class Serializer {

    static serialize(source: UnSerializedValue): string {
        return (new Serialize).serialize(source)
    }

    static unSerialize(source: string): UnSerializedValue {
        return (new UnSerialize).unSerialize(source)
    }
}
