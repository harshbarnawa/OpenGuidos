import cppSnippets from '../data/cpp.json';
import gitSnippets from '../data/git.json';
import { Snippet } from '../types/snippet';

const snippets: Snippet[] = [
    ...cppSnippets,
    ...gitSnippets
];

export function searchSnippets(query: string): Snippet[] {
    const searchTerm = query.toLowerCase();

    return snippets.filter(snippet =>
        snippet.title.toLowerCase().includes(searchTerm) ||
        snippet.tags.some(tag =>
            tag.toLowerCase().includes(searchTerm)
        )
    );
}