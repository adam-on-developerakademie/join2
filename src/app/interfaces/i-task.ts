export interface ITask {
    dbid?: string;
    positionIndex?: number;
    createDate: string;
    ownerId: string;
    title: string;
    description: string;
    dueDate: string;
    completed: boolean;
     priority: string | 'low' | 'medium' | 'high';
 /*   assignTo: string[];
    category: { name: string; color: string };
    subTasks: ITask[];
    status: string | 'to-do' | 'in-progress' | 'await-feedback' | 'done';
 */

}[]
