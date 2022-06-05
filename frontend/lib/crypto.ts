import CryptoJS from "crypto-js";

export const encrypt = (data: any, dataType: string) => {
    const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        "secret"
    ).toString();

    localStorage.setItem(dataType, encryptedData);
};

export const decrypt = (dataType: string) => {
    const storedData = localStorage.getItem(dataType);

    if (!storedData) return null;

    const decryptedData = CryptoJS.AES.decrypt(
        localStorage.getItem(dataType)!,
        "secret"
    ).toString(CryptoJS.enc.Utf8);

    return JSON.parse(decryptedData);
};
