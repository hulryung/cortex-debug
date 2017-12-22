import { Event } from 'vscode-debugadapter';
import { DebugProtocol } from 'vscode-debugprotocol';

export class AdapterOutputEvent extends Event implements DebugProtocol.Event {
	body: {
		type: string,
		content: string
	};
	event: string;

	constructor(content: string, type: string) {
		super('adapter-output', { content: content, type: type });
	}
}

export class SWOConfigureEvent extends Event implements DebugProtocol.Event {
	body: {
		type: string,
		port: number,
		path: string
	};
	event: string;

	constructor(type: string, params: any) {
		let body = { type: type, ...params };
		super('swo-configure', body);
	}
}