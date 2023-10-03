// Add your code here
function submitData (name ,email){
fetch('http://localhost:3000/users', {
    method:'post',
    headers:{
        'content-type':'application/json',
        Accept:'application/json',
  },
    body:JSON.stringify(data)
})
.then(rep => rep.json)
.then(data =>console.log(data))
};
  
.catch(error => {
    console.log('error', error)
    alert error;
});