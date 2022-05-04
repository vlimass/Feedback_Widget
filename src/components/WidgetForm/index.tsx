import { useState } from "react";
import { CloseButton } from "../CloseButton";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

import bugImage from '../../assets/Bug.svg';
import ideaImage from '../../assets/Idea.svg';
import thoughtImage from '../../assets/Thought.svg';


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImage,
            alt: 'Imagem de um inseto',
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImage,
            alt: 'Imagem de uma lâmpada',
        },
    }, 
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImage,
            alt: 'Imagem de um balão de pensamento',
        },
    },
};

// Object.entries(feedbackTypes) -> 
// [
//     ['BUG', {conteudo de BUG}],
//     ['IDEA', {conteudo de IDEA}],
//     ['OTHER', {conteudo de OTHER}],
// ]

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
            ): (
                <FeedbackContentStep />
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a href="https://rocketseat.com.br" className="underline underline-offset-2" target="_blank">RocketSeat</a>
            </footer>
        </div>
    )
}