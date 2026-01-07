import { Text, View } from "react-native";
import { AuthLayout } from "../../components/AuthLayout";
import { useState } from "react";
import { GoalStep } from "../../components/SignUpSteps/GoalStep";
import { GenderStep } from "../../components/SignUpSteps/GenderStep";
import { BirthDateStep } from "../../components/SignUpSteps/BirthDateStep";
import { WeightStep } from "../../components/SignUpSteps/WeightStep";
import { HeightStep } from "../../components/SignUpSteps/HeightStep";
import { ActivityLevelStep } from "../../components/SignUpSteps/ActivityLevelStep";
import { AccountStep } from "../../components/SignUpSteps/AccountStep";
import { Button } from "../../components/Button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react-native";
import { colors } from "../../styles/colors";
import { router } from "expo-router";
import z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../../components/SignUpSteps/signUpSchema";

export default function SingUp() {


  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const form = useForm({
    resolver: zodResolver(signUpSchema),
  } )

  const steps = [
    {
      icon: '🎯',
      title: 'Qual é o seu objetivo',
      subtitle: 'O que você pretende alcançar com a dieta?',
      Component: GoalStep,
    },
    {
      icon: '👥',
      title: 'Qual é o seu gênero?',
      subtitle: 'Seu gênero influencia no tipo da dieta?',
      Component: GenderStep,
    },
    {
      icon: '📅',
      title: 'Qual é sua data de nascimento?',
      subtitle: 'Sua idade ajuda a personalizar sua dieta',
      Component: BirthDateStep,
    },
    {
      icon: '⚖️',
      title: 'Qual é o seu peso?',
      subtitle: 'Vamos calcular seu índice de massa corporal',
      Component: WeightStep,
    },
    {
      icon: '📏',
      title: 'Qual é a sua altura?',
      subtitle: 'Para um cálculo mais preciso',
      Component: HeightStep,
    },
    {
      icon: '🔥',
      title: 'Nível de atividade',
      subtitle: 'Selecione seu nível de atividade física',
      Component: ActivityLevelStep,
    },
    {
      icon: '🔒',
      title: 'Crie sua conta',
      subtitle: 'Insira seus dados de acesso',
      Component: AccountStep,
    }
  ];

  function handlePreviousStep() {
    if (currentStepIndex === 0) {
      router.back();
      return;
    }
    setCurrentStepIndex(prevState => prevState - 1);
  }

  function handleNextStep() {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(prevState => prevState + 1);
    } else {
      form.handleSubmit((data) => {
        console.log(data);
      })();
    }
  }


  const currentStep = steps[currentStepIndex];

  return (
    <AuthLayout
      icon={currentStep.icon}
      title={currentStep.title}
      subtitle={currentStep.subtitle}>

      <View className="flex-1 justify-between">
        <FormProvider {...form}>
          <currentStep.Component />
        </FormProvider>
        

        <View className="flex-row justify-between gap-4">
          <Button size="icon" color="gray" onPress={handlePreviousStep}>
            <ArrowLeftIcon size={20} color={colors.black[700]} />
          </Button>

          {currentStepIndex === steps.length - 1 ? (
            <Button className="flex-1" onPress={handleNextStep}>
              Criar conta
            </Button>
          ) : (
            <Button size="icon" onPress={handleNextStep}>
              <ArrowRightIcon size={20} color={colors.black[700]} />
            </Button>
          )}

        </View>

      </View>


    </AuthLayout>
  )
}