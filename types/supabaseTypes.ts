export interface Stocks {
  id: number;
  company_name: string;
  ticker: string;
  buy_price: number;
  purchased_date: Date;
  created_at: Date;
}

export interface Spending {
  id: number;
  user_id: string;
  spend_type: string;
  spend_amount: number;
  spend_date: Date;
  created_at: Date;
}

export interface Savings {
  id: number;
  user_id: string;
  savings_type: string;
  savings_amount: number;
  start_date: Date;
  savings_motivation: string;
  target_amount: number;
  target_date: Date;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  password: string;
  email: string;
  created_at: Date;
}
