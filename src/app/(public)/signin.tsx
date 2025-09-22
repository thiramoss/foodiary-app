import { Text, View } from "react-native";
import { AuthLayout } from "../../components/AuthLayout";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ArrowLeftCircleIcon } from "lucide-react-native";
import { router } from "expo-router";
import { colors } from "../../styles/colors";

export default function SingIn() {
  return (
    <>
      <AuthLayout icon="👤" title="Entre em sua conta" subtitle="Acesse sua conta para continuar">
        <View className="justify-between flex-1">
          <View className="gap-6">
          <Input
            label="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
          />

          <Input
            label="Senha"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="password"
            secureTextEntry
          />
        </View>

        <View  className="flex-row gap-6">
          <Button onPress={router.back} size="icon" color="gray">
            <ArrowLeftCircleIcon size={20} color={colors.black[700 ]}/>
          </Button>
          <Button className="flex-1">
            Entrar
          </Button>
        </View>
        </View>
        
      </AuthLayout>
    </>
  )
}