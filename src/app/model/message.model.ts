export interface Message {
  messageContent: String,
  sentBy: number
}

export interface MessageResponse {
  messageId: number,
  timestamp: string,
  content: string,
  sentBy: string
}

export interface MessageRequest {
  userId: number,
  foreignId: number
}

export interface PrivateMessage {
  messageContent: String,
  sentBy: number,
  sentTo: number
}
