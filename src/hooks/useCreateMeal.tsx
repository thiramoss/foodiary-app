import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as FileSystem from 'expo-file-system';

import { httpClient } from '../services/httpClient';

type CreateMealResponse = {
    uploadURL: string;
    mealId: string;
}

type CreateMealParams = {
    fileType: 'image/jpeg' | 'audio/m4a';
    onSuccess(mealId: string): void;
}

export function useCreateMeal({ fileType, onSuccess }: CreateMealParams) {
    const queryClient = useQueryClient();

    const { mutateAsync, isPending } = useMutation({
        mutationFn: async (uri: string) => {
            const { data } = await httpClient.post<CreateMealResponse>('/meals', {
                fileType,
            });
            const photoResponse = await fetch(uri);
            const blob = await photoResponse.blob();
            const uploadResponse = await fetch(data.uploadURL, {
                method: 'PUT',
                body: blob,
                headers: {
                    'Content-Type': fileType,
                },
            });
            if (!uploadResponse.ok) {
                throw new Error('Falha ao fazer upload da imagem.');
            }

            return { mealId: data.mealId };
        },
        onSuccess: ({ mealId }) => {
            onSuccess(mealId);
            queryClient.refetchQueries({ queryKey: ['meals'] });
        },
    });

    return {
        createMeal: mutateAsync,
        isLoading: isPending,
    };
}