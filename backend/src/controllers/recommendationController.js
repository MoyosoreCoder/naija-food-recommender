import getRecommedation from '../services/recommendService.js'

const request = (req, res) => {
   const  { food, userBudget } = req.body
   if (! food || !userBudget) {
      return res.status(400).json({
         error: "food and user Budget required"
      })

   }
   const dataResponse = getRecommedation({food, userBudget})
   return res.status(200).json({
      message: true,
      data: dataResponse
   })
   console.log (dataResponse)

}
export default request