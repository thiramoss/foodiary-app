import { View, Text, FlatList } from 'react-native';
import { MealCard } from './MealCard';

const meals = [
    {
        id: String(Math.random()),
        name: 'Café da manhã',
    },
    {
        id: String(Math.random()),
        name: 'Almoço',
    },
    {
        id: String(Math.random()),
        name: 'Janta',
    },
    {
        id: String(Math.random()),
        name: 'Ceia',
    },
];

function MealsListHeader(){
    return(
        <>
            
        </>
    )
}

export function MealsList() {
    return (
        <View className="p-5 flex-1">
            <Text className="text-black-700 text-base font-sans-medium tracking-[1.28px]">
                REFEIÇÕES
            </Text>

            <View className="mt-4 flex-1">
                <FlatList 
                    data={meals}
                    contentContainerClassName="gap-8"
                    keyExtractor={meal => meal.id}
                    renderItem={({item: meal}) => (
                        <MealCard 
                            id={meal.id}
                            name={meal.name}
                        />
                     )}
                />
            </View>
        </View>
    )
}