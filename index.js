import axios, {isCancel, AxiosError} from 'axios';
console.log("ffdsf")
async function  send(num) {
    // axios({
    //     method: 'get',
    //     url: `https://jsonplaceholder.typicode.com/users/${num}`,
        
    //   })
    //     .then(function (response) {
    //      console.log(response.data) 
    //    // return response.data
    //     });
       let data2 =await axios.get(`https://jsonplaceholder.typicode.com/users/${num}`)
       // console.log(data2.data) 
        // axios({
        //     method: 'post',
        //     url: `https://jsonplaceholder.typicode.com/posts?userId=${num}`, data: {
        //         userId: 1,
        //         id: 1,
        //         title: "sunt aut facere repellat",
        //         body: "quia et suscipit suscipit recusandae"
        //       },
                 
            
        //   })
        //     .then(function (response) {
        //      console.log(response.data) 
        //    // return response.data
        //     });

        const {data} = await axios.post(`https://jsonplaceholder.typicode.com/posts?userId=${num}`, {
            userId: 1,
			id: 1,
			title: "sunt aut facere repellat",
			body: "quia et suscipit suscipit recusandae"
  }, {
    headers: {
        'Content-Type': 'application/json'
    }
})
        console.log({...data2.data,data})
}

send(1)