import cppSnippets from '../data/cpp.json';
import { Snippet } from '../types/snippet';

export function searchSnippets(query: string): Snippet[] {
    const searchTerm = query.toLowerCase();

    return cppSnippets.filter(snippet =>
        snippet.title.toLowerCase().includes(searchTerm) ||
        snippet.tags.some(tag =>
            tag.toLowerCase().includes(searchTerm)
        )
    );
}