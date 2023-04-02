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
