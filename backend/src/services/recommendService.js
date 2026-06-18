import restaurantInfo from '../data/restaurantData.js'

const getRecommendation = ({food, budget}) => {
    //user typed budget and food, return restaurant and location
    //using same data to check through user food and budget
    const budgetResponse = restaurantInfo.filter(restaurant => {

    
        restaurant.budget === budget 
    
    const foodSearch = restaurantInfo.menu.some(foodList =>
        food.List=== food)
    })
    return budgetResponse && foodSearch

}