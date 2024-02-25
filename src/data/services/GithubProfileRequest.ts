import axios from "axios";

function GithubProfileRequest() {
    return axios.get("https://api.github.com/users/draraedus")
        .then(function (response) {
            let resData = response.data;
            return resData;
        })
        .catch(function (error) {
            console.error("Erro na requisição:", error);
            throw error;  
        });
}

export default GithubProfileRequest;
