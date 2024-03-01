import { BotMessageTheme, TextInputTheme, UserMessageTheme } from '@/features/bubble/types';
type messageType = 'apiMessage' | 'userMessage' | 'usermessagewaiting';
export type MessageType = {
    message: string;
    type: messageType;
    sourceDocuments?: any;
    streamable?: boolean;
    id?: string;
};
export type BotProps = {
    chatflowid: string;
    loadID: string;
    userID: string;
    includeQuestions?: boolean;
    closeBoxFunction?: () => void;
    apiHost?: string;
    chatflowConfig?: Record<string, unknown>;
    welcomeMessage?: string;
    botMessage?: BotMessageTheme;
    userMessage?: UserMessageTheme;
    textInput?: TextInputTheme;
    poweredByTextColor?: string;
    badgeBackgroundColor?: string;
    fontSize?: number;
    fullScreen?: boolean;
};
export declare const Bot: (props: BotProps & {
    class?: string;
}) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=Bot.d.ts.map