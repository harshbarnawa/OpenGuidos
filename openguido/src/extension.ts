import * as vscode from 'vscode';
import { searchSnippets } from './services/searchService';

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

			const results = searchSnippets(query);

			if (results.length === 0) {
				vscode.window.showInformationMessage(
					'No snippets found.'
				);
				return;
			}

			const selected = await vscode.window.showQuickPick(
				results.map(snippet => ({
					label: snippet.title,
					description: snippet.description
				}))
			);

			if (!selected) {
				return;
			}

			const snippet = results.find(
				s => s.title === selected.label
			);

			if (!snippet) {
				return;
			}

			const action = await vscode.window.showQuickPick([
    'Preview Snippet',
    'Copy To Clipboard',
    'Insert Into Editor'
]);

if (!action) {
    return;
}

if (action === 'Preview Snippet') {
    vscode.window.showInformationMessage(
        snippet.code
    );
}

if (action === 'Copy To Clipboard') {

    await vscode.env.clipboard.writeText(
        snippet.code
    );

    vscode.window.showInformationMessage(
        'Snippet copied to clipboard!'
    );
}

if (action === 'Insert Into Editor') {

    const editor = vscode.window.activeTextEditor;

    if (!editor) {
        vscode.window.showErrorMessage(
            'No active editor found.'
        );
        return;
    }

    editor.edit(editBuilder => {
        editBuilder.insert(
            editor.selection.active,
            snippet.code
        );
    });
}



		}
	);

	context.subscriptions.push(disposable);
}

export function deactivate() {}