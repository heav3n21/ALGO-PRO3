const API_KEY = "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"

async function  fetchData(){
const response = await fetch("https://api.openai.com/v1/completions" , {
    method: "POST",
    headers:{
        Authorixation:`Bearer ${API_KEY}`,
        "Content-Type": "application/json"
    },
    body:JSON.stringify({
        model:"text-davinci-003",
        prompt:"hello,how are you today",
        max_tokens:7
    })
})
const data = await response.json
console.log(data)
}
fetchData()