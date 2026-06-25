const form = document.getElementById("recommendationForm")

form.addEventListener("submit", async(e)=>{
    e.preventDefault()
     

    const food = document.getElementById("selectFood").value
    const userBudget = document.getElementById("budget").value

     if (!food || !userBudget) {
        return alert("Please both food and user value")
    }
    alert("button clicked")

    try {

        const response = await axios.post(
            "http://localhost:3000/api/recommendRestaurant",
            {
                food,
                userBudget
            }
        )
        //console.log(response);
        console.log(response.data)
        form.reset()

    }catch(error){
        console.log(error)
    }

})