export const login = (infoArray) => {
    return {
        type: "LOGIN",
        payload: infoArray
    };
}