import internal from "stream";
import Query from "./Query"

const Endpoint = (name: string, description: string, locationId: number, categoryId: number) => {
    return Query(name, description, locationId, categoryId);
}

export default Endpoint;