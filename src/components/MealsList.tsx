import { View, Text, FlatList } from 'react-native';
import { MealCard } from './MealCard';
import { DateSwitcher } from './DateSwitcher';
import { DailyStats } from './DailyStats';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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

function MealsListHeader() {
    return (
        <View className="flex-1">
            <DateSwitcher />

            <View className="mt-2">
                <DailyStats
                    calories={{
                        current: 500,
                        goal: 2500,
                    }}
                    proteins={{
                        current: 500,
                        goal: 2500,
                    }}
                    carbohydrates={{
                        current: 500,
                        goal: 2500,
                    }}
                    fats={{
                        current: 500,
                        goal: 2500,
                    }}
                />
            </View>

            <View className="h-px bg-gray-200 mt-7" />

            <Text className="text-black-700 m-5 text-base font-sans-medium tracking-[1.28px]">
                REFEIÇÕES
            </Text>
        </View>

    )
}


export function MealsList() {
    const { bottom } = useSafeAreaInsets();

    return (

        <FlatList
            contentContainerStyle={{ paddingBottom: 80 + bottom + 16}}
            data={meals}
            contentContainerClassName="gap-8 px-5"
            ListHeaderComponent={<MealsListHeader />}
            keyExtractor={meal => meal.id}
            renderItem={({ item: meal }) => (
                <View className="mx-5">
                    <MealCard
                        id={meal.id}
                        name={meal.name}
                    />
                </View>

            )}
        />
    )
}