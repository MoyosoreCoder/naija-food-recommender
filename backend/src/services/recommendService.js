import restaurantInfo from '../data/restaurantData.js'

const getRecommedation = ({food, userBudget}) => {

    const result = restaurantInfo.filter((data) => {
        
        const budgetResult = data.budget === userBudget

        const foodResult = data.menu.some((item)=>{
                return item.includes((food))
            })
        return budgetResult && foodResult

    })
    return result    
}
export default getRecommedation;