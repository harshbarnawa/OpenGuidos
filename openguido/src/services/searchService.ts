import cppBasics from '../data/cpp/basics.json';
import cppStl from '../data/cpp/stl.json';
import cppOop from '../data/cpp/oop.json';
import cppDsa from '../data/cpp/dsa.json';
import cppAlgorithms from '../data/cpp/algorithms.json';

import cppString from '../data/cpp/string.json';
import cppVector from '../data/cpp/vector.json';
import cppMap from '../data/cpp/map.json';
import cppSet from '../data/cpp/set.json';
import cppUnorderedMap from '../data/cpp/unordered_map.json';
import cppUnorderedSet from '../data/cpp/unordered_set.json';
import cppPriorityQueue from '../data/cpp/priority_queue.json';

import gitBasic from '../data/git/basic.json';

import linuxFileSystem from '../data/linux/file-system.json';
import linuxProcess from '../data/linux/process.json';
import linuxNetworking from '../data/linux/networking.json';
import linuxPermissions from '../data/linux/permissions.json';

import { Snippet } from '../types/snippet';

const snippets: Snippet[] = [
    ...cppBasics,
    ...cppStl,
    ...cppOop,
    ...cppDsa,
    ...cppAlgorithms,

    ...cppString,
    ...cppVector,
    ...cppMap,
    ...cppSet,
    ...cppUnorderedMap,
    ...cppUnorderedSet,
    ...cppPriorityQueue,

    ...gitBasic,

    ...linuxFileSystem,
    ...linuxProcess,
    ...linuxNetworking,
    ...linuxPermissions
];

export function searchSnippets(
    query: string
): Snippet[] {

    const searchTerm =
        query.toLowerCase().trim();

    return snippets.filter(snippet =>
        snippet.title
            .toLowerCase()
            .includes(searchTerm) ||

        snippet.description
            .toLowerCase()
            .includes(searchTerm) ||

        snippet.tags.some(tag =>
            tag
                .toLowerCase()
                .includes(searchTerm)
        )
    );
}