interface ICreateTicketDTO {
  id?: string;
  title: string;
  description: string;
  user_id?: any;
  city_id?: string;
  status: string;
  due_date: Date;
}

export { ICreateTicketDTO };
