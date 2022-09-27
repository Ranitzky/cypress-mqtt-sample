import { connect } from './commands/mqtt';

Cypress.Commands.add('connect', connect);
