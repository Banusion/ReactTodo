import { Todo } from './interfaces'

declare type ChangeCallBack = (store: TodoStore) => void

export default class TodoStore {
    public todos: Todo[] = []

    private static i = 0

    private static increment () {
        return this.i++
    }

    private callbacks: ChangeCallBack[] = []

    inform() {
        this.callbacks.forEach(cb => cb(this))
    }

    addTodo (title: string): void {
        this.todos = [{
            id: TodoStore.increment(),
            title: title,
            completed: false
        }, ...this.todos]
        this.inform()
    }

    onChange (cb: ChangeCallBack) {
        this.callbacks.push(cb)
    }

    removeTodo (todo: Todo): void {
        this.todos = this.todos.filter(t => t !== todo)
        this.inform()

    }

    toggleTodo (todo : Todo): void {
        this.todos = this.todos.map( t => t === todo ? { ...t, completed: !t.completed }: t)
        this.inform()
    }

    toggleAll (completed = true): void {
        this.todos = this.todos.map( t => completed !== t.completed ? { ...t, completed }: t)
        this.inform()
    }

    updateTitle (todo: Todo, title: string): void {
        console.log('update')
        this.todos = this.todos.map( t => t === todo ? { ...t, title}: t )
        this.inform()
    }

    clearCompleted (): void {
        this.todos = this.todos.filter(t => !t.completed)
        this.inform()
    }

}