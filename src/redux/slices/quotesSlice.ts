import { createSlice } from '@reduxjs/toolkit';

interface Quote {
  id: string;
  title: string;
  status: string;
  department: string;
  items: Array<{ name: string; quantity: number; price: number }>;
}

interface QuotesState {
  quotes: Quote[];
}

const initialState: QuotesState = {
  quotes: [
    {
      id: 'RQ01234',
      title: 'Request for Equipments',
      status: 'Awaiting',
      department: 'Maternity',
      items: [
        { name: 'Oxygen Concentrator', quantity: 100, price: 200 },
        { name: 'Mechanical Ventilator', quantity: 45, price: 350 },
      ],
    },
  ],
};

const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {},
});

export default quotesSlice.reducer;
