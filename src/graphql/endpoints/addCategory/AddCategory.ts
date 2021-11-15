import Query from "./Query"

const Endpoint = (name: string, description: string) => {
    return Query(name, description);
}

export default Endpoint;