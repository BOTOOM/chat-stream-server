import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { ChatService } from './chat.service';


@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

  constructor( private  chatService: ChatService) {}

  @WebSocketServer() server;
  users: number = 0;
  ListUser = []

  async handleConnection() {

    // A client has connected
    this.users++;
    // Notify connected clients of current users
    let oldMessages = await this.chatService.findAll();
    this.server.emit('old messages', oldMessages)
    this.server.emit('users', this.users);

  }

  async handleDisconnect() {

    // A client has disconnected
    this.users--;

    // Notify connected clients of current users
    if (this.server.nickname) {
      this.ListUser.splice( this.ListUser.indexOf(this.server.nickname) );
    }
    this.server.emit('List Users', this.ListUser);
    // this.server.emit('users', this.users);

  }

  @SubscribeMessage('chat')
  async onChat(client, message) {
    console.log(message)
    await this.chatService.create(message);
    client.broadcast.emit('chat', message);
  }

  @SubscribeMessage('new user')
  async onNewUser(client, user) {
    this.server.nickname = user;
    this.ListUser.push(this.server.nickname);
    this.server.emit('List Users', this.ListUser);
  }

}