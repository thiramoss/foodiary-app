import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "./Button";
import { CameraIcon, MicIcon } from "lucide-react-native";

export function CreateMealBottomBar() {

    const { bottom } = useSafeAreaInsets();

    return (
        <View className="absolute z-10 w-full bottom-0 bg-white h-20 border-gray-400 pt-4"
            style={{ height: 80 + bottom }}>

            <View className="flex-row mx-auto gap-4 mt-4">
                <Button size="icon" color="gray">
                    <MicIcon />
                </Button>

                <Button size="icon" color="gray">
                    <CameraIcon />
                </Button>
            </View>



        </View>
    )
}
