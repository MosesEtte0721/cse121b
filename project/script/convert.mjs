
// converts the incoming data to json
function convertJson(xina) {
    if (xina.ok) {
        return xina.json();
    } else {
        throw new Error("Bad requests")
    };
};

export default convertJson;