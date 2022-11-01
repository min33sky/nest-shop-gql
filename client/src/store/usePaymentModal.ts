import create from 'zustand';

interface PaymentModalState {
  paymentModalOpen: boolean;
  openPaymentModal: () => void;
  closePaymentModal: () => void;
}

export const usePaymentModal = create<PaymentModalState>((set) => ({
  paymentModalOpen: false,
  openPaymentModal: () => {
    set((state) => ({ ...state, paymentModalOpen: true }));
  },
  closePaymentModal: () => {
    set((state) => ({ ...state, paymentModalOpen: false }));
  },
}));
