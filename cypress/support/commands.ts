import { publishMessage } from './commands/mqtt';

Cypress.Commands.add('publishMessage', publishMessage);
