// const data=document.getElementById('but')
// data.addEventListener('click',touch)
//  async function touch(){
    //    const resp= await fetch('/get-data')
    //    const dt= await resp.json()
    //    console.log(dt)
    // }

    const data=document.getElementById('but')
    const data1=document.getElementById('but1')
    const data2=document.getElementById('but2')
    const data3=document.getElementById('but3')
    const username=document.getElementById('username')
    const password=document.getElementById('password')
    data.addEventListener('click',touch)
    async function touch(){
        const resp=await fetch('/make-new-record',{
        method:'POST',
        body:JSON.stringify({
            'username':username.value,
            'password':password.value
        }),
        headers:{
            Accept : 'application/json',
            'content-type':'application/json'
        }
    })
       const dt= await resp.json()
       console.log(dt)
}

data1.addEventListener('click',touch1)
    async function touch1(){
        const resp1=await fetch('/delete-data',{
        method:'POST',
        body:JSON.stringify({
            // '_id':'65b3b517b4ec669e910df134',
            'username':username.value,
            'password':password.value   
        }),
        headers:{
            Accept : 'application/json',
            'content-type':'application/json'
        }
    })
       const dt= await resp1.json()
       console.log(dt)
}