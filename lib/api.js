import { getUrl, postRequest } from "./network.js";

const api = {
    async sendMessage(formData) {
        const url = getUrl("contact");
        return await postRequest(url, formData);
    }
};

export default api;
