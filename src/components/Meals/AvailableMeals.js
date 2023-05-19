import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Butter Chicken',
    description: 'Tandoori chicken cooked in a creamy tomato-based sauce',
    price: 12.99,
  },
  {
    id: 'm2',
    name: 'Biryani',
    description: 'Fragrant rice dish cooked with meat, spices, and vegetables',
    price: 8.99,
  },
  {
    id: 'm3',
    name: 'Dosa',
    description: 'Thin, crispy pancake made from fermented rice and lentil batter',
    price: 6.99,
  },
  {
    id: 'm4',
    name: 'Paneer Tikka',
    description: 'Grilled cottage cheese marinated in spices and served with mint chutney',
    price: 9.99,
  },
];


const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
