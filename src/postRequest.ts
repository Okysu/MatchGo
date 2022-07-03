import axios from "axios";
import sha1 from "sha1";
const instance = axios.create({
    baseURL: 'https://match.api.yby.zone/',
    timeout: 5000
});
instance.interceptors.request.use(function (config) {
    if (config.params.password) {
        config.params.password = sha1(config.params.password);
    }
    const salt: string = Math.random().toString(36).slice(-6);
    const when: string = String(Date.now());
    const sid: string = 'MatchGo';
    const token: string[] = [sid, when, salt];
    const post: string = token.join('#');
    config.headers!.Authorization = sha1(post);
    config.headers!.Sid = sid;
    config.headers!.When = when;
    config.headers!.Salt = salt;
    return config;
}, function (error) {
    return Promise.reject(error);
});
export {
    instance,
};
export const getHitokoto = async (): Promise<string> => {
    let msg: string = "";
    await axios.get("https://v1.hitokoto.cn/?c=k&c=d").then(function (response: any) {
        msg = response.data.hitokoto + ' - ' + response.data.from;
    });
    return msg;
}


