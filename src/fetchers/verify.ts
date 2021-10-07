import { SERVER_URL, token } from "../credentials";

export const verifyUsingCode = async (code: string, username: string): Promise<number> => {
    return new Promise<number>(async (resolve, reject) => {
        try {
            const requestOptions = {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    TOTPCode: code,
                    username
                })
            };
            let response = await fetch(`${SERVER_URL}/user/verify`,requestOptions);
            return resolve(response.status);
        } catch (e) {
            return resolve(500);
        }
    })
}