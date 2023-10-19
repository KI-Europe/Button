/* eslint-disable solid/reactivity */
import { sendRequest } from '@/utils/index'
type BotProps = {
    chatflowid: string
    apiHost?: string
    chatflowConfig?: Record<string, unknown>
    theme?:Record<string, unknown>
    
}

export const initFull = (props: BotProps & { id?: string }) => {
    const fullElement = props.id
      ? document.getElementById(props.id)
      : document.querySelector('flowise-fullchatbot')
    if (!fullElement) throw new Error('<flowise-fullchatbot> element not found.')
    Object.assign(fullElement, props)
}

export const  init = async (props: BotProps) => {
    const data = sendRequest<any>({
        method: 'GET',
        url: `https://vshdvtqafk.execute-api.us-east-2.amazonaws.com/default/user_config_api`,
    }).then((response) => response.data);
    // TODO: need to add error checking and handling 
    const config = await data;
    
    props.theme = JSON.parse(config.body).theme;
    console.log(props)
    const element = document.createElement('flowise-chatbot')
    Object.assign(element, props)
    document.body.appendChild(element)
}

type Chatbot = {
    initFull: typeof initFull
    init: typeof init
}

declare const window:
    | {
          Chatbot: Chatbot | undefined
      }
    | undefined

export const parseChatbot = () => ({
    initFull,
    init
})

export const injectChatbotInWindow = (bot: Chatbot) => {
    if (typeof window === 'undefined') return
    window.Chatbot = { ...bot }
}
