import { Link } from "expo-router";
import { TouchableOpacity, Text, View} from "react-native";

type Food = {
  id: string;
  name: string;
  calories: number;
  proteins: number;
  carbohydrates: number;
  fats: number;
}

interface IMealCardProps {
  id: string;
  name: string;
  icon: string;
  foods: Food[];
  createdAt: Date;
}

export function MealCard({ id, name, icon, foods, createdAt }: IMealCardProps) {
    const time = createdAt.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <Link href={`/meals/${id}`} asChild>
            <TouchableOpacity>
            <Text className="text-base font-sans-regular text-gray-700">
                {time}
            </Text>

            <View className="mt-2 p-4 py-5 flex-row gap-3 items-center border border-gray-400 rounded-2xl">
                <View className="size-12 bg-gray-200 rounded-full items-center justify-center">
                    <Text>{icon}</Text>
                </View>

                <View className="flex-1">
                    <Text className="text-base font-sans-regular text-gray-700">{name}</Text>
                    <Text className="text-base font-sans-medium text-black-700" numberOfLines={1}>
                        {foods.map(food => food.name).join(', ')}
                    </Text>
                </View>
            </View>
            </TouchableOpacity> 
        </Link>
    )
}