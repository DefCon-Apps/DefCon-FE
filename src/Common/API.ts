import axios from "axios";

export interface API_DATA{
    RESULT_CODE: number,
    RESULT_MSG: string,
    RESULT_DATA: MainEvent | MemberData | MemberList | ProjectData | ProjectList | object
}

export interface MainEvent{
    content: String,
    image: String,
    title: String
}

export interface MemberData{
    blog: Object,
    boj: Object,
    facebook: Object,
    github: Object,
    instagram: Object,
    twitter: Object,

    comment: String,
    company: String,
    companyImage: String,
    name: String,
    profileImage: String,

    history: Array<MemberHistoryData>
}

export interface MemberHistoryData{
    date: String,
    content: String
}

export interface MemberList{
    count: Number,
    data: Array<MemberListItem>
}

export interface MemberListItem{
    id: String,
    data: MemberData
}

export interface ProjectData{
    title: String,
    category: "android" | "web" | "repair" | String,
    content: String,
    date: String,
    description: String,
    image: Array<String>,
    tech: Array<String>,
    user: Array<ProjectMemberData>
}

export interface ProjectMemberData{
    user: String,
    role: String
}

export interface ProjectList{
    count: Number,
    data: Array<ProjectListItem>
}

export interface ProjectListItem{
    id: String,
    data: ProjectData
}

const API_URL_BASE : string = process.env.NEXT_PUBLIC_API_BASE_URL as string;

const apiRequest = (apiURL : string, apiReqData : object) => {
    return new Promise((resolve) => {
        sendRequest(apiURL, apiReqData).then((apiResult : any) => {
            let apiResultCode = apiResult["RESULT_CODE"];
            let apiResultData = apiResult["RESULT_DATA"];
            let apiResultMsg = apiResult["RESULT_MSG"];

            if(apiResultCode != 200){
                console.log(apiResult);
                console.log(apiResultMsg);
            }

            resolve(apiResultData);
        });
    })
};

const sendRequest = (url : string, data : object) => {
    return new Promise((resolve) => {
        axios.post(url, data)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                resolve({
                    RESULT_CODE: 100,
                    RESULT_MSG: error as string
                });
            });
    });
}

export const getMemberData = (id: string) => {
    let apiURL : string = `${API_URL_BASE}/member/getData`;
    let apiRequestData = {
        "MEMBER_ID": id
    };

    return apiRequest(apiURL, apiRequestData);
};

export const getMemberList = () => {
    let apiURL : string = `${API_URL_BASE}/member/getList`;

    return apiRequest(apiURL, {});
};

export const getMainEventData = () => {
    let apiURL : string = `${API_URL_BASE}/common/getMainEvent`;
    
    return apiRequest(apiURL, {});
}