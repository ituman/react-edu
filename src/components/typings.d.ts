export type ITodo = {
  title: string
  id: number
  completed: boolean
}
export interface TodoFormProps {
  onAdd(title: string): void;
}
