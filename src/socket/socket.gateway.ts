import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';

@ApiTags('WebSocket') // Tag to group WebSocket endpoints in Swagger
@WebSocketGateway()
export class SocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  @ApiOperation({ summary: 'WebSocket server initialization' })
  afterInit(server: Server) {
    console.log('WebSocket Server initialized');
  }

  @ApiOperation({ summary: 'Handle client connection' })
  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  @ApiOperation({ summary: 'Handle client disconnection' })
  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('message')
  @ApiOperation({
    summary: 'Send a message via WebSocket',
    description:
      'This handles incoming messages and broadcasts a response to all connected clients.',
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Hello from the client!',
        },
      },
    },
  })
  handleMessage(@MessageBody() message: string): void {
    console.log('Message received:', message);
    this.server.emit('message', `Server response to: ${message}`);
  }
}
