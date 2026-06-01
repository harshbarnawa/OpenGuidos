import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {



	const disposable = vscode.commands.registerCommand(
		'openguido.searchSnippet',
		async () => {

			const query = await vscode.window.showInputBox({
				placeHolder: 'Search syntax, command, snippet...'
			});

			if (!query) {
				return;
			}

			vscode.window.showInformationMessage(
				`You searched: ${query}`
			);
		}
	);

	context.subscriptions.push(disposable);
}

export function deactivate() {}