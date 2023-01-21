import axios from "axios";

export interface API_DATA{
    RESULT_CODE: number,
    RESULT_MSG: string,
    RESULT_DATA: MainEvent | MemberData | MemberList | ProjectData | ProjectList | object
}

export interface MainEvent{
    content: string,
    image: string,
    title: string
}

export interface MemberData{
    blog: Object,
    boj: Object,
    facebook: Object,
    github: Object,
    instagram: Object,
    twitter: Object,

    comment: string,
    company: string,
    companyImage: string,
    name: string,
    profileImage: string,

    history: Array<MemberHistoryData>
}

export interface MemberHistoryData{
    date: string,
    content: string
}

export interface MemberList{
    count: Number,
    data: Array<MemberListItem>
}

export interface MemberListItem{
    id: string,
    data: MemberData
}

export interface ProjectData{
    title: string,
    category: "android" | "web" | "repair" | string,
    content: string,
    date: string,
    description: string,
    image: Array<string>,
    tech: Array<string>,
    user: Array<ProjectMemberData>
}

export interface ProjectMemberData{
    user: string,
    role: string
}

export interface ProjectList{
    count: Number,
    data: Array<ProjectListItem>
}

export interface ProjectListItem{
    id: string,
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
};

export const getProjectData = (id: string) => {
    let apiURL : string = `${API_URL_BASE}/project/getData`;
    let apiRequestData = {
        "PROJECT_ID": id
    }

    return apiRequest(apiURL, apiRequestData);
};

export const getProjectList = () => {
    let apiURL : string = `${API_URL_BASE}/project/getList`;

    return apiRequest(apiURL, {});
};