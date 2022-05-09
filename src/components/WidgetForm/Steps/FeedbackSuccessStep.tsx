import { CloseButton } from '../../CloseButton';


interface handleRestartFeedbackProps {
    onFeedbackRestartRequested: () => void;
}


export function FeedbackSuccessStep({ onFeedbackRestartRequested }: handleRestartFeedbackProps) {
    return (
        <>
            <header>
                <CloseButton />
                <div className="flex flex-col items-center py-10 w-[304]">
                    <h1 className=" text-xl mt-2">Agradecemos o Feedback! ✅ </h1>
                    <button
                        type="button"
                        onClick={onFeedbackRestartRequested}
                        className="py-2 mt-4 px-6 md-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition:colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
                    >
                        Quero enviar outro
                    </button>
                </div>

            </header>
        </>
    )
}