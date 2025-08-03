
// let employees = [
//     {
//         "id":1,
//         "name": "Arjun",
//         "email" : "e@e.com",
//         "password" : "123",
//         "taskCounts": {
//             "active":2,
//             "newtask":1,
//             "completed":1,
//             "failed":0
//         },
//         "tasks":[
//             {
//                 "active":true,
//                 "newtask":false,
//                 "completed":false,
//                 "failed":false,
//                 "taskTitle": "Update website",
//                 "taskDescription": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, sunt",
//                 "taskDate": "2024-10-14",
//                 "category": "Development"
//             },
//             {
//                 "active":true,
//                 "newTask":false,
//                 "completed":false,
//                 "failed":false,
//                 "taskTitle": "khela koro",
//                 "taskDescription": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, sunt",
//                 "taskDate": "2024-10-14",
//                 "category": "Development"
//             },
//             {
//                 "active":false,
//                 "newTask":true,
//                 "completed":false,
//                 "failed":false,
//                 "taskTitle": "Update website",
//                 "taskDescription": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, sunt",
//                 "taskDate": "2024-10-14",
//                 "category": "Development"
//             },
//             {
//                 "active":false,
//                 "newTask":false,
//                 "completed":true,
//                 "failed":false,
//                 "taskTitle": "Update website",
//                 "taskDescription": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, sunt",
//                 "taskDate": "2024-10-14",
//                 "category": "Development"
//             }
//         ]
//     },
//     {
//         "id":2,
//         "name": "Sneha",
//         "email" : "f@f.com",
//         "password" : "1234",
//         "taskCounts": {
//             "active":1,
//             "newtask":1,
//             "completed":1,
//             "failed":1
//         },
//         "tasks":[
//             {
//                 "active":true,
//                 "newTask":false,
//                 "completed":false,
//                 "failed":false,
//                 "taskTitle": "Update website",
//                 "taskDescription": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, sunt",
//                 "taskDate": "2024-10-14",
//                 "category": "Development"
//             },
//             {
//                 "active":false,
//                 "newTask":false,
//                 "completed":false,
//                 "failed":true,
//                 "taskTitle": "Update website",
//                 "taskDescription": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, sunt",
//                 "taskDate": "2024-10-14",
//                 "category": "Development"
//             },
//             {
//                 "active":false,
//                 "newTask":true,
//                 "completed":false,
//                 "failed":false,
//                 "taskTitle": "Update website",
//                 "taskDescription": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, sunt",
//                 "taskDate": "2024-10-14",
//                 "category": "Development"
//             },
//             {
//                 "active":false,
//                 "newTask":false,
//                 "completed":true,
//                 "failed":false,
//                 "taskTitle": "Update website",
//                 "taskDescription": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, sunt",
//                 "taskDate": "2024-10-14",
//                 "category": "Development"
//             }
//         ]
//     }
// ]
// let admin =[
//     {
//         "id":1,
//         "email":"admin@e.com",
//         "password":"12345"
//     }
// ]
export let setlocalstorage = ()=>{
   // localStorage.setItem("admin",JSON.stringify(admin))
}
export let getlocalstorage = ()=>{
    let edata= JSON.parse(localStorage.getItem("employees"));
    let adata= JSON.parse(localStorage.getItem("admin"));
    return {edata,adata};
    
}