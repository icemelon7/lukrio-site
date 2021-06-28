import { SERVER_URL, token } from "../credentials";
import { subInfo } from "../desktop/SignupSideBySide";

export const sendBetaSignup = (email: string, refId: string) : Promise<subInfo> => {
    return new Promise<subInfo>(async (resolve, reject) => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: {
                    authorization: token,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    refId
                })
            };
            const response = await fetch(SERVER_URL + "/website/beta/signup", requestOptions);
            let data = await response.json();
            return resolve({status: response.status, ...data});
        } catch (e) {
            return reject();
        }
    })
}

export const getSignupInfo = (id: string) : Promise<subInfo> => {
    return new Promise<subInfo>(async (resolve, reject) => {
        try {
            const requestOptions = {
                method: "GET",
                headers: {
                    authorization: token,
                },
            };
            const response = await fetch(SERVER_URL + `/website/beta/info/${id}`, requestOptions);
            if (response.status === 200) {
                let data = await response.json();
                return resolve({status: response.status, ...data});
            } else {
                return reject(response.status);
            }
        } catch (e) {
            return reject(500);
        }
    })
}