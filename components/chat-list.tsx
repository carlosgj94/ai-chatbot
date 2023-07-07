import { type Message } from 'ai'

import { Separator } from '@/components/ui/separator'
import { ChatMessage } from '@/components/chat-message'

export interface ChatList {
  messages: Message[]
}

export function ChatList({ messages }: ChatList) {
  if (messages.length === 1) {
    let situationDescription: Message = {
      id: '1',
      role: 'assistant',
      content: '<<You are walking in the unknown street and you find an old lady that seemed dispersed looking at the horizon. Something seems odd, you should ask her.>>'
    }
    messages.unshift(situationDescription)
  }

  return (
    <div className="relative mx-auto max-w-2xl px-4">
      {messages.filter(m => m.role !== 'system').map((message, index) => (
        <div key={index}>
          <ChatMessage message={message} />
          {index < messages.length - 1 && (
            <Separator className="my-4 md:my-8" />
          )}
        </div>
      ))}
    </div>
  )
}