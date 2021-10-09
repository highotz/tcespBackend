interface ICreateTicketDTO {
  id?: number;
  title: string;
  description: string;
  user_id?: string;
  city_id: string;
  status: string;
  due_date: Date;
}

export { ICreateTicketDTO };
