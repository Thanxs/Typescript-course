type ReadOrWrite = 'read' | 'write';

type Access = `can${Capitalize<ReadOrWrite>}`;

type ReadOrWrite2<T> = T extends `can${infer R}` ? R : never;

type ROW = ReadOrWrite2<Access>;